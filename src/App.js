import React from "react";
import { Component } from "react";
import RegisterForm from "./components/RegisterForm";
import NoteList from "./components/NoteList";
import "./assets/App.css";
import "./assets/index.css";

export class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <RegisterForm />
        <NoteList />
      </section>
    );
  }
}

export default App;
