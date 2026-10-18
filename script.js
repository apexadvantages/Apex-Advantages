/* APEX ADVANTAGES CONFIGURATION
 * Replace the empty strings below with your own published links.
 * Stripe Payment Links should look like: https://buy.stripe.com/...
 * Never paste Stripe secret API keys into website files.
 */
const CONFIG = {
  discordInvite: '', // Example: 'https://discord.gg/your-server'
  stripePaymentLinks: {
    1: '', // $15 AUD — 1 game
    2: '', // $25 AUD — 2 games
    3: ''  // $35 AUD — 3 games
  }
};

const isHttpUrl = (value, hostname) => {
  try { const u = new URL(value); return u.protocol === 'https:' && (hostname ? (u.hostname === hostname || u.hostname.endsWith('.' + hostname)) : true); }
  catch { return false; }
};

const discord = CONFIG.discordInvite;
if (isHttpUrl(discord, 'discord.gg') || isHttpUrl(discord, 'discord.com')) {
  ['navDiscord','heroDiscord','contactDiscord'].forEach(id => {
    const link = document.getElementById(id);
    link.href = discord;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
  document.getElementById('contactDiscord').textContent = 'Join our Discord ↗';
  document.getElementById('contactHint').textContent = 'Open a ticket in Discord for orders and support.';
}

for (const [quantity, url] of Object.entries(CONFIG.stripePaymentLinks)) {
  const button = document.getElementById('buy' + quantity);
  const note = button.nextElementSibling;
  if (isHttpUrl(url, 'stripe.com')) {
    button.href = url;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    note.textContent = 'Secure checkout powered by Stripe';
  } else {
    button.textContent = 'Contact to order ↗';
    note.textContent = 'Online checkout coming soon';
  }
}
document.getElementById('year').textContent = new Date().getFullYear();
