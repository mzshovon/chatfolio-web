export const SIGN_IN_URL = process.env.NEXT_PUBLIC_SIGN_IN_URL ?? "#";
export const SIGN_UP_URL = process.env.NEXT_PUBLIC_SIGN_UP_URL ?? "#pricing";
export const PURCHASE_URL = process.env.NEXT_PUBLIC_PURCHASE_URL ?? "#pricing";
export const RECRUITER_CHAT_URL = process.env.NEXT_PUBLIC_RECRUITER_CHAT_URL ?? "#recruiters";

// Premium checkout (Support Kori). Will come from the backend later; for now it's an env var.
export const PREMIUM_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHATFOLIO_PREMIUM_PACK_CHECKOUT_URL ?? "https://supportkori.com";
export const ACTIVATE_URL =
  process.env.NEXT_PUBLIC_ACTIVATE_URL ?? "https://panel.chatfolio.net/activate";
