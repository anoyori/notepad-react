import React, { Component } from "react";
import NoteCard from "./NoteCard";

export class NoteList extends Component {
  render() {
    return (
      <ul>
        {Array.of("trabalho", "Trabalho", "Estudos").map((categoria) => {
          return (
            <li>
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
