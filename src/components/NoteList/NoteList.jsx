import React, { Component } from "react";
import NoteCard from "../NoteCard";
import "./style.css";

export class NoteList extends Component {
  render() {
    return (
      <ul className="note-list">
        {Array.of("trabalho", "Trabalho", "Estudos").map((categoria, index) => {
          return (
            <li key={index} className="note-list-item">
              <div>{categoria}</div>
              <NoteCard />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
