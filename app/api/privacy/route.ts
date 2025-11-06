import { NextRequest, NextResponse } from "next/server";

const privacyContent = `
<div class="privacy-wrapper">
  <h1>PRIVACY POLICY</h1>
  <p class="last-updated"><strong>Last updated: July 21, 2025</strong></p>

  <p>Premier AI ("we", "us", or "our") values your privacy. This policy explains how we collect and use your information when you visit www.dialedge.ai.</p>

  <h2>Information We Collect</h2>
  <ul>
    <li>We may collect personal details like your name, email address, company name, and contact information if you fill out forms or contact us.</li>
    <li>We may gather general information about how you use our site, such as IP address and browser details. Cookies may be used to enhance your experience.</li>
  </ul>

  <h2>How We Use Your Information</h2>
  <ul>
    <li>To provide and improve our website and services</li>
    <li>To answer your questions or communicate with you</li>
    <li>To analyse website usage and ensure security</li>
  </ul>

  <h2>Sharing Your Information</h2>
  <ul>
    <li>We do not sell your information.</li>
    <li>We may share information with trusted partners who help us operate our website or provide services, but only when necessary.</li>
    <li>We may share information to comply with the law or protect DialEdge AI's rights.</li>
  </ul>

  <h2>Your Choices</h2>
  <p>You can contact us at any time to request access to or deletion of your personal information.</p>

  <h2>Data Security</h2>
  <p>Premier AI takes reasonable measures to keep your data secure.</p>

  <h2>Contact Us</h2>
  <p>Have questions or concerns? Please email us at <a href="mailto:contact@dialedge.ai">contact@dialedge.ai</a>.</p>

  <p class="agreement-footer"><strong>By using our website, you agree to this Privacy Policy. We may update this policy from time to time. Please check back for updates.</strong></p>
</div>
`;

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({ content: privacyContent });
  } catch (error) {
    console.error("Error fetching privacy content:", error);
    return NextResponse.json(
      { error: "Failed to fetch privacy content" },
      { status: 500 }
    );
  }
}
