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
              Privacy policy
            </h1>
            <div className="mt-6 grid gap-4 text-lg leading-snug [&>h2]:mt-8 [&>h2]:font-semibold [&>h2]:text-2xl text-pretty">
              <p className="text-text-medium">
                Last updated: July 2026
              </p>
              <p className="text-balance">
                Your privacy is important to us. This Privacy Policy explains what information we collect, how we use it, and how we protect it when you use
                <strong className="font-medium">
                  Eyeballs
                </strong>
                (the “Service”).
              </p>
              <h2>
                Information We Collect
              </h2>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  <strong className="font-medium">
                    Personal information
                  </strong>
                  you provide directly, such as your name, email address, and payment details when you sign up or make a purchase.
                </li>
                <li>
                  <strong className="font-medium">
                    Enquiry information
                  </strong>
                  you submit through our enquiry form, including your name, email address, message, and the page you submitted it from. We also process your IP address briefly to help prevent spam and abuse.
                </li>
                <li>
                  <strong className="font-medium">
                    Website analytics
                  </strong>
                  collected through Fathom Analytics, such as aggregate page views, referrers, and device or browser categories. Fathom does not use cookies and does not give us information that identifies you.
                </li>
                <li>
                  <strong className="font-medium">
                    Essential app data
                  </strong>
                  if you sign up or log in, such as session information needed to keep you signed in, provide account features, remember app preferences, or support security.
                </li>
              </ul>
              <h2>
                How We Use Information
              </h2>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  Provide, maintain, and improve the Service
                </li>
                <li>
                  Process payments and manage billing
                </li>
                <li>
                  Communicate with you (for example, updates or support messages)
                </li>
                <li>
                  Respond to enquiries and send enquiry confirmation emails
                </li>
                <li>
                  Detect, prevent, and limit spam, abuse, or misuse of forms
                </li>
                <li>
                  Review aggregate analytics to improve performance and features
                </li>
              </ul>
              <h2>
                Analytics
              </h2>
              <p>
                We use Fathom Analytics to understand website traffic in a privacy-friendly way so we can improve our website and business. Fathom does not use cookies, and your IP address is only processed briefly. We do not use Fathom to identify you, and Fathom states that its analytics comply with GDPR, ePrivacy, PECR, COPPA, and CCPA.
              </p>
              <h2>
                Information Sharing
              </h2>
              <p>
                We do
                <strong className="font-medium">
                  not
                </strong>
                sell your personal information. We may share limited data with:
              </p>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  <strong className="font-medium">
                    Service providers
                  </strong>
                  — payment processors like Stripe and hosting providers who help operate the Service
                </li>
                <li>
                  <strong className="font-medium">
                    Email delivery providers
                  </strong>
                  — we use to send enquiry notifications and confirmation emails
                </li>
                <li>
                  <strong className="font-medium">
                    Legal authorities
                  </strong>
                  — if required to comply with the law or protect our rights
                </li>
              </ul>
              <p>
                All third parties are required to handle your data securely and only for the purposes described above.
              </p>
              <h2>
                Data Retention
              </h2>
              <p>
                We keep personal information only for as long as reasonably needed to provide the Service, respond to enquiries, maintain business records, prevent abuse, and comply with legal obligations.
              </p>
              <h2>
                Data Security
              </h2>
              <p>
                We use reasonable technical and organizational measures to protect your information against unauthorized access, loss, or misuse. However, no method of transmission over the internet or electronic storage is completely secure.
              </p>
              <h2>
                Your Rights
              </h2>
              <p>
                You may request access to, correction of, or deletion of your personal information by contacting us.
              </p>
              <h2>
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. The latest version will always be posted on this page with the updated date.
              </p>
              <h2>
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us.
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
