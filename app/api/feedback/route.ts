import { NextRequest, NextResponse } from "next/server";

const MAX_MESSAGE_LENGTH = 1000;

type FeedbackPayload = {
  rating?: unknown;
  message?: unknown;
  path?: unknown;
};

export async function POST(req: NextRequest) {
  let body: FeedbackPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const rating =
    typeof body.rating === "number" && body.rating >= 1 && body.rating <= 5
      ? Math.round(body.rating)
      : null;
  const message =
    typeof body.message === "string" ? body.message.trim().slice(0, MAX_MESSAGE_LENGTH) : "";
  const path = typeof body.path === "string" ? body.path.slice(0, 200) : "";

  if (rating === null && !message) {
    return NextResponse.json({ error: "Feedback is empty" }, { status: 400 });
  }

  // TODO: persist to your database or forward to a feedback tool (e.g. Linear, Slack).
  console.info("[feedback]", { rating, message, path, receivedAt: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
