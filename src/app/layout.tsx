import Head from "next/head";
import { EmailFooter } from "./components/EmailFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Head</title>
      </Head>
      <body>
        {children}
        <EmailFooter />
      </body>
    </html>
  );
}
