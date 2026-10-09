import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import styles from "@/components/LegalPage.module.css";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Chatfolio collects, uses, shares and protects your personal data, and the choices and rights you have.",
  alternates: { canonical: "/privacy" },
};

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    content: (
      <>
        <p>
          {LEGAL.productName} is operated by {LEGAL.companyName}, {LEGAL.companyAddress} (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;). For the personal data described in this policy we act as the{" "}
          <strong>data controller</strong>, except where noted in section 5.
        </p>
        <p>
          Privacy questions and requests: <a href={`mailto:${LEGAL.privacyEmail}`}>{LEGAL.privacyEmail}</a>.
        </p>
      </>
    ),
  },
  {
    id: "data-we-collect",
    title: "Information we collect",
    content: (
      <>
        <h3>Information you give us</h3>
        <ul>
          <li>
            <strong>Account data</strong> — name, email address and sign-in credentials (or the identifier
            returned by a third-party sign-in provider).
          </li>
          <li>
            <strong>Profile content</strong> — your CV/résumé, work history, skills, projects, availability
            and any other material you upload or type so that your Chatfolio can answer questions about you.
          </li>
          <li>
            <strong>Billing data</strong> — for paid plans, your plan, billing country and transaction
            references. Card or wallet details are handled by our payment processor; we do not store full
            payment card numbers.
          </li>
          <li>
            <strong>Communications</strong> — messages sent through our contact form, feedback widget or
            support email.
          </li>
        </ul>

        <h3>Information from visitors who chat with a Chatfolio</h3>
        <ul>
          <li>The questions and messages a visitor (for example a recruiter) types into a Chatfolio, the AI
            replies, and any contact details the visitor chooses to share.</li>
        </ul>

        <h3>Information collected automatically</h3>
        <ul>
          <li>
            <strong>Usage and device data</strong> — pages viewed, referring page, approximate location
            (derived from IP address), browser, device and operating system, and timestamps.
          </li>
          <li>
            <strong>Cookies and similar technologies</strong> — see section 8.
          </li>
          <li>
            <strong>Security logs</strong> — IP address and request metadata used to detect abuse.
          </li>
        </ul>

        <p>
          We do not knowingly collect sensitive categories of data (such as health, religion or biometric
          data). Please do not include them in your profile content.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How and why we use information",
    content: (
      <>
        <div className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                <th>Purpose</th>
                <th>Legal basis (GDPR / UK GDPR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Provide the service: create your account, build and run your Chatfolio, answer visitor questions</td>
                <td>Performance of a contract</td>
              </tr>
              <tr>
                <td>Process payments, prevent fraud, keep records</td>
                <td>Contract; legal obligation; legitimate interests</td>
              </tr>
              <tr>
                <td>Secure the service, prevent abuse, debug and improve reliability</td>
                <td>Legitimate interests</td>
              </tr>
              <tr>
                <td>Measure site usage and improve the product (analytics)</td>
                <td>Consent where required by law; otherwise legitimate interests</td>
              </tr>
              <tr>
                <td>Respond to your messages and support requests</td>
                <td>Legitimate interests; contract</td>
              </tr>
              <tr>
                <td>Send service and billing notices</td>
                <td>Contract; legitimate interests</td>
              </tr>
              <tr>
                <td>Comply with law and enforce our terms</td>
                <td>Legal obligation; legitimate interests</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>We do not sell your personal information, and we do not share it for cross-context behavioural advertising.</p>
      </>
    ),
  },
  {
    id: "ai-llm",
    title: "AI and large language models (LLMs)",
    content: (
      <>
        <p>
          Chatfolio uses third-party large language model providers to turn your profile content into an AI
          assistant and to generate replies to visitors&apos; questions. This is how we handle that data:
        </p>
        <ul>
          <li>
            <strong>What is sent.</strong> Your profile content, the visitor&apos;s question and the relevant
            conversation context are sent to the LLM provider solely to produce a response.
          </li>
          <li>
            <strong>No training on your data.</strong> We do not use your profile content or conversations to
            train or fine-tune general-purpose AI models, and we use providers and settings under which your
            inputs and outputs are not used to train their models.
          </li>
          <li>
            <strong>Your Chatfolio only.</strong> The &ldquo;AI training&rdquo; feature indexes your content so
            your Chatfolio can answer from it. That index is used only for your Chatfolio and is not shared
            with other users.
          </li>
          <li>
            <strong>Retention at providers.</strong> Providers may retain inputs briefly (typically for abuse
            monitoring) as set out in their agreements with us, after which they are deleted.
          </li>
          <li>
            <strong>Limits of AI.</strong> AI output can be inaccurate. Review what your Chatfolio says about
            you. Please avoid including information you do not want shared with visitors, because the
            assistant may repeat anything in your profile content.
          </li>
          <li>
            <strong>Automated decisions.</strong> We do not make decisions about you that produce legal or
            similarly significant effects solely through automated processing. Chatfolio does not
            score, rank or reject candidates.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share information with",
    content: (
      <>
        <p>We share personal data only as needed, with:</p>
        <ul>
          <li>
            <strong>Service providers (processors)</strong> acting on our instructions: cloud hosting,
            LLM/AI providers, payment processors, analytics (Google Analytics), email and customer-support
            tools, and error monitoring.
          </li>
          <li>
            <strong>Visitors to your Chatfolio</strong>: content you choose to publish is visible to anyone
            with the link, and the assistant may draw on it when answering.
          </li>
          <li>
            <strong>Legal and safety</strong>: authorities or other parties when required by law or to protect
            rights, safety and security.
          </li>
          <li>
            <strong>Business transfers</strong>: a successor in a merger, acquisition or asset sale, subject to
            this policy.
          </li>
        </ul>
        <p>
          Where we act as a <strong>processor</strong> for a team or organisation that administers Chatfolio
          for its members, that organisation is the controller of the profile data and its own privacy
          notice applies alongside this policy.
        </p>
      </>
    ),
  },
  {
    id: "international",
    title: "International transfers",
    content: (
      <p>
        We and our providers may process data in countries other than your own, including countries that may
        not have equivalent data protection laws. Where required, we rely on safeguards such as the European
        Commission&apos;s Standard Contractual Clauses, the UK International Data Transfer Addendum, or an
        adequacy decision.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    content: (
      <>
        <ul>
          <li>Account and profile content: kept while your account is active, then deleted or anonymised within 30 days of account deletion.</li>
          <li>Visitor chat history: kept while your account is active so you can review it, unless you delete it earlier.</li>
          <li>Billing records: kept as required by tax and accounting law.</li>
          <li>Security logs: kept for a limited period, typically up to 12 months.</li>
          <li>Backups: overwritten on a rolling schedule after deletion.</li>
        </ul>
        <p>We may keep information longer where needed to resolve disputes, enforce our terms or comply with law.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    content: (
      <>
        <p>
          We use Google Analytics 4 to understand how visitors use our site (pages viewed, approximate
          location, device type). Google Analytics sets cookies and receives your IP address, which Google
          does not log or store in GA4. Data is processed by Google under its own{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          .
        </p>
        <p>
          You can opt out by using the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics opt-out add-on
          </a>
          , changing your browser&apos;s cookie settings, or enabling &ldquo;Do Not Track&rdquo;/Global
          Privacy Control where supported. We also use essential cookies or local storage needed for sign-in
          and security. Where the law requires consent for non-essential cookies, we will ask first.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "How we protect your data",
    content: (
      <>
        <ul>
          <li>Encryption in transit (HTTPS/TLS) and encryption at rest for stored data.</li>
          <li>Access controls, least-privilege access and authentication for staff and systems.</li>
          <li>Security headers including a strict Content Security Policy on this website.</li>
          <li>Vendor due diligence and data-processing agreements with providers.</li>
          <li>Logging, monitoring and a process for responding to security incidents.</li>
        </ul>
        <p>
          No system is perfectly secure. If a breach affects your personal data, we will notify you and
          regulators as required by law, typically without undue delay and, where the GDPR applies, within 72
          hours of becoming aware for regulators. To report a vulnerability, email{" "}
          <a href={`mailto:${LEGAL.privacyEmail}`}>{LEGAL.privacyEmail}</a>.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights and choices",
    content: (
      <>
        <p>Depending on where you live, you may have the right to:</p>
        <ul>
          <li>access the personal data we hold about you and receive a copy (including in a portable format);</li>
          <li>correct inaccurate or incomplete data;</li>
          <li>delete your data (&ldquo;right to be forgotten&rdquo;);</li>
          <li>restrict or object to certain processing, including processing based on legitimate interests;</li>
          <li>withdraw consent at any time, without affecting earlier processing;</li>
          <li>not be subject to solely automated decisions with significant effects;</li>
          <li>lodge a complaint with your local data protection authority.</li>
        </ul>
        <p>
          <strong>California and other US states.</strong> You may request to know, delete, correct or
          obtain a copy of your personal information, and opt out of &ldquo;sale&rdquo; or
          &ldquo;sharing&rdquo; (we do neither). We will not discriminate against you for exercising these
          rights. You may use an authorised agent to submit requests.
        </p>
        <p>
          To exercise a right, email <a href={`mailto:${LEGAL.privacyEmail}`}>{LEGAL.privacyEmail}</a>. We
          may need to verify your identity and will respond within the time required by law (generally 30–45
          days). Most profile data can also be edited or deleted directly from your account.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    content: (
      <p>
        Chatfolio is intended for people aged 16 and over, and is not directed to children. We do not
        knowingly collect data from children under 16. If you believe a child has given us personal data,
        contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-party links",
    content: (
      <p>
        Our site may link to or embed third-party services (for example YouTube video, payment pages or
        support widgets). Their privacy practices are governed by their own policies, and we are not
        responsible for them.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <p>
        We may update this policy. We will change the &ldquo;Last updated&rdquo; date and, for material
        changes, notify you by email or in the product before they take effect.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    content: (
      <p>
        {LEGAL.companyName}, {LEGAL.companyAddress}
        <br />
        Email: <a href={`mailto:${LEGAL.privacyEmail}`}>{LEGAL.privacyEmail}</a>
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={LEGAL.privacyUpdated}
      intro={
        <p>
          Your privacy matters to us. This policy explains what personal data {LEGAL.productName} collects,
          why, how it is used and protected, and the rights you have. It applies to our website, our
          applications and any Chatfolio you create or interact with.
        </p>
      }
      sections={sections}
    />
  );
}
