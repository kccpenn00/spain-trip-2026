# Next Steps

Use this file to quickly resume the project in a future session.

## Immediate Data Gaps

- United ticket numbers
- United terminal and gate details closer to departure
- Hotel cancellation policies for Seventy Barcelona and Gran Hotel Ingles
- Exact source email subject/date for each Hotmail confirmation
- Baggage allowance and seats for the SVQ -> BCN flight
- Confirm whether first Seventy Barcelona stay intentionally begins May 31 despite Jun 1 arrival
- Casa Amalia 1950 confirmation number, booked-under name, and original Gmail subject/date

## Likely Next Build Work

1. Continue adding reservations into the Google Sheet.
2. Add or refine restaurant/activity reservations as confirmation emails arrive.
3. Add terminal, baggage, seat, and transfer details closer to departure.
4. Keep the Vercel web app aligned with the Sheet-backed data model.
5. Create a Google Doc travel packet from the Sheet only if explicitly requested.

## Recommended Future Assistant Behavior

When a new screenshot/email is provided:

1. Identify the reservation type and travel date.
2. Extract only visible facts.
3. Ask for or mark missing facts rather than guessing.
4. Update the Google Sheet.
5. Add or update a `Documents` row with the source and missing details.
6. Mention any schedule conflicts or suspicious date/time issues.

## Website Notes

- The active website is deployed on Vercel from GitHub repo `kccpenn00/spain-trip-2026`.
- Vercel root directory should stay set to `ux-versions/web-app`.
- Code changes require commit and push; Sheet-only data changes do not.
- Use `python3 -m http.server 8000` from `ux-versions/web-app` for local testing.
- Date regressions are high risk: the app must parse `YYYY-MM-DD` Sheet values as local calendar dates, not UTC dates.

## Current Google Sheet

[Spain Trip 2026 - Master Itinerary](https://docs.google.com/spreadsheets/d/1sNllJGDcu2K-AIwFi2fbK785n-THs529jsNFj_L3L5I/edit?usp=drivesdk)
