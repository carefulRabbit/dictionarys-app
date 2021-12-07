import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="App-header"></header>
      <main>
        <Dictionary defaultKeyword="forest" />
      </main>
      <footer className="text-center">
        Coded by{" "}
        <a href="https://github.com/carefulRabbit/dictionarys-app" rel="noreferrer">Emily</a>{" "}
      </footer>
    </div>
  );
}

export default App;
