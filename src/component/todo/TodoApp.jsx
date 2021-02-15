import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/welcome/:name" component={WelcomeComponent}/>
                            <Route path="/todos" component={ListTodosComponent}/>
                            <Route component={ErrorComoponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
                {/*<LoginComponent />
                    <WelcomeComponent />*/}
            </div>
        );
    }
}

export default TodoApp


// class Header component
class HeaderComponent extends Component{
    render() {
        return (
            <div>
               <b> Header </b><hr/>
            </div>
        )
    }
}

// class Footer component
class FooterComponent extends Component{
    render(){
        return (
            <div>
                <hr/>Footer
            </div>
        )
    }
}

// class Welcome component
class WelcomeComponent extends Component{
    render(){
        return(
            <div>Welcome {this.props.match.params.name}. Your todos are <Link to="/todos">here</Link></div>
        );
    }
}

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
                <table>
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
                                <tr>
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
        );
    }
}

// Function ErrorComoponent
function ErrorComoponent(){
    return <div>An Error Occured. I don't know what to do! Contact support at xxx-xxx-xxxx</div>
}
// Login component
class LoginComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            username : 'snehal',
            password : '',
            hasLoginFailed: false,
            showSuccessMessage : false

        }
        
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event){
        console.log(this.state)
        this.setState(
            {
                [event.target.name]: 
                event.target.value
            }
        )
    }

    // handleUsernameChange(event){
    //     console.log(event.target.value)
    //     this.setState({username: event.target.value})
    // }

    // handlePasswordChange(event){
    //     console.log(event.target.value)
    //     this.setState({password: event.target.value})
    // }

    loginClicked(){
        console.log(this.state)
        if(this.state.username === 'snehal' && this.state.password==='123')
        {
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({showSuccessMessage : true})
            // this.setState({hasLoginFailed : false})
        }
        else
        {
            console.log("Failed")
            this.setState({showSuccessMessage : false})
            this.setState({hasLoginFailed : true})        }
    }

    render(){
        return(
            <div>
                {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props)
// {
//     if(props.showSuccessMessage){
//         return <div>Login Successful</div>
//     }
//     return null
// }