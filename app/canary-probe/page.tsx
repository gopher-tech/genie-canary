/**
 * Canary probe page — rewritten by the genie-mono canary cron every cycle.
 * The proof-gen pipeline asserts on the <section> wrapper: it loads this
 * route on the Vercel preview, waits for `section` to be visible, and
 * screenshots it. The probedAt constant is the only line that changes
 * per cycle. NOTE: must NOT be a top-level export — Next.js disallows
 * arbitrary named exports on Page modules. Local const is fine.
 */
export default function CanaryProbe() {
  const probedAt = '2026-05-02T20:55:00.000Z';
  return (
    <section data-testid="canary-probe">
      <h1>Canary probe</h1>
      <p>Probed at: <time>{probedAt}</time></p>
    </section>
  );
}
