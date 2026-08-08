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
              Terms of Service
            </h1>
            <div className="mt-6 grid gap-4 text-lg leading-snug [&>h2]:mt-8 [&>h2]:font-medium [&>h2]:text-2xl text-pretty">
              <p className="text-text-medium">
                Last updated: June 2026
              </p>
              <p>
                By accessing and using
                <strong className="font-medium">
                  Eyeballs
                </strong>
                (the “Service”), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the below, please do not use this service.
              </p>
              <h2>
                The Service
              </h2>
              <p>
                The Service is operated by
                <strong className="font-medium">
                  Eyeballs LLC
                </strong>
                (“we”, “our”, “us”). These Terms apply to all use of the Service.
              </p>
              <h2>
                Accounts
              </h2>
              <p>
                You must create an account to use the Service. You are responsible for keeping your login credentials secure and for all activity under your account.
              </p>
              <h2>
                Subscriptions and Payments
              </h2>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  Subscriptions are billed
                  <strong className="font-medium">
                    monthly
                  </strong>
                  through Stripe.
                </li>
                <li>
                  You can manage or cancel your subscription at any time via the Stripe customer portal, accessed from your Settings page.
                </li>
                <li>
                  When you cancel, account features remain available until the end of the current billing period. No refunds are offered for partial months or unused time.
                </li>
              </ul>
              <h2>
                User Content
              </h2>
              <p>
                You are responsible for all content you upload or publish through the Service. By uploading or publishing content, you confirm that:
              </p>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  You own the rights to it or have permission to use it.
                </li>
                <li>
                  It does not infringe any copyright, trademark, or other third-party rights.
                </li>
                <li>
                  It does not contain illegal, abusive, or harmful material.
                </li>
              </ul>
              <p>
                We may remove content or suspend accounts that, in our reasonable opinion, violate these Terms or applicable law.
              </p>
              <h2>
                Intellectual Property
              </h2>
              <p>
                You retain ownership of the content you create and publish using the Service. By uploading content, you grant Eyeballs a worldwide, non-exclusive, royalty-free license to use, reproduce, distribute, and display your content solely for the purpose of operating and providing our services.
              </p>
              <p>
                All software, design, and branding of the Service remain the property of
                <strong className="font-medium">
                  Eyeballs LLC
                </strong>
                .
              </p>
              <h2>
                Service Availability
              </h2>
              <p>
                We aim to keep the Service available, but we do not guarantee uninterrupted or error-free operation. We may modify, suspend, or discontinue parts of the Service at any time, with or without notice.
              </p>
              <h2>
                Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law,
                <strong className="font-medium">
                  Eyeballs LLC
                </strong>
                will not be liable for any indirect, incidental, or consequential damages arising from or in connection with your use of the Service.
              </p>
              <h2>
                Governing Law
              </h2>
              <p>
                These Terms are governed by and interpreted in accordance with the laws of
                <strong className="font-medium">
                  Florida, USA
                </strong>
                . Any disputes shall be handled exclusively by the courts of Florida, USA.
              </p>
              <h2>
                Contact
              </h2>
              <p>
                For questions or support, contact us
              </p>
            </div>
          </div>
        </div>
        <footer className="pb-6">
          <div className="flex items-center gap-2 justify-center">
            <div className="marketing-chrome max-md:flex max-md:items-center md:fixed md:z-50 md:bottom-9 xl:bottom-15 md:right-7 xl:right-13 flex">
              <a target="_blank" rel="noreferrer" className="marketing-chrome-link relative px-2 md:px-3 h-6 flex items-center" href="https://www.instagram.com/aceintelligence_ai">
                Instagram
              </a>
            </div>
          </div>
          <div className="relative mt-4 md:mt-0 md:absolute md:bottom-9 xl:bottom-15 left-1/2 -translate-x-1/2 flex opacity-60 justify-center">
            <div className="px-2 text-sm md:text-base md:px-3 h-6 flex items-center">
              © 2026 Eyeballs LLC
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
