import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Registration</title>
      </Head>
      <main className="registrationLocation">
        <input
          className="registrationLocationItem1"
          type="text"
          placeholder="Enter username"
        />
        <input
          className="registrationLocationItem2"
          type="text"
          placeholder="Enter password"
        />
        <button className="registrationLocationItem3">Registration</button>
      </main>
    </Layout>
  );
}
