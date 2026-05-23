# Spain Trip 2026

This workspace contains project context for building and maintaining a shared, editable itinerary for a 10-day Spain trip.

The current source-of-truth itinerary is a Google Sheet:

[Spain Trip 2026 - Master Itinerary](https://docs.google.com/spreadsheets/d/1sNllJGDcu2K-AIwFi2fbK785n-THs529jsNFj_L3L5I/edit?usp=drivesdk)

## Trip Shape

- Travelers: Kevin Christensen and wife
- Dates: May 31, 2026 to June 10, 2026
- Route: San Francisco -> Barcelona -> Madrid -> Seville -> Barcelona -> San Francisco
- Core goal: maintain accurate logistical details across devices without needing Codex.

## Working Approach

Use the Google Sheet as the canonical trip database. It should hold exact times, confirmation numbers, addresses, source-of-truth notes, and missing-details flags.

A future Google Doc, web page, or printable travel packet can be generated from the Sheet later. The Sheet remains the source of truth for structured facts.

## Website Data Source

The web app in `ux-versions/web-app` now attempts to load these Sheet tabs directly in the browser:

- `Timeline`
- `Travel`
- `Lodging`
- `Restaurants`
- `Activities`
- `Daily Plans`

Because this is a static website, live loading only works when the Google Sheet is publicly viewable or exposed through a public endpoint. If Google requires sign-in, the site keeps working from the embedded fallback data and shows a fallback status message.

## Local and Public Website

Local test server:

```bash
cd ux-versions/web-app
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

Public hosting is through Vercel from GitHub repo `kccpenn00/spain-trip-2026`, with Vercel root directory set to `ux-versions/web-app`.

Code changes require a commit and push to GitHub. Sheet-only itinerary changes do not require a Git commit because the website reads the live Google Sheet after refresh.

Important implementation note: parse Google Sheet `YYYY-MM-DD` values as local calendar dates. Do not rely on JavaScript's default `Date.parse("YYYY-MM-DD")`, which can shift dates one day earlier in Pacific time.

### Avoiding Local / Deploy Drift

- For pushable website changes, work from `/Users/kchristensen/Documents/GitHub/spain-trip-2026`, not only the Codex workspace copy.
- Run localhost from the repo web app folder:

```bash
cd /Users/kchristensen/Documents/GitHub/spain-trip-2026/ux-versions/web-app
python3 -m http.server 8000
```

- If localhost looks stale or wrong, check whether an old server is still serving a different folder on port 8000.
- The hero image should ship as `assets/spain-hero.png`. If replacing the image without renaming the file, update the query string in `index.html`, for example `assets/spain-hero.png?v=2`.
- Preserve the current hero copy unless explicitly asked to change it:
  - `Spain 2026 - LFG!!!`
  - `Everything you need to kick back, relax, and enjoy your trip.`

## Important Principle

Every itinerary item should include:

- Date and local time
- City
- Type: flight, lodging, train, restaurant, activity, etc.
- Confirmation number or record locator
- Source of truth
- Missing details / verification notes

Do not treat screenshots as live sources. Screenshots are extraction evidence only. The source of truth is usually the booking system or retained confirmation email.
