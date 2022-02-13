import React from "react";
import NoteList from "./components/NoteList";
import RegisterForm from "./components/RegisterForm";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <RegisterForm />
        <NoteList />
      </>
    );
  }
}

export default App;
