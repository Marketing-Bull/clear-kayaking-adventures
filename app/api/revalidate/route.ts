import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Sanity webhook target. Configure a webhook in your Sanity project that
 * POSTs to /api/revalidate with header `x-revalidate-secret` matching
 * SANITY_REVALIDATE_SECRET. Owner edits then go live without a redeploy.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  const provided = req.headers.get("x-revalidate-secret");

  if (!secret || provided !== secret) {
    return NextResponse.json({ revalidated: false, message: "Invalid secret" }, { status: 401 });
  }

  revalidateTag("content", { expire: 0 });
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
