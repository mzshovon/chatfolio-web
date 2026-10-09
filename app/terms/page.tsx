import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "The terms that govern your use of Chatfolio, including plans, billing, AI and data use, and acceptable use.",
  alternates: { canonical: "/terms" },
};

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of these terms",
    content: (
      <>
        <p>
          These Terms and Conditions (&ldquo;Terms&rdquo;) are an agreement between you and{" "}
          {LEGAL.companyName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) governing your access to and use of{" "}
          {LEGAL.productName}, including our website, applications and AI features (the
          &ldquo;Service&rdquo;). By creating an account or using the Service you agree to these Terms and
          our <Link href="/privacy">Privacy Policy</Link>. If you do not agree, do not use the Service.
        </p>
        <p>
          You must be at least 16 years old and able to form a binding contract. If you use the Service for
          an organisation, you confirm you have authority to bind it.
        </p>
      </>
    ),
  },
  {
    id: "service",
    title: "The Service",
    content: (
      <p>
        Chatfolio lets you turn your CV and professional information into an AI-powered assistant that
        answers questions from recruiters and other visitors on your behalf. We may add, change or remove
        features, and may limit or suspend the Service for maintenance or security reasons.
      </p>
    ),
  },
  {
    id: "accounts",
    title: "Your account",
    content: (
      <ul>
        <li>Provide accurate information and keep it up to date.</li>
        <li>Keep your credentials confidential; you are responsible for all activity under your account.</li>
        <li>Tell us promptly at <a href={`mailto:${LEGAL.supportEmail}`}>{LEGAL.supportEmail}</a> if you suspect unauthorised access.</li>
        <li>One person per account; do not share or resell access.</li>
      </ul>
    ),
  },
  {
    id: "plans",
    title: "Plans: Freemium and paid",
    content: (
      <>
        <h3>Freemium (free)</h3>
        <p>
          The Freemium plan is provided at no charge, subject to usage limits shown on our{" "}
          <Link href="/#pricing">pricing section</Link>, which currently include one Chatfolio domain, a
          daily chat allowance and limits on domain slugs and AI context size. We may change these limits
          and features at any time. Free accounts that remain inactive for an extended period may be
          deactivated after notice.
        </p>

        <h3>Paid plans</h3>
        <p>
          Paid plans (such as Pro and Teams, when made available) unlock additional features described at
          the time of purchase, for example publishing, custom slugs and full chat history.
        </p>
        <ul>
          <li>
            <strong>Fees and currency.</strong> Prices are shown in USD or BDT and exclude applicable taxes
            (such as VAT/GST) unless stated. You authorise us and our payment processor to charge your
            chosen payment method.
          </li>
          <li>
            <strong>Billing cycle and renewal.</strong> Paid plans are billed in advance and renew
            automatically each billing period until cancelled.
          </li>
          <li>
            <strong>Cancellation.</strong> You may cancel at any time from your account; cancellation takes
            effect at the end of the current billing period and you keep access until then.
          </li>
          <li>
            <strong>Refunds.</strong> Except where required by law or stated at purchase, fees are
            non-refundable and we do not give credits for partial periods. Nothing here limits your
            statutory consumer rights.
          </li>
          <li>
            <strong>Price changes.</strong> We will give at least 30 days&apos; notice of any price change to
            an active subscription; it applies from your next renewal.
          </li>
          <li>
            <strong>Downgrades and non-payment.</strong> If payment fails or you downgrade, your account
            reverts to Freemium limits. Content exceeding those limits may be unpublished or become
            inaccessible, and may be deleted after a reasonable notice period.
          </li>
        </ul>
        <p>
          Enterprise or custom arrangements are governed by the separate order or agreement we sign with you,
          which prevails over these Terms in case of conflict.
        </p>
      </>
    ),
  },
  {
    id: "your-content",
    title: "Your content",
    content: (
      <>
        <p>
          &ldquo;Your Content&rdquo; means the CV, profile information, documents and other material you
          submit. You keep all ownership of Your Content. You grant us a limited, worldwide,
          non-exclusive licence to host, process, index and display Your Content, and to send it to our
          service providers, solely to operate, secure and support the Service for you.
        </p>
        <p>You confirm that you own or have the right to use Your Content, that it is accurate, and that it does not violate anyone&apos;s rights or the law. You are responsible for deciding what information to publish through your Chatfolio, including any personal data about third parties.</p>
      </>
    ),
  },
  {
    id: "ai-data",
    title: "AI features and user data policy",
    content: (
      <>
        <p>
          The Service uses third-party large language models (&ldquo;LLMs&rdquo;). This section summarises how
          your data is handled; the <Link href="/privacy#ai-llm">Privacy Policy</Link> gives full detail.
        </p>
        <ul>
          <li>
            <strong>Purpose-limited use.</strong> Your Content and visitor conversations are processed by LLM
            providers only to generate responses within your Chatfolio.
          </li>
          <li>
            <strong>No model training.</strong> We do not use Your Content or conversations to train general
            AI models, and we do not permit our providers to do so. This applies to Freemium and paid plans
            alike.
          </li>
          <li>
            <strong>Isolation.</strong> Your trained Chatfolio draws only on your own content and is not
            shared with, or used to answer questions for, other users.
          </li>
          <li>
            <strong>Outputs.</strong> As between you and us, you may use the AI-generated answers produced for
            your Chatfolio. Outputs may be similar to those generated for others and may be inaccurate,
            incomplete or out of date; they are not professional advice. You are responsible for reviewing
            and correcting what your Chatfolio says about you.
          </li>
          <li>
            <strong>No guarantees about outcomes.</strong> We do not promise interviews, offers or any
            hiring result, and Chatfolio does not make hiring decisions.
          </li>
          <li>
            <strong>Visitor data.</strong> Messages typed by visitors are visible to you and processed as
            described above. You must not use visitor data for unlawful, discriminatory or unsolicited
            marketing purposes.
          </li>
          <li>
            <strong>Visibility.</strong> Anything in Your Content may appear in answers to visitors. Do not
            upload secrets, credentials, or sensitive personal data you do not want disclosed.
          </li>
          <li>
            <strong>Deletion.</strong> You can delete Your Content or your account at any time; we remove or
            anonymise it as set out in the Privacy Policy, subject to backup and legal retention periods.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    content: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>break the law or infringe intellectual-property, privacy or other rights;</li>
          <li>upload false, misleading or impersonating content, including fake credentials or experience;</li>
          <li>submit hateful, harassing, discriminatory, sexually explicit or otherwise harmful content;</li>
          <li>attempt to bypass limits, scrape the Service, or probe, test or disrupt its security or availability;</li>
          <li>reverse engineer the Service or attempt to extract model prompts, weights or other users&apos; data;</li>
          <li>use the Service to build or train a competing product, or to send spam or malware;</li>
          <li>use the AI to generate content that is unlawful or that violates our providers&apos; usage policies.</li>
        </ul>
        <p>We may remove content or suspend accounts that breach this section.</p>
      </>
    ),
  },
  {
    id: "ip",
    title: "Our intellectual property",
    content: (
      <p>
        The Service, including its software, design, trademarks and documentation, is owned by us or our
        licensors and protected by law. We grant you a limited, revocable, non-transferable licence to use
        the Service under these Terms. We may use feedback you give us without obligation to you.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-party services",
    content: (
      <p>
        The Service relies on third-party services (hosting, LLMs, payments, analytics). Their availability
        and terms are outside our control, and your use of them may be subject to their own terms.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Suspension and termination",
    content: (
      <>
        <p>
          You may stop using the Service and delete your account at any time. We may suspend or terminate your
          access immediately if you breach these Terms, create risk or legal exposure, or fail to pay, and may
          end the Freemium plan with reasonable notice. On termination your right to use the Service ends;
          sections that by nature should survive (including ownership, disclaimers, liability limits and
          governing law) will survive.
        </p>
        <p>Where practical, we will give you a chance to export Your Content before deletion.</p>
      </>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimers",
    content: (
      <p>
        THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;. TO THE FULLEST EXTENT
        PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS
        FOR A PARTICULAR PURPOSE, ACCURACY OF AI OUTPUT, AND UNINTERRUPTED OR ERROR-FREE OPERATION. Some
        jurisdictions do not allow certain disclaimers, so parts of this section may not apply to you.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    content: (
      <>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, WE WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, REVENUE, DATA, OPPORTUNITIES OR GOODWILL.
          OUR TOTAL LIABILITY FOR ANY CLAIM RELATING TO THE SERVICE WILL NOT EXCEED THE GREATER OF (A) THE
          AMOUNT YOU PAID US IN THE 12 MONTHS BEFORE THE CLAIM AND (B) USD 100.
        </p>
        <p>Nothing in these Terms excludes liability that cannot be excluded by law, including for fraud, death or personal injury caused by negligence.</p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    content: (
      <p>
        You will defend and indemnify us against third-party claims, losses and reasonable costs arising from
        Your Content or your breach of these Terms or the law, except to the extent caused by us.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law and disputes",
    content: (
      <>
        <p>
          These Terms are governed by the laws of {LEGAL.governingLaw}, without regard to conflict-of-law
          rules. The courts of {LEGAL.governingLaw} have exclusive jurisdiction, except that you may bring
          proceedings in your country of residence where mandatory consumer law gives you that right. Please
          contact us first at <a href={`mailto:${LEGAL.supportEmail}`}>{LEGAL.supportEmail}</a> so we can try
          to resolve any dispute informally.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to these Terms",
    content: (
      <p>
        We may update these Terms. For material changes we will give at least 14 days&apos; notice by email or
        in the product. Continuing to use the Service after the effective date means you accept the updated
        Terms; if you do not, you must stop using it and may cancel.
      </p>
    ),
  },
  {
    id: "general",
    title: "General",
    content: (
      <ul>
        <li><strong>Entire agreement.</strong> These Terms and the Privacy Policy are the whole agreement between us about the Service.</li>
        <li><strong>Severability and waiver.</strong> If a provision is unenforceable, the rest remains in effect; failing to enforce a right is not a waiver.</li>
        <li><strong>Assignment.</strong> You may not assign these Terms without our consent; we may assign them in a merger or sale.</li>
        <li><strong>Force majeure.</strong> Neither party is liable for delays caused by events beyond reasonable control.</li>
      </ul>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    content: (
      <p>
        {LEGAL.companyName}, {LEGAL.companyAddress}
        <br />
        Email: <a href={`mailto:${LEGAL.supportEmail}`}>{LEGAL.supportEmail}</a>
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      updated={LEGAL.termsUpdated}
      intro={
        <p>
          Please read these terms carefully. They set out the rules for using {LEGAL.productName}, how our
          Freemium and paid plans work, and how your data is handled by our AI features.
        </p>
      }
      sections={sections}
    />
  );
}
