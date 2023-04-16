function Logo() {
  return (
    <div className="logo-box">
      <img alt="Logo" className="logo" src="./app/assets/logo-white.png" />
    </div>
  );
}

function Heading() {
  return (
    <h1 className="heading-primary">
      <span className="heading-primary-main">Outdoors </span>
      <span className="heading-primary-sub">is where life happens</span>
    </h1>
  );
}

function Header() {
  return (
    <header className="header">
      <Logo />
      <Heading />
    </header>
  );
}

export default function App() {
  return <Header />;
}
