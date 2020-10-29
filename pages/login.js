import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Layout>
      <Head>
        <title>Sunny Trip</title>
      </Head>
      <main>
        <form
          className="indexLocation"
          onSubmit={(e) => {
            e.preventDefault();
            fetch('/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password }),
            });
          }}
        >
          <input
            className="indexLocationItem1"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
          <input
            className="indexLocationItem2"
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button className="indexLocationItem3">Login</button>
        </form>
        <Link href="/registration">
          <button className="indexLocationItem4">Registration</button>
        </Link>
      </main>
    </Layout>
  );
}
