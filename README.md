# genie-canary

Synthetic probe for the Genie pipeline. **Never merge.** Never delete.

## What it is

A minimal Next.js app whose only purpose is to be force-pushed to by the
`genie-mono` canary cron every 5 minutes. The push triggers the standard
GitHub webhook flow:

1. `pull_request.synchronize` → review job created → fleet claim → review pipeline
2. Vercel preview deploys → `deployment_status.success` → proof-gen released
3. Worker mints fresh install token → clones at HEAD sha → runs Playwright on `/canary-probe` against the preview → posts comment

When ANY step fails, the canary detector pages the admin TG within
15 minutes (`canary-review-stuck`).

## Why a real Next.js app, not just `CANARY.md`

Mutating `CANARY.md` only exercises the **review** lane — the proof-gen
lane needs the diff to touch a route in a scanned `appMap`. The
`/canary-probe` route + this app scaffold means every canary cycle
fires both review AND proof-gen, so the canary covers the full
pipeline.

Setup is in `docs/CANARY-SETUP.md` inside `genie-mono`.
