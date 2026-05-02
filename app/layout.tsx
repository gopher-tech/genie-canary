export const metadata = {
  title: 'Genie Canary',
  description: 'Synthetic probe for the Genie pipeline. Never deployed to real traffic.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
