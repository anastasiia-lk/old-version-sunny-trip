import Link from 'next/link';

export default function Header(props) {
  const loggedInPassed = typeof props.loggedIn !== 'undefined';
  return (
    <header className="headerStyle">
      <div>Make your trip Sunny Trip</div>
      {!loggedInPassed ? null : props.loggedIn ? (
        <Link href="/logout">
          <a>Log out</a>
        </Link>
      ) : (
        <Link href="/login">
          <a>Log in</a>
        </Link>
      )}
    </header>
  );
}
