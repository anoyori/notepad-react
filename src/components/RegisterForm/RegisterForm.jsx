import React, { Component } from "react";
import "./style.css";

export class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }

  _handleChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleChangeText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text);
  }

  render() {
    return (
      <form className="register-form" onSubmit={this._createNote.bind(this)}>
        <input
          className="register-form-input"
          type="text"
          placeholder="Título"
          onChange={this._handleChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          className="register-form-input"
          placeholder="Escreva sua nota"
          onChange={this._handleChangeText.bind(this)}
        />
        <button className="register-form-button register-form-button:active">
          Criar nota
        </button>
      </form>
    );
  }
}

export default RegisterForm;
