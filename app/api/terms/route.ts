import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Get the Google Docs document ID from environment variable
    const docId = "1AsMNRTR4hC5YsW51pTej7XMQXCOJl35j2HSPGPqaC_s";

    if (!docId) {
      return NextResponse.json(
        { error: "Google Docs document ID not configured" },
        { status: 500 }
      );
    }

    // Fetch the document content from Google Docs
    const response = await fetch(
      `https://docs.google.com/document/d/${docId}/export?format=html`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; AI Placers Terms Fetcher)",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch document: ${response.statusText}`);
    }

    const htmlContent = await response.text();

    return NextResponse.json({ content: htmlContent });
  } catch (error) {
    console.error("Error fetching terms content:", error);
    return NextResponse.json(
      { error: "Failed to fetch terms content" },
      { status: 500 }
    );
  }
}
