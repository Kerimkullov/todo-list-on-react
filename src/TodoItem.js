import React from "react"

class TodoItem extends React.Component {
    render(){
        const {title, handleDelete} = this.props
        return (
            <div className="todo-item" style={{display:"flex",
             alignItems:"center"}}>
                <h1 style={{ padding:"0 10px"}}>{title}</h1>
                <button onClick={handleDelete}>x</button>         
            </div>
        )
    }
}

export default TodoItem;