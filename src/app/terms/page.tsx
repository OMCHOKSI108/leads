"use client";

import React from "react";

export default function Page() {
  return (
    <div suppressHydrationWarning>
    <div hidden></div>
    <div className="marketing-page min-h-screen">
      <main className="px-6 md:px-10 antialiased bg-sage">
        <div className="relative py-24 md:py-40">
          <div className="max-w-xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-balance font-serif leading-[1.1]">
              Terms &amp; Conditions
            </h1>
            <div className="mt-6 grid gap-4 text-lg leading-snug [&>h2]:mt-8 [&>h2]:font-semibold [&>h2]:text-2xl text-pretty">
              <p className="text-text-medium">
                <strong className="font-medium">Last updated:</strong> 20 April 2026
              </p>
              
              <h2>1. Agreement</h2>
              <p>
                By using or purchasing from Elevatexis Digital, you agree to these Terms &amp; Conditions. If you don't agree, please do not buy or access any content.
              </p>

              <h2>2. Products &amp; License</h2>
              <p>
                Elevatexis Digital provides digital products: faceless video templates, outreach scripts, niche lead lists, funnels &amp; conversion copy, and related software ("Products").
              </p>
              <p>
                When you purchase, we grant you a <strong className="font-medium">commercial license</strong>. This means you may use the Products for your own business <strong className="font-medium">and resell them</strong> as part of your own offers, packages, or services.
              </p>
              <p>
                You may modify, brand, and market the Products as your own, but you <strong className="font-medium">cannot resell or share the raw Vault access</strong> (i.e., don't give away direct access to our platform).
              </p>

              <h2>3. Payment &amp; Access</h2>
              <p>
                You pay the price shown at checkout. Payment methods are processed securely.
              </p>
              <p>
                After payment, you receive access to the Products via secure links / dashboard / software as described. You must not share your login or Vault access credentials.
              </p>

              <h2>4. No Refunds</h2>
              <p>
                Because the Products are digital and delivered immediately upon purchase, <strong className="font-medium">all sales are final</strong>.
              </p>
              <p>
                Once you access the Vault or download any material, there is no refund.
              </p>

              <h2>5. Support &amp; Updates</h2>
              <p>
                We offer customer support for access issues or problems with the Products.
              </p>
              <p>
                When we update templates or tools, existing customers may get access as per the update policy (if any).
              </p>

              <h2>6. Intellectual Property</h2>
              <p>
                All content, design, templates, copy, software, and other material remain the property of Elevatexis Digital.
              </p>
              <p>
                You have the right to <strong className="font-medium">use and resell the Products</strong> under the commercial license, but ownership of the Vault platform and original brand remains with Elevatexis Digital.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                We make efforts to ensure Products are high quality and work correctly, but we do not guarantee specific income or results. Your success depends on how you use them.
              </p>
              <p>
                We are not liable for indirect or consequential losses.
              </p>

              <h2>8. Changes to Terms</h2>
              <p>
                We may change these Terms &amp; Conditions anytime. Updated terms will be posted on this page. Your continued use or access after changes means you accept the new terms.
              </p>

              <h2>9. Governing Law &amp; Disputes</h2>
              <p>
                These Terms are governed by United Kingdom law.
              </p>
              <p>
                If there's a dispute, we will try to resolve it by mutual agreement. If not, the courts of United Kingdom will have jurisdiction.
              </p>

              <h2>10. Contact</h2>
              <p>
                If you have questions or issues, contact us at:
              </p>
              <p>
                <strong className="font-medium">Email:</strong> elevatexisdigital@gmail.com
              </p>
              <p>
                By completing your order, you agree to this <strong className="font-medium">no-refund policy</strong>.
              </p>
            </div>
          </div>
        </div>
        <footer className="pb-6">
          <div className="flex items-center gap-2 justify-center">
            <div className="marketing-chrome max-md:flex max-md:items-center md:fixed md:z-50 md:bottom-9 xl:bottom-15 md:right-7 xl:right-13 flex">
              
            </div>
          </div>
          <div className="relative mt-4 md:mt-0 md:absolute md:bottom-9 xl:bottom-15 left-1/2 -translate-x-1/2 flex opacity-60 justify-center">
            <div className="px-2 text-sm md:text-base md:px-3 h-6 flex items-center">
              © 2026 Elevatexis Digital
            </div>
            <a className="marketing-chrome-link relative px-2 text-sm md:text-base md:px-3 h-6 flex items-center" href="/privacy">
              Privacy
            </a>
            <a className="marketing-chrome-link relative px-2 text-sm md:text-base md:px-3 h-6 flex items-center" href="/terms">
              Terms
            </a>
          </div>
        </footer>
      </main>
    </div>
    <div id="app-top-right-portal" className="pointer-events-none fixed top-3 right-3 z-70 flex flex-col items-end gap-3"></div>

    </div>
  );
}
