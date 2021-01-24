import React, { Component, Fragment } from 'react';
import api from '../service/api';
import io from 'socket.io-client';
import './ToDo.css';
import addbt from '../assets/add.svg';
import donebt from '../assets/Done.svg';
import deletebt from '../assets/Delete.svg';

export default class ToDo extends Component {
  state={
    tarefas:[],
    feitos:[],
    todo:'',
  };

 /* constructor() {
    super();
    this.state = { 
      tarefas: [],
      inputTarefa: ''
    };*/

    async componentDidMount(){
      this.registerToSocket();

      const response = await api.get('posts/todo');
      const responseComplete = await api.get('posts/completed');

      this.setState({
        tarefas: response.data, 
        feitos: responseComplete.data
      });
    }

    handleChange = e =>{
      e.preventDefault();
      const state = Object.assign({},this.state);
      state[e.target.name] = e.target.value;
      this.setState(state);
    }

    registerToSocket=()=>{
      const socket =io('http://localhost:3000');

      socket.on('update', updated=>{
        this.setState({
          tarefas: [updated, ...this.state.tarefas]
        });
      })
    }

    handleSubmit  = async e =>{
  
      const data = new FormData();
      data.append('todo', this.state.todo);
      await api.post('posts', data)

      
      console.log(this.state);
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

  handleDone= id =>{
    api.put(`/posts/update/${id}`);
  }

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
            <input name ="todo" placeholder="Task" onChange={this.handleChange} value={this.state.todo}/>
            <button type="submit" className="btadd" onClick={this.handleSubmit}><img src={addbt} alt="btadd"/></button>
          </div>
        </div>
      </header>
      
        <div className="Afazer">
          <h2>TODO</h2>
          <section>
          {this.state.tarefas.map(post=>(
          <div key={post._id} className = "tarefas">
            <p>{post.todo}</p>
            <div className = "bttask">
              <button className = "btdone" onClick={()=> this.handleDone(post._id) }><img src={donebt} alt="btndone" /></button>
              <button className = "btdelete"><img src={deletebt} alt="btdelete" /></button>
            </div>
          </div>))}
        </section>
        </div>
    
        <div className="feito">
          <h2>DONE</h2>
          <section>
          {this.state.feitos.map(post=>(
          <div key={post._id} className = "tarefas">
            <p>{post.todo}</p>
            <div className = "bttask">
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