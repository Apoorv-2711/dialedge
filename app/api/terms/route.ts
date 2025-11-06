import { NextRequest, NextResponse } from "next/server";

const termsContent = `
<div class="terms-wrapper">
  <h1>TERMS AND CONDITIONS</h1>
  <p class="last-updated"><strong>Last updated: September 2nd, 2025</strong></p>

  <p>These Terms and Conditions ("Terms") apply to your use of the www.dialedge.ai website ("Site") operated by DialEdge AI ("we," "us," or "our"). By accessing or using this Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.</p>

  <h2>1. Acceptance of Terms</h2>
  <p>By using our Site, you confirm that you accept these Terms and agree to comply with them. If you are using the Site on behalf of an organization, you represent that you have the authority to accept these Terms on its behalf.</p>

  <h2>2. Use of the Website</h2>
  <ul>
    <li>You may use the Site for lawful purposes only.</li>
    <li>You must not misuse the Site or interfere with its security or operation.</li>
    <li>You agree not to access or use the Site for any purpose that is unlawful or prohibited by these Terms.</li>
  </ul>

  <h2>3. Intellectual Property</h2>
  <p>All content on this Site, including text, graphics, logos, and software, is the property of DialEdge AI or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any material on this Site without written permission.</p>

  <h2>4. Disclaimer of Warranties</h2>
  <p>The Site is provided "as is" and "as available." We make no warranties or representations about the accuracy or completeness of the Site's content and disclaim all warranties, express or implied, including fitness for a particular purpose.</p>

  <h2>5. Limitation of Liability</h2>
  <p>To the maximum extent permitted by law, DialEdge AI will not be liable for any damages (including indirect, incidental, or consequential damages) arising from your use of, or inability to use, the Site.</p>

  <h2>6. Third-Party Links</h2>
  <p>Our Site may contain links to third-party websites. These links are provided for your convenience; we do not have control over the content or practices of these third-party sites and take no responsibility for them.</p>

  <h2>7. Changes to Terms</h2>
  <p>We may update these Terms from time to time. Any changes will be posted on this page with an updated revision date. Your continued use of the Site after changes have been posted indicates acceptance of those updates.</p>

  <h2>8. Termination</h2>
  <p>We reserve the right to suspend or terminate your access to the Site, at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to DialEdge AI or other users.</p>

  <h2>9. Governing Law</h2>
  <p>These Terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in India.</p>

  <h2>10. Contact Us</h2>
  <p>If you have questions about these Terms, please contact us at <a href="mailto:contact@dialedge.ai">contact@dialedge.ai</a>.</p>

  <p class="agreement-footer"><strong>By using our website, you agree to these Terms and Conditions.</strong></p>
</div>
`;

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({ content: termsContent });
  } catch (error) {
    console.error("Error fetching terms content:", error);
    return NextResponse.json(
      { error: "Failed to fetch terms content" },
      { status: 500 }
    );
  }
}
