import re
from bs4 import BeautifulSoup, Tag
from convert import node_to_jsx, fix_href

def get_page_body_jsx(html_filepath, section_id, section_title=None, extra_class=""):
    with open(html_filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    main = soup.find('main')
    if not main:
        body = soup.find('body')
        if not body:
            return ""
        # Find first container inside body
        main = body.find('div')

    jsx_nodes = []
    for child in main.children:
        if isinstance(child, Tag) and child.name == 'script':
            continue
        jsx = node_to_jsx(child, depth=3)
        if jsx.strip():
            jsx_nodes.append(jsx)

    content_jsx = "".join(jsx_nodes)

    # Convert asset paths /_next/static/ to /static/
    content_jsx = content_jsx.replace('/_next/static/', '/static/')

    title_markup = f'<h2 className="font-serif text-4xl md:text-5xl xl:text-6xl mb-8">{section_title}</h2>\n' if section_title else ''

    return f'''
      {{/* --- Section: {section_id.upper()} --- */}}
      <section id="{section_id}" className="scroll-mt-20 {extra_class}">
        {title_markup}{content_jsx}
      </section>
'''

def generate_single_page():
    # 1. Base header & hero from index.html
    with open('_raw_clone/www.eyeballs.co/index.html', 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    body = soup.find('body')
    
    # Extract Chrome / Nav bar / Top elements from index.html
    top_elements = []
    for child in body.children:
        if isinstance(child, Tag) and child.name != 'script':
            top_elements.append(child)

    # We will convert the full index.html body as the base, then append the other page sections into the main area or after hero!
    # Convert entire index.html body to JSX
    jsx_nodes = []
    for child in body.children:
        if isinstance(child, Tag) and child.name == 'script':
            continue
        jsx = node_to_jsx(child, depth=3)
        if jsx.strip():
            jsx_nodes.append(jsx)

    home_jsx = "".join(jsx_nodes)
    home_jsx = home_jsx.replace('/_next/static/', '/static/')

    # Extract additional page sections
    visibility_jsx = get_page_body_jsx('_raw_clone/www.eyeballs.co/visibility.html', 'visibility', extra_class="py-16 border-t border-white/10")
    websites_jsx = get_page_body_jsx('_raw_clone/www.eyeballs.co/websites.html', 'websites', extra_class="py-16 border-t border-white/10")
    about_jsx = get_page_body_jsx('_raw_clone/www.eyeballs.co/about.html', 'about', extra_class="py-16 border-t border-white/10")
    privacy_jsx = get_page_body_jsx('_raw_clone/www.eyeballs.co/privacy.html', 'privacy', section_title="Privacy Policy", extra_class="py-16 border-t border-white/10 max-w-4xl mx-auto px-6")
    terms_jsx = get_page_body_jsx('_raw_clone/www.eyeballs.co/terms.html', 'terms', section_title="Terms of Service", extra_class="py-16 border-t border-white/10 max-w-4xl mx-auto px-6")

    # Replace href links in home_jsx & all sections to use hash anchors
    # href="/visibility" -> href="#visibility"
    # href="/websites" -> href="#websites"
    # href="/about" -> href="#about"
    # href="/privacy" -> href="#privacy"
    # href="/terms" -> href="#terms"
    # href="/" -> href="#top"

    def replace_links(code):
        code = re.sub(r'href="/visibility"', 'href="#visibility"', code)
        code = re.sub(r'href="/websites"', 'href="#websites"', code)
        code = re.sub(r'href="/about"', 'href="#about"', code)
        code = re.sub(r'href="/privacy"', 'href="#privacy"', code)
        code = re.sub(r'href="/terms"', 'href="#terms"', code)
        code = re.sub(r'href="/"', 'href="#top"', code)
        return code

    home_jsx = replace_links(home_jsx)
    visibility_jsx = replace_links(visibility_jsx)
    websites_jsx = replace_links(websites_jsx)
    about_jsx = replace_links(about_jsx)
    privacy_jsx = replace_links(privacy_jsx)
    terms_jsx = replace_links(terms_jsx)

    # Insert visibility, websites, about, privacy, terms sections inside main before footer!
    # In home_jsx, find where <footer> starts or before closing </main>
    if '</main>' in home_jsx:
        parts = home_jsx.split('</main>')
        combined_main = parts[0] + visibility_jsx + websites_jsx + about_jsx + privacy_jsx + terms_jsx + "\n</main>" + parts[1]
    else:
        combined_main = home_jsx + visibility_jsx + websites_jsx + about_jsx + privacy_jsx + terms_jsx

    full_code = f'''"use client";

import React from "react";

export default function Page() {{
  return (
    <div id="top" className="scroll-smooth" suppressHydrationWarning>
{combined_main}
    </div>
  );
}}
'''
    return full_code

single_page_code = generate_single_page()
with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(single_page_code)

print(f"Generated single-page homepage in src/app/page.tsx ({len(single_page_code)} bytes)")
