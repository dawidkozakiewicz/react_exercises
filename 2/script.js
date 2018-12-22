function MojKomponent() {
  return (
    <div>
      <h1>Witaj, świecie!</h1>
      <h2>Jestem ambitna/y, więc przerabiam kurs React.js!</h2>
    </div>
  );
}

function Komponent() {
  return (
    <div>
      <h1>Newsy dnia.</h1>
      <h2>Marian Paździoch nie żyje!!</h2>
    </div>
  );
}
ReactDOM.render(
  <MojKomponent />,
  document.getElementById('app')
);

ReactDOM.render(
  <Komponent />,
  document.getElementById('abc')
);