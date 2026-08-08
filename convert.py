import re
from bs4 import BeautifulSoup, Comment, Tag
from bs4.element import NavigableString

ATTR_MAP = {
    'class': 'className',
    'for': 'htmlFor',
    'viewbox': 'viewBox',
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-miterlimit': 'strokeMiterlimit',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset',
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
    'clip-path': 'clipPath',
    'crossorigin': 'crossOrigin',
    'charset': 'charSet',
    'autocomplete': 'autoComplete',
    'autofocus': 'autoFocus',
    'tabindex': 'tabIndex',
    'readonly': 'readOnly',
    'colspan': 'colSpan',
    'rowspan': 'rowSpan',
    'fetchpriority': 'fetchPriority',
    'referrerpolicy': 'referrerPolicy',
    'novalidate': 'noValidate',
    'playsinline': 'playsInline',
    'autoplay': 'autoPlay',
    'srcset': 'srcSet',
}

SELF_CLOSING = {
    'img', 'input', 'br', 'hr', 'meta', 'link', 'source', 'track', 'wbr',
    'area', 'param', 'embed', 'path', 'circle', 'rect', 'line', 'polygon',
    'polyline', 'stop', 'use'
}

def camel_case_style(style_str):
    if not style_str or not style_str.strip():
        return None
    props = []
    for part in style_str.split(';'):
        if ':' in part:
            k, v = part.split(':', 1)
            k = k.strip()
            v = v.strip()
            if not k:
                continue
            k_camel = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
            v_escaped = v.replace('"', '\\"')
            props.append(f'"{k_camel}": "{v_escaped}"')
    if not props:
        return None
    # Double braces for JSX style prop: style={{ key: val }}
    return '{{' + ', '.join(props) + '}}'

def fix_href(url):
    if not url:
        return url
    url = url.replace('index.html', '').replace('.html', '')
    if url == '':
        return '/'
    return url

def node_to_jsx(node, depth=0):
    indent = "  " * depth
    if isinstance(node, Comment):
        return ""
    if isinstance(node, NavigableString):
        s = str(node).strip()
        if not s:
            return ""
        s = s.replace('{', '&#123;').replace('}', '&#125;')
        return f"{indent}{s}\n"
    if not isinstance(node, Tag):
        return ""

    tag_name = node.name.lower()

    if tag_name in ['template', 'script']:
        content = node.string or node.text or ""
        if 'self.__next_f' in content or '$Sreact' in content or tag_name == 'template':
            return ""

    jsx_attrs = []
    for attr_name, attr_val in node.attrs.items():
        attr_lower = attr_name.lower()
        jsx_key = ATTR_MAP.get(attr_lower, attr_name)

        if isinstance(attr_val, list):
            attr_val = " ".join(attr_val)

        if jsx_key == 'href':
            attr_val = fix_href(attr_val)

        if jsx_key == 'style':
            style_obj = camel_case_style(attr_val)
            if style_obj:
                jsx_attrs.append(f'style={style_obj}')
            continue

        if isinstance(attr_val, bool):
            if attr_val:
                jsx_attrs.append(jsx_key)
            continue

        if attr_val == '' and jsx_key in ['hidden', 'disabled', 'readOnly', 'required', 'checked', 'controls']:
            jsx_attrs.append(jsx_key)
            continue

        val_str = str(attr_val).replace('"', '&quot;')
        jsx_attrs.append(f'{jsx_key}="{val_str}"')

    attr_str = " " + " ".join(jsx_attrs) if jsx_attrs else ""

    children = list(node.children)
    if tag_name in SELF_CLOSING and not children:
        return f"{indent}<{tag_name}{attr_str} />\n"

    child_jsx_list = []
    for c in children:
        res = node_to_jsx(c, depth + 1)
        if res:
            child_jsx_list.append(res)

    if not child_jsx_list:
        return f"{indent}<{tag_name}{attr_str}></{tag_name}>\n"
    
    children_str = "".join(child_jsx_list)
    return f"{indent}<{tag_name}{attr_str}>\n{children_str}{indent}</{tag_name}>\n"

def convert_html_file(html_filepath):
    with open(html_filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    body = soup.find('body')
    if not body:
        return ""

    jsx_nodes = []
    for child in body.children:
        if isinstance(child, Tag) and child.name == 'script':
            continue
        jsx = node_to_jsx(child, depth=2)
        if jsx.strip():
            jsx_nodes.append(jsx)

    body_content = "".join(jsx_nodes)

    component_code = f'''"use client";

import React from "react";

export default function Page() {{
  return (
    <div suppressHydrationWarning>
{body_content}
    </div>
  );
}}
'''
    return component_code

