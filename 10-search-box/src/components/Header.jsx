function Header() {
  return (
    <section className="flex items-center mb-8">
      <h1
        className="text-center text-yellow-500 text-8xl"
        style={{ fontFamily: '"Barriecito", cursive' }}
      >
        Search for Dummies
      </h1>
      <img className="size-20 ml-3 animate-bounce" src="/emoji.png" />
    </section>
  );
}

export default Header;
