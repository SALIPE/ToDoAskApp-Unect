import React, { Component, Fragment } from 'react';

import './ToDo.css';
import addbt from '../assets/add.svg';
import donebt from '../assets/Done.svg';
import deletebt from '../assets/Delete.svg';

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
              {this.state.tarefas.map(tarefa =>
              <div className = "tarefas">
                <p>{tarefa}</p>
                <div className = "bttask">
                  <button className = "btdone"><img src={donebt} /></button>
                  <button className = "btdelete"><img src={deletebt} /></button>
                </div>
              </div>)}
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

