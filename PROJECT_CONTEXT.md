# Project Context

## What We Are Building

We are building a practical trip operating system for a Spain trip, not just a decorative itinerary.

The trip data should be accurate, shareable, editable by Kevin or his wife, and usable from phones while traveling. The current implementation is a native Google Sheet that can be opened and edited independently of Codex.

## Current Google Sheet

Title: `Spain Trip 2026 - Master Itinerary`

URL: https://docs.google.com/spreadsheets/d/1sNllJGDcu2K-AIwFi2fbK785n-THs529jsNFj_L3L5I/edit?usp=drivesdk

Tabs:

- `Overview`: trip summary and open logistics
- `Timeline`: day-by-day operating view
- `Travel`: flights and future trains/transfers
- `Lodging`: hotel reservations
- `Daily Plans`: flexible daily plans with Breakfast, Lunch, and Dinner placeholders for every trip date
- `Documents`: source tracking and extraction notes
- `Restaurants`: dinner reservations and meal logistics
- `Activities`: tours, classes, shows, and booked experiences

## Desired End State

The current working shape is:

1. Google Sheet as the canonical database.
2. Website / lightweight web app as the active user-friendly view.

Do not maintain or update the Google Doc / printable travel packet by default. It can be treated as a prior prototype unless Kevin explicitly asks to revive or update it.

## Website / Deployment

The active web app lives in `ux-versions/web-app`.

The site is deployed through Vercel from the GitHub repo `kccpenn00/spain-trip-2026`. Vercel should use:

- Root directory: `ux-versions/web-app`
- Framework preset: Other / static
- Build command: blank

Normal workflow:

1. Edit local code or update the Google Sheet.
2. For code changes, commit and push to GitHub; Vercel redeploys automatically.
3. For Sheet-only data changes, no Git commit is needed; the live site reads the public Google Sheet after refresh.

The local test server can be run from `ux-versions/web-app` with `python3 -m http.server 8000`, then opened at `http://localhost:8000`.

### Repo And Localhost Guardrails

- The deployable repo is `/Users/kchristensen/Documents/GitHub/spain-trip-2026`. Treat this as the code source of truth for push/deploy work.
- The Codex workspace copy `/Users/kchristensen/Documents/Codex Projects/Spain Trip` can drift from the deployable repo. If changes are made there, sync them intentionally into the GitHub repo before telling Kevin they are ready to push.
- Before testing localhost, confirm which folder is being served. Prefer running `python3 -m http.server 8000` from `/Users/kchristensen/Documents/GitHub/spain-trip-2026/ux-versions/web-app` so local preview matches the deployable repo.
- If port 8000 is already running, check or restart it before assuming localhost reflects the latest files. Old server processes can keep serving the wrong folder.
- After syncing files, run `git -C /Users/kchristensen/Documents/GitHub/spain-trip-2026 status --short` so changes are visible in the actual repo, not only in the Codex workspace.
- Do not overwrite the repo `index.html` with a stale workspace copy. Preserve current hero copy, asset paths, and cache keys when syncing targeted fixes.

## Implementation Notes

- The web app live-loads the Sheet tabs in the browser and falls back to embedded data if the Sheet is unavailable.
- Spreadsheet date strings such as `2026-06-02` must be parsed as local calendar dates, not as UTC instants. JavaScript `Date.parse("YYYY-MM-DD")` caused one-day-early display in Pacific time.
- Daily timeline jump links should resolve against currently rendered Sheet-backed card IDs, not only embedded fallback IDs.
- When a timeline item has a matching detail card, its "What's up today" note should link to that card. Audit in the browser by checking `.anchor a.jumpLink` targets against rendered detail-card IDs.
- Hotel checkout rows should sort first on checkout days and display `by <time>` to show the latest checkout deadline, even if the traveler will leave earlier for a train or flight.
- Detailed travel cards should show both departure and arrival dates when they differ, for example `Sun, May 31 / Mon, Jun 1`.
- The hero image URL in `index.html` should point to `assets/spain-hero.png`, because that is the deploy-safe alias committed in the repo. If the underlying image changes but the filename stays the same, bump the image query string, for example `assets/spain-hero.png?v=2`, to avoid stale browser/CDN cache.
- The selected final hero image is the wine version; in the Codex workspace it may also exist as `assets/spain-hero-with-us-v4-wine.png`. Keep `assets/spain-hero.png` as the shipping alias in both the Codex workspace and GitHub repo.
- After JavaScript changes, bump the script query string in `index.html`, for example `app.js?v=9`, so the browser and Vercel do not serve stale JS.
- Current preferred hero copy is:
  - H1: `Spain 2026 - LFG!!!`
  - Subhead: `Everything you need to kick back, relax, and enjoy your trip.`

## Collaboration Pattern

Kevin will feed in screenshots, emails, and reservation details. The assistant should:

1. Extract logistical facts.
2. Add or update the Google Sheet first. The Sheet is the source of truth and must be updated before any web view or local UX prototype.
3. Preserve source-of-truth information.
4. Flag missing details or possible date/time mismatches.
5. Keep notes concise and travel-useful.

Downstream surfaces such as the website / web-app view should be regenerated or edited from Sheet-backed facts rather than treated as independent databases. Do not update the Google Doc unless explicitly requested.

## Source Rules

- United flights: source of truth is United.com or the United app.
- Seventy Barcelona reservations: source of truth is Hotmail confirmation email.
- Gran Hotel Ingles Madrid: source of truth is Amex Travel reservation and Hotmail confirmation email.
- Hotel Alfonso XIII Seville: source of truth is Amex Travel reservation and Hotmail confirmation email.
- Seville to Barcelona flight: source of truth is Amex Travel and Hotmail confirmation email.
- Casa Amalia 1950: source of truth is Gmail; Google/Tripadvisor currently identify the address as `Ptge. del Mercat, 14, Eixample, 08009 Barcelona, Spain`.

Screenshots are useful for extraction but should not be described as the live source of truth unless no other source is known.

## Current Open Issue

The first Seventy Barcelona reservation starts May 31, 2026, but the inbound United flight arrives in Barcelona on June 1, 2026 at 2:20 PM. This may be intentional to hold the room early, but it should remain flagged for review.
