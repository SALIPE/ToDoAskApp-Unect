import React, { Component, Fragment } from 'react';

import './ToDo.css';
import addbt from '../assets/add.svg';

export default class ToDo extends Component {
  constructor() {
    super();
    this.state = { 
      tarefas: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.adicionarTarefa = this.adicionarTarefa.bind(this);
  }

  render() {
    return (
      <Fragment>
        <header id="main-header">
          <div className = "header-content">
            <h1>uTask</h1>
            <div className="add-task">
              <input onChange = { this.handleChange } value = {this.state.tarefa}></input>
              <button onClick = {this.adicionarTarefa }><img src={addbt}/></button>
            </div>
          </div>
        </header>
        <section>
          <div className="Afazer">
            <h2>To Do</h2>
            <div className = "tarefas">
              { this.state.tarefas.map(tarefa => <p>{tarefa}</p>)}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
  
  handleChange(event) {
    this.setState({ tarefa : event.target.value})
  }

  adicionarTarefa() {
  this.setState({
    tarefa : "",
    tarefas : [].concat(this.state.tarefas, this.state.tarefa)
  });
  }
}

