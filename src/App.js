import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App mx-xs-1 mx-md-3 text-center">
      <header className="mt-2 p-2">
        <h1>Medical Literati Helper</h1>
      </header>
      <div className="container row mt-xs-3 mt-md-5">
        <div className="col-xs-12 col-md-5">
          <section className="Reference">
            <Dictionary />
          </section>
        </div>
        <div className="col-xs-12 col-md-7">
          <section className="BlankPad">"Hello World</section>
        </div>
      </div>
    </div>
  );
}

export default App;
