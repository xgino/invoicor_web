import type { Metadata } from "next";
import { B, H, LEGAL_LINK, LegalPage, P, S } from "@/components/sections/content/legal";
import { CONTACT_EMAIL } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service | Invoicor",
  description:
    "The terms that apply when you use the Invoicor invoicing app and website: accounts, subscriptions, acceptable use, liability, and governing law.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro={
        <>
          Last updated: November 18, 2026 &middot; Invoicor &middot; Operated from the Netherlands
        </>
      }
    >
      <S n="1" t="Agreement to Terms">
        <P>
          By creating an account, downloading, or using the Invoicor application and related
          services (the &quot;Service&quot;), you agree to be legally bound by these Terms of
          Service (the &quot;Terms&quot;). If you do not agree, you must not use the Service.
        </P>
        <P>
          If you are using the Service on behalf of a business or organization, you represent that
          you have the authority to bind that entity to these Terms.
        </P>
        <P>
          We may update these Terms to reflect changes in our services, legal requirements, or
          business practices. When we make material changes, we will notify you through the app or
          via email. Your continued use of the Service after notification constitutes acceptance of
          the updated Terms.
        </P>
      </S>

      <S n="2" t="Description of Service">
        <P>
          Invoicor is a mobile invoicing application that allows users to create, send, and track
          PDF invoices. The Service operates as a cloud-based platform, your data is stored on our
          servers and accessed via API. An active internet connection is required.
        </P>
        <P>
          We reserve the right to modify, suspend, or discontinue any part of the Service at any
          time. We will make reasonable efforts to notify you of significant changes that affect
          your use.
        </P>
      </S>

      <S n="3" t="Account Registration and Security">
        <P>
          You must be at least 18 years of age to create an account. You are responsible for
          maintaining the confidentiality of your login credentials and for all activity under your
          account. Notify us immediately of any unauthorized access.
        </P>
        <P>
          We reserve the right to suspend or terminate accounts that we reasonably believe to be
          compromised, fraudulent, or in violation of these Terms.
        </P>
      </S>

      <S n="4" t="User Content and Responsibility">
        <P>
          Invoicor provides a tool to generate invoices. We do not audit, verify, or endorse the
          content you create. You are solely responsible for the accuracy, legality, and tax
          compliance of all invoices and documents you generate.
        </P>
        <P>
          You agree not to use the Service for fraudulent billing, money laundering, tax evasion, or
          any illegal purpose. Invoicor accepts no liability for disputes between you and your
          clients, tax authorities, or any third party.
        </P>
        <P>
          You retain ownership of your content. By using the Service, you grant us a limited license
          to process, store, and display your content solely to provide the Service to you.
        </P>
      </S>

      <S n="5" t="Payments Between You and Your Clients, and Fraud" id="payments-and-fraud">
        <P>
          Invoicor is a tool for creating invoices. It is not a bank, payment service provider,
          payment gateway or escrow service. We do not process, receive, hold, transfer or verify
          any payment between you and your clients, and we do not check the payment links, bank
          details or other payment instructions that a user adds to an invoice.
        </P>
        <P>
          Payment links and payment details on an invoice are added by the user who created it and
          lead to services we do not control (for example PayPal, Stripe, Wise or a bank). Those
          services&apos; own terms and fees apply.
        </P>
        <H>
          If you receive an invoice made with Invoicor: Invoicor did not write its contents and does
          not guarantee that the sender, the amount or the payment details are genuine. Always check
          an invoice before you pay it: that you ordered the work or goods, that the amount is
          right, and that the payment details belong to the sender. If payment details have changed
          or anything looks unusual, contact the sender through a phone number or address you
          already know (not the details on the invoice) before paying.
        </H>
        <P>
          To the maximum extent permitted by applicable law, Invoicor is not liable for fraud,
          scams, phishing, impersonation, incorrect or misdirected payments, chargebacks, or any
          other loss arising from an invoice created with the Service, or from disputes between
          users and their clients or any other third party. You are responsible for the invoices you
          send and for the payment details on them.
        </P>
        <P>
          We may suspend or close accounts used to send fraudulent or misleading invoices and may
          cooperate with law enforcement where required. To report a suspicious invoice made with
          Invoicor, email us at the address in the Contact section. By using the Service, you agree
          to this section.
        </P>
      </S>

      <S n="6" t="Subscriptions and Payments">
        <P>
          Invoicor offers free and paid subscription plans. Paid plans are billed through the Apple
          App Store as auto-renewable subscriptions. All billing, payment processing, renewals, and
          refunds are handled entirely by Apple.
        </P>
        <P>
          Subscription prices may change with advance notice. You can manage and cancel your
          subscription at any time through your Apple ID account settings. Cancellation takes effect
          at the end of the current billing period.
        </P>
        <P>
          Invoicor does not process, see, or store your payment information. For billing disputes or
          refund requests, contact Apple Support.
        </P>
      </S>

      <S n="7" t="Third-Party Services">
        <P>
          The Service integrates with third-party platforms including Apple (authentication and
          payments), RevenueCat (subscription validation), and cloud infrastructure providers
          (hosting). These entities operate as independent data controllers or processors.
        </P>
        <H>
          You acknowledge and agree that Invoicor is not liable for any failures, outages, data
          breaches, or damages caused by third-party services. Their data practices are governed by
          their respective privacy policies and terms.
        </H>
        <P>
          If you lose access to your Apple account or a third-party service experiences downtime,
          Invoicor cannot be held responsible for any resulting inability to access the Service or
          any data exposure.
        </P>
      </S>

      <S n="8" t="Service Availability and Disclaimer of Warranties">
        <H>
          THE SERVICE IS PROVIDED ON AN &quot;AS-IS&quot; AND &quot;AS-AVAILABLE&quot; BASIS. TO THE
          MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, INVOICOR DISCLAIMS ALL WARRANTIES, EXPRESS OR
          IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
          NON-INFRINGEMENT, AND UNINTERRUPTED OR ERROR-FREE OPERATION.
        </H>
        <P>
          We do not guarantee 100% uptime. Planned maintenance, unplanned outages, network issues,
          and third-party disruptions may temporarily affect availability. We will make commercially
          reasonable efforts to minimize downtime.
        </P>
        <P>
          We do not warrant that calculations will be error-free, that the Service will meet your
          specific requirements, or that it will be compatible with all devices or network
          configurations.
        </P>
        <P>
          <B>Security.</B> We protect the Service with standard security measures (encrypted
          connections, hashed passwords, restricted server access). No online service is completely
          secure. To the maximum extent permitted by applicable law, Invoicor is not liable for
          damage caused by hacking, unauthorized access or other security incidents that happen
          despite these measures. You are responsible for keeping your device and sign-in details
          secure.
        </P>
      </S>

      <S n="9" t="Limitation of Liability">
        <H>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, INVOICOR, ITS FOUNDERS, DIRECTORS,
          EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, REVENUE, DATA, BUSINESS
          OPPORTUNITIES, OR BUSINESS INTERRUPTION, ARISING FROM YOUR USE OF OR INABILITY TO USE THE
          SERVICE, REGARDLESS OF LEGAL THEORY, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </H>
        <H>
          OUR TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO INVOICOR IN THE
          TWELVE (12) MONTHS PRECEDING THE CLAIM, OR FIFTY EUROS (€50), WHICHEVER IS GREATER.
        </H>
        <P>
          This applies to damages from cyberattacks, server outages, API failures, data loss,
          unauthorized access, or force majeure events (natural disasters, war, pandemics,
          government actions, or any circumstance beyond our reasonable control).
        </P>
        <P>
          Some jurisdictions do not allow certain limitations. In those jurisdictions, our liability
          is limited to the maximum extent permitted by law.
        </P>
      </S>

      <S n="10" t="Indemnification">
        <P>
          You agree to indemnify, defend, and hold harmless Invoicor and its affiliates from any
          claims, losses, damages, liabilities, and expenses (including legal fees) arising from:
          (a) your use of the Service; (b) your violation of these Terms; (c) your violation of any
          law; (d) the content of your invoices; or (e) any dispute between you and third parties.
        </P>
      </S>

      <S n="11" t="Intellectual Property">
        <P>
          The Service, including its design, code, templates, and branding, is the exclusive
          property of Invoicor. These Terms grant you only a limited right to use the Service as
          described herein. You may not copy, modify, distribute, or reverse-engineer any part of
          the Service without prior written consent.
        </P>
      </S>

      <S n="12" t="Acceptable Use">
        <P>
          You agree not to: (a) use the Service for any unlawful purpose; (b) attempt unauthorized
          access to the Service or its infrastructure; (c) interfere with or disrupt the Service;
          (d) use automated tools to scrape or extract data; (e) impersonate another person; or (f)
          transmit malware, spam, or harmful content.
        </P>
      </S>

      <S n="13" t="Account Termination">
        <P>
          You may delete your account at any time through the app. Upon deletion, your data will be
          permanently removed in accordance with our Privacy Policy.
        </P>
        <P>
          We reserve the right to suspend or terminate your account without prior notice for any
          reason, including breach of these Terms or fraudulent activity. Upon termination, your
          right to use the Service ceases immediately.
        </P>
      </S>

      <S n="14" t="Governing Law and Disputes">
        <P>
          These Terms are governed by the laws of the Netherlands. Disputes shall be subject to the
          exclusive jurisdiction of the competent courts in the Netherlands.
        </P>
        <P>
          Before initiating formal proceedings, you agree to attempt informal resolution by
          contacting {CONTACT_EMAIL}. We will make reasonable efforts to resolve matters within 30
          days.
        </P>
      </S>

      <S n="15" t="Severability">
        <P>
          If any provision is found unenforceable, the remaining provisions continue in full force.
          The unenforceable provision shall be modified to the minimum extent necessary to preserve
          its intent.
        </P>
      </S>

      <S n="16" t="Entire Agreement">
        <P>
          These Terms, together with our Privacy Policy, constitute the entire agreement between you
          and Invoicor regarding the Service.
        </P>
      </S>

      <S n="17" t="Contact">
        <P>
          Questions about these Terms? Contact us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className={LEGAL_LINK}>
            {CONTACT_EMAIL}
          </a>
          .
        </P>
      </S>
    </LegalPage>
  );
}
