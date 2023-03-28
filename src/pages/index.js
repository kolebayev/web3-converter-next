import Head from 'next/head';
import Header from '../components/Header';
import Converter from '../components/Converter';

export default function Home() {
  return (
    <>
      <Head>
        <title>The EVM Swiss Army Knife</title>
        <meta
          name="description"
          content="The ultimate EVM tool, convert and encode EVM values, all in one place"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Converter />
      </main>
    </>
  );
}
