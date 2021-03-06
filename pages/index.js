import Head from 'next/head';
import Header from '../components/Header';
import Welcome from '../components/Welcome';

export default function Home() {
  return (
    <div className="font-architect">
      <Head>
        <title>sqggle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap"
        rel="stylesheet"
      />
      <Header />

      <main className="bg-blue-200 h-screen">
        <Welcome />
      </main>
    </div>
  );
}
