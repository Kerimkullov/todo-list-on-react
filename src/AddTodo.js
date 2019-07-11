import React from 'react';

class AddTodo extends React.Component{
  
    render(){
        const {item, handleChange, handleSubmit} = this.props
        return(
            <div className="container">
            <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type item here"
              value={item}
              onChange={handleChange}
            />
            <button
              className="add-btn btn-floating"
              type="submit">add
            </button>
            </form>
        </div>
        )
    }
}
export default AddTodo;