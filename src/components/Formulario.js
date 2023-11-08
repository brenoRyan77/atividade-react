import React, { Component } from 'react';
import './formulario.css';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campo1: '',
      campo2: '',
      exibirValores: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ exibirValores: true });
  }

  render() {
    return (
      <div className="formulario-container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Campo 1:
            <input
              type="text"
              name="campo1"
              value={this.state.campo1}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Campo 2:
            <input
              type="text"
              name="campo2"
              value={this.state.campo2}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Exibir Valores</button>
        </form>
        {this.state.exibirValores && (
          <div id="valores">
            <p>Valor do Campo 1: {this.state.campo1}</p>
            <p>Valor do Campo 2: {this.state.campo2}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Formulario;