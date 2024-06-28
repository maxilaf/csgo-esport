import React from "react";
import "./styles/App.css";
import MatchDiv from "./components/MatchDiv";

function App() {
  return (
    <section className="App" id="ancre-hautdepage">
      <header>
        <a className="logo logo-titre" href="#ancre-hautdepage">
          CS:GO
        </a>
        <div className="header__titre logo-titre">match e-sport</div>
        <div className="name">
          <span className="name__prenom">Maximilien </span>
          <span className="name__nom">LAFONT</span>
        </div>
      </header>
      <main>
        <section className="section-getMatch">
          <h1 className="titre-site">CS:GO match e-sport</h1>
          <MatchDiv />
        </section>
      </main>
      <footer></footer>
    </section>
  );
}

export default App;
