import React, { Component, Fragment } from 'react';
import api from '../service/api';
import io from 'socket.io-client';
import './ToDo.css';
import addbt from '../assets/add.svg';
import donebt from '../assets/Done.svg';
import deletebt from '../assets/Delete.svg';
import beach from '../assets/beach.svg';


export default class ToDo extends Component {
   constructor() {
    super();
    this.state={
      tarefas:[],
      feitos:[],
      todo:'',
    };
    };
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
      const state = Object.assign({},this.state);
      state[e.target.name] = e.target.value;
      this.setState(state);
      
    }

    registerToSocket=()=>{
      
      const socket = io('http://localhost:3000')
        socket.on('post', newPost => {
            this.setState({tarefas: [newPost, ...this.state.tarefas]})
        })

        socket.on('update', updated => {
            this.setState({ tarefas: this.state.tarefas.map(post => 
                post._id === updated._id ? updated : post) 
              })
        })
    }

    handleSubmit  = async e =>{
      e.preventDefault()

      if (this.state.todo.length === 0) {
        console.log('Digite uma tarefa!');

      }else{
      const data = new FormData();
      data.append('todo', this.state.todo);
      await api.post('posts', data)

      const response = await api.get('posts/todo');
      const responseComplete = await api.get('posts/completed');

      this.setState({
        tarefas: response.data, 
        feitos: responseComplete.data
      });

      }
      
    
    }

  handleDone= async id =>{
    
    api.put(`/posts/update/${id}`);
    
    const response = await api.get('posts/todo');
    const responseComplete = await api.get('posts/completed');

      this.setState({
        tarefas: response.data, 
        feitos: responseComplete.data
      });

      
  }

  handleDelete= async id =>{
    api.delete(`/posts/delete/${id}`);

    const response = await api.get('posts/todo');
    const responseComplete = await api.get('posts/completed');

      this.setState({
        tarefas: response.data, 
        feitos: responseComplete.data
      });
  }

  render() {
    return (
      <Fragment >
      <div className = "conteiner">
        <header id="main-header">
          <div className = "header-content">
            <h1>uTask</h1>
            <div className="add-task">
              <form onSubmit  ={this.handleSubmit}>
              <input name ="todo"  placeholder="Task" onChange={this.handleChange} value={this.state.todo} required/>
              <button type="submit" className="btadd" ><img src={addbt} alt="btadd"/></button>
              </form>
            </div>
          </div>
        </header>

        <section>
          <div className="Afazer">
            <h2>TODO</h2>
            {this.state.tarefas.length === 0 &&
          <div className = "nontarefas">
            <img src={beach} alt="nothing" />
            <p>Nada a fazer</p>
          </div>
          }
            {this.state.tarefas.map(post=>(
            <div key={post._id} className = "tarefas">
              <p>{post.todo}</p>
              <div className = "bttask">
                <button className = "btdone" onClick={()=> this.handleDone(post._id) }><img src={donebt} alt="btndone" /></button>
                <button className = "btdelete" onClick={()=> this.handleDelete(post._id)}><img src={deletebt} alt="btdelete" /></button>
              </div>
            </div>))}
          </div>
      
          <div className="feito">
            <h2>DONE</h2>
            {this.state.feitos.length === 0 &&
          <div className = "nonfeitos">
            <img src={beach} alt="nothing" />
            <p>Nada feito</p>
          </div>
          }
            {this.state.feitos.map(post=>(
            <div key={post._id} className = "tarefas">
              <p>{post.todo}</p>
              <div className = "bttask">
                <button className = "btdelete" onClick={()=> this.handleDelete(post._id)}><img src={deletebt} alt="btdelete" /></button>
              </div>
            </div>))}
            </div>
        </section> 
        
      </div>
    </Fragment>
    );
  }
}

