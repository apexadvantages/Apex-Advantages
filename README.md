# Apex Advantages website

Responsive black-and-red storefront ready for static hosting and Stripe Payment Links.

## Get started
1. Upload `index.html`, `style.css`, and `script.js` to a GitHub repository.
2. In `script.js`, the Discord invite is already configured as `https://discord.gg/akSsGfmd7b`.
3. All **three** Stripe Payment Links are configured in `script.js` ($15, $25, $35 AUD). Verify their prices and payment status in Stripe before publishing.
4. Host the repository using Cloudflare Pages or another static hosting provider that permits your commercial use. The entry point is `index.html`; no build command or output directory is required.
5. Test all links and payments in Stripe's test mode before accepting live payments.

**Important:** Stripe has to approve the business/service category. Do not claim guarantees or endorsements that don't exist. Consider publishing refund, fulfillment, privacy, and contact policies before taking payments. This site does not automatically fulfill orders or verify Stripe payments; that requires an additional secure backend or automation. Never commit a Stripe secret key to GitHub.
