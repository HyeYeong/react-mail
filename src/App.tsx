import { ReactElement } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { AppInitialProps, AppPropsWithLayout } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';

const App = ({
  Component,
  pageProps,
}: {
  Component: AppPropsWithLayout['Component'];
  pageProps: AppInitialProps['pageProps'];
}): JSX.Element => {

  return (
    <>
      <Head>
        <title>MAILMAIL</title>
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
      </>
  );
};

export default App;
