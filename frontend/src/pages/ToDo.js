import React, { Component, Fragment } from 'react';
import './ToDo.css';
import addbt from '../assets/add.svg';
import donebt from '../assets/Done.svg';
import deletebt from '../assets/Delete.svg';

export default class ToDo extends Component {
  constructor() {
    super();
    this.state = { 
      tarefas: [],
      inputTarefa: ''
    };

    this.adicionarTarefa = (event) => {
      event.preventDefault();
      const tarefas = this.state.tarefas.slice();
      tarefas.push(this.state.inputTarefa);
      this.setState({
        tarefas: tarefas,
        inputTarefa: ''
      });
    }

    this.removeTarefa = (id) => {
      const tarefas = this.state.tarefas.slice();
      tarefas.splice(id, 1);
      this.setState({tarefas});
    };
    
    this.onChange = (event) => {
      event.preventDefault();
      const state = Object.assign({},this.state);
      state[event.target.name] = event.target.value;
      this.setState(state);
    };
  }

  render() {
    return (
      <ListaView
        tarefas = {this.state.tarefas}
        inputTarefa = {this.state.inputTarefa}
        onChange = {this.onChange}
        adicionarTarefa = {this.adicionarTarefa}
        removeTarefa = {this.removeTarefa}
        
      />    
    );
  }
}

const ListaView = (props) => (
  <Fragment >
  <header id="main-header">
    <div className = "header-content">
      <h1>uTask</h1>
      <div className="add-task">
        <input name = "inputTarefa" onChange = {props.onChange} value = {props.inputTarefa}></input>
        <button onClick = {props.adicionarTarefa}><img src={addbt}/></button>
      </div>
    </div>
  </header>
  <section>
    <div className="Afazer">
      <h2>To Do</h2>
      {props.tarefas.map((tarefa, id) =>
      <div className = "tarefas">
        <p>{tarefa}</p>
        <div className = "bttask">
          <button className = "btdone"><img src={donebt} /></button>
          <button className = "btdelete" onClick = {() => props.removeTarefa(id)}><img src={deletebt} /></button>
        </div>
      </div>)}

     
    </div>
  </section>
</Fragment>
)