import React, { Component, Fragment } from 'react';
import api from '../service/api';
import './ToDo.css';
import addbt from '../assets/add.svg';
import donebt from '../assets/Done.svg';
import deletebt from '../assets/Delete.svg';

export default class ToDo extends Component {
  state={
    tarefas:[],
    feitos:[],
  };

 /* constructor() {
    super();
    this.state = { 
      tarefas: [],
      inputTarefa: ''
    };*/

    async componentDidMount(){
      const response = await api.get('posts/todo');
      const responseComplete = await api.get('posts/completed');

      this.setState({
        tarefas: response.data, 
        feitos: responseComplete.data
      });
    }
/*
    this.adicionarTarefa = (event) => {
      event.preventDefault();
      const tarefas = this.state.tarefas.slice();
      tarefas.push(this.state.inputTarefa);
      this.setState({
        tarefas: tarefas,
        inputTarefa: ''
      });
    };

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
  };*/

  render() {
    return (
      /*<ListaView
        tarefas = {this.state.tarefas}
        inputTarefa = {this.state.inputTarefa}
        onChange = {this.onChange}
        adicionarTarefa = {this.adicionarTarefa}
        removeTarefa = {this.removeTarefa}
        
      />*/ 
      
      <Fragment >
      <header id="main-header">
        <div className = "header-content">
          <h1>uTask</h1>
          <div className="add-task">
            <input name = "inputTarefa"></input>
            <button className="btadd"><img src={addbt} alt="btadd"/></button>
          </div>
        </div>
      </header>
      
        <div className="Afazer">
          <h2>TODO</h2>
          <section>
          {this.state.tarefas.map(post=>(
          <div className = "tarefas">
            <p>{post.todo}</p>
            <div className = "bttask">
              <button className = "btdone"><img src={donebt} alt="btndone" /></button>
              <button className = "btdelete"><img src={deletebt} alt="btdelete" /></button>
            </div>
          </div>))}
        </section>
        </div>
    
        <div className="feito">
          <h2>DONE</h2>
          <section>
          {this.state.feitos.map(post=>(
          <div className = "tarefas">
            <p>{post.todo}</p>
            <div className = "bttask">
              <button className = "btdone"><img src={donebt} alt="btndone" /></button>
              <button className = "btdelete"><img src={deletebt} alt="btdelete" /></button>
            </div>
          </div>))}
        </section> 
        </div>
      
    </Fragment>
    );
  }
}

/*const ListaView = (props) => (
 
);*/