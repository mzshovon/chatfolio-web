// Single source of truth for the details quoted in the Privacy Policy and
// Terms of Service. Review every value before launch — items marked REVIEW
// are assumptions that need your (and ideally a lawyer's) confirmation.

export const LEGAL = {
  productName: "Chatfolio",
  // REVIEW: replace with your registered legal entity name and address.
  companyName: "Chatfolio",
  companyAddress: "Dhaka, Bangladesh",
  // REVIEW: replace with real, monitored mailboxes.
  privacyEmail: process.env.NEXT_PUBLIC_PRIVACY_EMAIL ?? "privacy@chatfolio.example.com",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@chatfolio.example.com",
  // REVIEW: jurisdiction whose courts/laws govern the Terms.
  governingLaw: "the People's Republic of Bangladesh",
  // Bump these whenever either document materially changes.
  privacyUpdated: "October 9, 2026",
  termsUpdated: "October 9, 2026",
} as const;
