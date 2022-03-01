import React, { Component } from "react";
import NoteCard from "../NoteCard";
import "./style.css";

export class NoteList extends Component {
  render() {
    return (
      <ul className="note-list">
        {this.props.notes.map((notes, index) => {
          return (
            <li key={index} className="note-list-item">
              <NoteCard title={notes.title} text={notes.text} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
