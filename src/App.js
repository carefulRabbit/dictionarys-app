import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";
import "./App.css";



function App() {
  return (
    <div >
      <header className="App-header">
        <img src="/images/logo.png" alt="Logo" className="logo" />
        <p className="big-paragraph">Dictionary App</p>
      </header>
      <div className="container">
        <main>
          <Dictionary defaultKeyword="forest" />
        </main>
        <footer className="text-center">
          Coded by{" "}
          <a
            href="https://github.com/carefulRabbit/dictionarys-app"
            rel="noreferrer"
          >
            Emily
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
