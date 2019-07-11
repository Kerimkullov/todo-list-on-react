import React from "react"
import AddTodo from './AddTodo'
// import TodoItem from './TodoItem'
import TodoList from './TodoList'
import uuid from 'uuid'

class App extends React.Component {
    state = {
        items: [],
        id:uuid(),
        item: "",
        editItem:false,
        inProgress:[]
      }
    handleChange = e => {
      this.setState({
        item: e.target.value
      })
    }
    handleSubmit = (e)=>{
      e.preventDefault();
      const newItem = {
        id:this.state.id,
        title:this.state.item
      }
      const updateItems = [...this.state.items, newItem]
      this.setState({
        items: updateItems, 
        item:'',
        id: uuid(),
        editItem:false
      })
    }
    clearlist = () => {
      this.setState({
        items:[]
      })
    }
    handleDelete=(id)=>{
      const filteredItems = this.state.items.filter(items => 
        items.id !== id)
        this.setState({items:filteredItems})
    }
    render() {
      return (
        <div>
        <h1 className="app-title">MY LIST</h1>
        <h2>Todo Input</h2>
        <AddTodo item={this.state.addItem} handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} />
        <TodoList items={this.state.items} clearlist={this.clearlist}
        handleDelete={this.handleDelete}/>
        </div>
      );
    }
  }
  
export default App