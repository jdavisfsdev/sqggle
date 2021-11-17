import Head from 'next/head';
import Header from '../components/Header';
import Welcome from '../components/Welcome';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>sqggle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap"
        rel="stylesheet"
      />

      <Header />

      <main>
        <Welcome />
      </main>
    </div>
  );
}
