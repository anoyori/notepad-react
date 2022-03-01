import React from "react";
import { Component } from "react";
import RegisterForm from "./components/RegisterForm";
import NoteList from "./components/NoteList";
import Menu from "./components/Menu";
import "./assets/App.css";
import "./assets/index.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }
  createNote(title, text) {
    const newNote = { title, text };
    const newArrayNotes = [...this.state.notes, newNote];
    const newState = {
      notes: newArrayNotes,
    };
    this.setState(newState);
  }
  render() {
    return (
      <>
        <Menu />
        <section className="conteudo">
          <RegisterForm createNote={this.createNote.bind(this)} />
          <NoteList notes={this.state.notes} />
        </section>
      </>
    );
  }
}

export default App;
