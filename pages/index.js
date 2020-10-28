import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sunny Trip</title>
      </Head>
      <main className="indexLocation">
        <input
          className="indexLocationItem1"
          type="text"
          placeholder="Username"
        />
        <input
          className="indexLocationItem2"
          type="text"
          placeholder="Password"
        />
        <button className="indexLocationItem3">Login</button>
        <button className="indexLocationItem4">Registration</button>
      </main>
    </Layout>
  );
}
