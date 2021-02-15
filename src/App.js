import React, {Component} from 'react';
import FirstComponent, {FirstComponentExtended} from './component/learning-examples/FirstComponent';
import SecondComponent from './component/learning-examples/SecondComponent';
import ThirdComponent from './component/learning-examples/ThirdComponent';
import CounterButton from './component/counter/Counter';
import Counter from './component/counter/Counter';
import TodoApp from './component/todo/TodoApp';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';

class App extends Component {
  render(){
    return (
      <div className="App">
           {/*<Counter />*/}
           <TodoApp />
      </div>
    );
  }
}

class LearningComponent extends Component{
  render(){
    return (
      <div className="learningComponent">
        Learning Component
      </div>
    );
  }
}


function ForthComponent()
{
  return(
    <div className="forthComponent">
        Forth Component in function
    </div>
  );
}

export default App;

