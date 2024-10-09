import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { EmailHeading } from "./components/EmailHeading";
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
        <EmailHeading title={"mail heading"} />
        <Container>{children}</Container>
        <EmailFooter />
      </body>
    </html>
  );
}
