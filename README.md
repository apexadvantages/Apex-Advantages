# Apex Advantages website

Responsive black-and-red storefront ready for static hosting and Stripe Payment Links.

## Get started
1. Upload `index.html`, `style.css`, and `script.js` to a GitHub repository.
2. In `script.js`, replace `discordInvite` with your actual Discord invite URL.
3. Create **three** Stripe Payment Links with prices in AUD: $15, $25, and $35. Put each URL in `stripePaymentLinks` in `script.js`.
4. Host the repository using Cloudflare Pages or another static hosting provider that permits your commercial use. The entry point is `index.html`; no build command or output directory is required.
5. Test all links and payments in Stripe's test mode before accepting live payments.

**Important:** Stripe has to approve the business/service category. Do not claim guarantees or endorsements that don't exist. Consider publishing refund, fulfillment, privacy, and contact policies before taking payments. This site does not automatically fulfill orders or verify Stripe payments; that requires an additional secure backend or automation. Never commit a Stripe secret key to GitHub.
