import React, {Component} from 'react'

// class List Todos component
class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos :
            [
                 {id: 1, description : 'Create a React App', done : false, targetDate: new Date()},
                 {id: 2, description : 'Paint', done : false, targetDate: new Date()},
                 {id: 3, description : 'Play musical instrument', done : false, targetDate: new Date()},
                 {id: 4, description : 'Go for a long drive', done : false, targetDate: new Date()},
            ]
        }
    }
    render(){
        return(
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                todo =>
                                    <tr key = {todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTodosComponent