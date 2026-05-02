/**
 * The canary cron rewrites this file every cycle. The body holds a single
 * timestamp constant so the diff is tiny and trivially reviewable. The
 * <section> wrapper is what the proof-gen pipeline asserts on:
 * Playwright loads the route on the Vercel preview, waits for `section`
 * to be visible, screenshots it, compares before/after.
 */
export const probedAt = '2026-05-02T20:46:16.503Z';

export default function CanaryProbe() {
  return (
    <section data-testid="canary-probe">
      <h1>Canary probe</h1>
      <p>Probed at: <time>{probedAt}</time></p>
    </section>
  );
}
