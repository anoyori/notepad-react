import React, { Component } from "react";
import NoteList from "../NoteList";
import "./style.css";

export class NoteCard extends Component {
  render() {
    return (
      <section className="card-note">
        <header className="card-nota-header">
          <h3 className="card-nota-title">{this.props.title}</h3>
        </header>
        <p className="card-nota-text">{this.props.text}</p>
      </section>
    );
  }
}

export default NoteCard;
