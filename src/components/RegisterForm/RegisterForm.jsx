import React, { Component } from "react";
import "./style.css";

export class RegisterForm extends Component {
  render() {
    return (
      <form className="register-form">
        <input
          className="register-form-input"
          type="text"
          placeholder="Título"
        />
        <textarea
          rows={15}
          className="register-form-input"
          placeholder="Escreva sua nota"
        />
        <button className="register-form-button register-form-button:active">
          Criar nota
        </button>
      </form>
    );
  }
}

export default RegisterForm;
