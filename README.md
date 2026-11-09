# NGS OPS — V1.1 Alpha Public Demo

**Interactive, fictional-data demonstration. This is NOT the authenticated security operations pilot.**

## Demo scope
- 2 fictional organizations, 3 sites, 5 guards, 2 supervisors, 1 admin
- Role/persona switcher; simulated organization and site access
- Command Center, Sites & Routes, Shifts, Patrols, Incidents, Occurrence Book, Post Orders, Directory, Reports, Guard Workspace
- Simulated GPS status, QR code/manual checkpoint capture, incident review, occurrence entries, post-order acknowledgements
- Print / Save PDF, Markdown and DOCX report exports
- **Email report is simulated; no email is actually sent**

The public demo uses browser localStorage and does not authenticate, sync across devices, or prove physical presence. Never enter real client/guard data, security incidents, credentials, or private QR codes.

## Run
Open [the GitHub Pages demo](https://ersonsallah.github.io/ngs-ops-demo/) once Pages is enabled on `main` at `/(root)`. Alternatively serve `index.html` with a static server.

## Previous version
The original V1 experience is preserved at [v1/index.html](v1/index.html).

## Authenticated pilot
The real pilot is developed separately with React + TypeScript, Supabase Auth, Postgres RLS and protected operations RPCs. The database migration is named `0001_NGS_Ops_alpha.sql`. Production email requires a server-side worker and verified sender; it cannot be implemented securely with GitHub Pages alone.

## Portfolio
This demo shows product workflow and UI architecture. Do not represent the public preview as a deployed multi-user authenticated system.
