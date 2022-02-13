import React, { Component } from "react";
import "./style.css";

export class NoteCard extends Component {
  render() {
    return (
      <section className="card-note">
        <header className="card-nota-header">
          <h3 className="card-nota-title">Título</h3>
        </header>
        <p className="card-nota-text">Digite sua nota</p>
      </section>
    );
  }
}

export default NoteCard;
