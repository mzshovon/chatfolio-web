import Script from "next/script";

export default function CrowdfundingWidget() {
  return (
    <Script
      src="https://www.supportkori.com/widget.js"
      strategy="afterInteractive"
      data-id="zamanshovon"
      data-message="Buy me a cha!"
      data-color="#c8862e"
      data-position="right"
    />
  );
}
