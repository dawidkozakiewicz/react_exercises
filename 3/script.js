function MojKomponent({ title = "Modal", content }) {
  return (
    <div>
      <dialog open>
        <h1> {title} </h1> <p> {content} </p>{" "}
        <footer>
          {" "}
          <a href="https://typeofweb.com/"> Tak! </a>
        </footer>
      </dialog>{" "}
    </div>
  );
}
ReactDOM.render(
  <MojKomponent
    title="I co, duma?"
    content="To było prostsze niż by się mogło wydawać, prawda?"
  />,
  document.getElementById("app")
);
