# PissCancerOff.com

Fundraising site for a 100-mile ultramarathon (Southern Tour Ultra, Wilmington NC, Jan 15) run for my uncle — a US Coast Guard chief warrant officer fighting bladder cancer.

Plain static site: no frameworks, no build step. `index.html` + `styles.css` + `data.js`, hosted free on GitHub Pages behind the custom domain.

## Daily updates (the only thing you routinely do)

Every number on the site lives in **`data.js`**. To update after a run:

1. Open `data.js` (on github.com, the GitHub mobile app, or locally).
2. Change `raisedDollars`, `milesTrained`, `stepsTrained`, and `lastUpdated`.
3. Commit to `main`. The live site updates within a minute or two.

Or just tell Claude the new numbers in a Claude Code session and let it commit/push.

`data.js` also controls the donate links, social links, contact email, race countdown, and the game-day tour list (set exactly one tour row to `status: "next"`; mark finished ones `"done"`).

## One-time deployment setup

1. **Merge to `main`** — GitHub Pages serves from `main`.
2. **Enable Pages**: repo → Settings → Pages → Source: "Deploy from a branch" → branch `main`, folder `/ (root)`. The `CNAME` file in this repo tells Pages the custom domain.
3. **DNS at Cloudflare** (after buying `pisscanceroff.com` there) — add these records, **proxy status: DNS only (grey cloud)** so GitHub can issue the TLS certificate:
   - `A` records for `pisscanceroff.com` (apex) pointing to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `boukgg.github.io`
4. Back in repo Settings → Pages, confirm the custom domain shows `pisscanceroff.com` and check **Enforce HTTPS** once the certificate is issued (can take up to an hour after DNS propagates).

## Analytics (see game-day traffic spikes)

Free option that pairs with the Cloudflare account you'll already have:

1. Cloudflare dashboard → Web Analytics → Add site → `pisscanceroff.com`.
2. Copy the token from the snippet it gives you.
3. In `index.html`, find the commented `ANALYTICS` block near the top, paste the token, and un-comment it.

## Still to fill in (waiting on real-world stuff)

- **Donate link** (`links.donate` in `data.js`) — waiting on the family's decision on the recipient; button shows a "coming soon" state until set.
- **Optional direct family fund** (`links.family`).
- **Photos** — drop images in an `img/` folder and swap the placeholder in the "The why" section of `index.html`.
- **Contact email + Strava/Instagram** (`links.*`).
- **Tour dates** — replace the `TBD`s as game-day plans firm up.
- **Training plan section** — will be generated from the "ultra console" `.jsx` training plan.
