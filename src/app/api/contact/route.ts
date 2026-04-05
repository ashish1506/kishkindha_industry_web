import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

interface ContactFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  city: string;
  businessType: string;
  productsInterested: string[];
  monthlyRequirement: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.fullName || !data.businessName || !data.email || !data.phone || !data.city || !data.businessType || !data.productsInterested?.length) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Format the email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1B4332; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Quote Request</h1>
        </div>

        <div style="padding: 30px; background-color: #FAF8F5;">
          <h2 style="color: #1B4332; border-bottom: 2px solid #D4A847; padding-bottom: 10px;">Contact Details</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6B6B6B; width: 40%;"><strong>Full Name:</strong></td>
              <td style="padding: 10px 0; color: #2D2D2D;">${data.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6B6B6B;"><strong>Business Name:</strong></td>
              <td style="padding: 10px 0; color: #2D2D2D;">${data.businessName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6B6B6B;"><strong>Email:</strong></td>
              <td style="padding: 10px 0; color: #2D2D2D;"><a href="mailto:${data.email}" style="color: #1B4332;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6B6B6B;"><strong>Phone:</strong></td>
              <td style="padding: 10px 0; color: #2D2D2D;"><a href="tel:${data.phone}" style="color: #1B4332;">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6B6B6B;"><strong>City:</strong></td>
              <td style="padding: 10px 0; color: #2D2D2D;">${data.city}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6B6B6B;"><strong>Business Type:</strong></td>
              <td style="padding: 10px 0; color: #2D2D2D;">${data.businessType}</td>
            </tr>
          </table>

          <h2 style="color: #1B4332; border-bottom: 2px solid #D4A847; padding-bottom: 10px; margin-top: 30px;">Product Interest</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6B6B6B; width: 40%;"><strong>Products:</strong></td>
              <td style="padding: 10px 0; color: #2D2D2D;">${data.productsInterested.join(', ')}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6B6B6B;"><strong>Monthly Requirement:</strong></td>
              <td style="padding: 10px 0; color: #2D2D2D;">${data.monthlyRequirement || 'Not specified'}</td>
            </tr>
          </table>

          ${data.message ? `
          <h2 style="color: #1B4332; border-bottom: 2px solid #D4A847; padding-bottom: 10px; margin-top: 30px;">Message</h2>
          <p style="color: #2D2D2D; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
          ` : ''}
        </div>

        <div style="background-color: #132A21; padding: 20px; text-align: center;">
          <p style="color: #D4A847; margin: 0; font-size: 14px;">
            Submitted via kishkindhaindustry.com
          </p>
        </div>
      </div>
    `;

    const emailText = `
New Quote Request from Kishkindha Industry Website

CONTACT DETAILS
----------------
Full Name: ${data.fullName}
Business Name: ${data.businessName}
Email: ${data.email}
Phone: ${data.phone}
City: ${data.city}
Business Type: ${data.businessType}

PRODUCT INTEREST
----------------
Products: ${data.productsInterested.join(', ')}
Monthly Requirement: ${data.monthlyRequirement || 'Not specified'}

${data.message ? `MESSAGE\n-------\n${data.message}` : ''}

---
Submitted via kishkindhaindustry.com
    `.trim();

    // Send email via SendGrid
    const msg = {
      to: 'support@kishkindhaindustry.com',
      from: {
        email: process.env.SENDGRID_FROM_EMAIL || 'noreply@kishkindhaindustry.com',
        name: 'Kishkindha Industry Website',
      },
      replyTo: data.email,
      subject: `New Quote Request: ${data.businessName} - ${data.city}`,
      text: emailText,
      html: emailHtml,
    };

    await sgMail.send(msg);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('SendGrid error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
