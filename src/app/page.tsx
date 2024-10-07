"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { EmailHeading } from "./components/EmailHeading";
import { EmailTemplate } from "./components/EmailTemplate";

export default function App() {
  return (
    <main>
      <Head>
        <title>MAILMAIL</title>
      </Head>
      <ChakraProvider>
        <EmailHeading title={"mail heading"} />
        <EmailTemplate />
      </ChakraProvider>
    </main>
  );
}
