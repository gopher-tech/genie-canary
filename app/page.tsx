export default function Home() {
  return (
    <section className="canary-home">
      <h1>Genie Canary</h1>
      <p>
        This is a synthetic probe app for the Genie pipeline. The canary cron
        in <code>genie-mono</code> force-pushes changes to the
        <code> /canary-probe</code> route every cycle to verify that the full
        flow — webhook → review → fair-share claim → fresh-token clone →
        proof-gen → comment — still works end-to-end.
      </p>
      <p>Never deployed to user traffic. Do not edit manually. Do not merge the canary PR.</p>
    </section>
  );
}
