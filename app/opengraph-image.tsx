import { ImageResponse } from "next/og";

export const alt = "Chatfolio — Your portfolio, answering recruiters while you sleep";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "linear-gradient(135deg, #14171a 0%, #1d2126 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#c8862e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            C
          </div>
          <div style={{ marginLeft: 20, fontSize: 44, fontWeight: 700 }}>Chatfolio</div>
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, display: "flex" }}>
          Your portfolio, answering recruiters while you sleep
        </div>
        <div style={{ marginTop: 32, fontSize: 30, color: "#e3a83f", display: "flex" }}>
          Turn your CV into an AI portfolio · chatfolio.net
        </div>
      </div>
    ),
    size
  );
}
