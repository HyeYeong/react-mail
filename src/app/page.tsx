"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { EmailTemplate } from "./components/EmailTemplate";

export default function App() {
  return (
    <main>
      <ChakraProvider>
        <EmailTemplate />
      </ChakraProvider>
    </main>
  );
}
