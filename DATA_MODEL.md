# Itinerary Data Model

The Google Sheet is the canonical data store. Keep the structure consistent so future generated docs, summaries, or web views can be built from it.

## Overview

Purpose: high-level trip context plus important open logistics.

Typical fields:

- Trip dates
- Route
- Travelers
- Open logistics item
- Status

## Timeline

Purpose: chronological operating view. This is the main travel-day reference.

Columns:

- Date
- Day
- City
- Local Time
- End / Arrival Time
- Type
- Summary
- From
- To
- Confirmation
- Seats
- Address / Airport / Station
- Arrive By
- Source
- Status
- Notes

Guidance:

- Use local time for the location of the event.
- Include "Arrive By" for flights, trains, reservations, and timed entries.
- Keep notes short but operational.
- If details are missing, use `TBD` and say what is missing in notes or Documents.
- Add confirmed dinner reservations to both `Timeline` and `Restaurants` so they appear in daily cards and detail cards.
- Hotel checkout entries should show the latest checkout deadline as `by <time>` in the website, even if the traveler will leave earlier for a train or flight.

## Travel

Purpose: detailed transport records.

Columns:

- Trip Leg
- Carrier
- Flight / Train
- Depart Date
- Depart Time
- Depart From
- Arrive Date
- Arrive Time
- Arrive To
- Duration
- Aircraft / Equipment
- Cabin / Fare
- Seats
- Confirmation
- Ticket / Record Locator
- Check-in / Arrive By
- Status
- Notes / Source of Truth

Guidance:

- Put booking confirmation and airline/train confirmation in separate fields when both exist.
- Use the notes/source field to state the authoritative source.
- Keep baggage, terminal, gate, and seat gaps visible.
- If departure and arrival dates differ, the website should show both dates on the travel detail card.

## Lodging

Purpose: hotel and apartment reservations.

Columns:

- City
- Property
- Check-in Date
- Check-in Time
- Check-out Date
- Check-out Time
- Address
- Confirmation
- Booked Under
- Phone
- Map Link
- Website
- Tripadvisor Reviews
- Cancellation Notes
- Status
- Notes

Guidance:

- Store hotel profile details such as rating and fax in Notes unless new columns become necessary.
- Cancellation policy should be explicit when known.
- Keep each stay as a separate row, even for the same hotel on different dates.

## Restaurants

Purpose: restaurant reservations and meal logistics.

Columns:

- Date
- Day
- City
- Restaurant
- Time
- Diners
- Booked Under
- Address
- Phone / WhatsApp
- Email
- Map Link
- Website
- Tripadvisor Reviews
- Confirmation
- Status
- Notes

Guidance:

- Add each confirmed meal reservation as both a `Restaurants` row and a `Timeline` row.
- Use `Daily Plans` for the human-readable day summary.
- Capture punctuality requirements, dress code, deposits, cancellation windows, and missing confirmation details in Notes.

## Activities

Purpose: tours, tickets, timed attractions, and booked experiences.

Columns:

- Date
- Day
- City
- Activity
- Start Time
- Guests
- Booked Under
- Booking Reference
- Meeting Point
- Map Link
- Website
- Tripadvisor Reviews
- Provider
- Status
- Arrive By
- Notes

Guidance:

- Add each timed activity as both an `Activities` row and a `Timeline` row.
- Use `Arrive By` for tours, ticketed entries, and meeting-point logistics.
- Capture ID/passport requirements, weather notes, entry restrictions, cancellation windows, and provider instructions in Notes.

## Daily Plans

Purpose: flexible planning layer.

Columns:

- Date
- Day
- City
- Morning
- Afternoon
- Evening
- Breakfast
- Lunch
- Dinner
- Tickets / Confirmations
- Transit Notes
- Flex Options
- Status
- Notes

Guidance:

- This can stay blank until flights/hotels/trains are fully settled.
- Use this for the human trip plan, not for raw source extraction.
- Keep a row for every trip date, even if most fields are `TBD`.
- Use the Breakfast, Lunch, and Dinner columns as placeholders every day.
- If dinner is part of or tied to an activity, reference that activity in the Dinner column.
- Keep this tab brief: summarize the day, and point to `Restaurants`, `Activities`, `Travel`, or `Lodging` for detailed records.
- Put only the most useful confirmation references here; do not duplicate every address, contact detail, or source note from detail tabs.

## Website Parsing Rules

- Treat Google Sheet `YYYY-MM-DD` strings as local calendar dates. Do not use JavaScript `Date.parse("YYYY-MM-DD")` for display because it parses as UTC and can show the prior day in Pacific time.
- The web app should resolve daily-card links against the current Sheet-backed card IDs, not only the embedded fallback IDs.
- Sheet-only data updates should refresh on the live site without a Git push; app-code behavior changes still require commit and push.

## Documents

Purpose: extraction and audit trail.

Columns:

- Source ID
- Source Type
- Received / Added
- Related Date
- Related Item
- Extracted Status
- Missing Details
- Link / File
- Notes

Guidance:

- Add one row per screenshot/email/source.
- Use `SRC-###` sequential IDs.
- Missing Details should list only what still matters.
- Notes should include source-of-truth wording and the extracted facts.
