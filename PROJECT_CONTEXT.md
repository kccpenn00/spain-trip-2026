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

## Desired End State

The current working shape is:

1. Google Sheet as the canonical database.
2. Website / lightweight web app as the active user-friendly view.

Do not maintain or update the Google Doc / printable travel packet by default. It can be treated as a prior prototype unless Kevin explicitly asks to revive or update it.

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

Screenshots are useful for extraction but should not be described as the live source of truth unless no other source is known.

## Current Open Issue

The first Seventy Barcelona reservation starts May 31, 2026, but the inbound United flight arrives in Barcelona on June 1, 2026 at 2:20 PM. This may be intentional to hold the room early, but it should remain flagged for review.
