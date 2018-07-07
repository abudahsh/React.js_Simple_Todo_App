import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class  App  extends React.Component{
  state={
    tasks:[],
    input:'',
    warrningMessage:'',
  }
  handleTyping=input=>{
  
      this.setState({ input })
    
  }
  handleSubmit=val =>{
    if (val.length > 1) {
      var newtasks = [...this.state.tasks]
      newtasks.push(val)
      this.setState({ tasks: newtasks })
    }else{
      
      this.setState({warrningMessage:'Please Put some Valid Task, don\'t be lazy'})
      
    }
    
  }
  render(){
    return (
      <div className="App">
        <h2>Add your Tasks</h2>
        <h5>{this.state.warrningMessage}</h5>
        <form action="" onSubmit={(e) => { this.handleSubmit(this.state.input); e.preventDefault(); }}>
          Todo Task<input type="text" name="task" value={this.state.input} onChange={(text)=>this.handleTyping(text.target.value)}/>
          <button type="submit" >Add</button>
        </form >
        {this.state.tasks.map(task=>
        <li>{task}</li>
        )}
      </div>
    );
  }
  
}


class TodoForm extends React.Component {


  render() {
    return(
      <div>
        <form >
          Todo Task<input type="text" name="task" />
          <button type="submit">Add</button>
        </form>
      </div>
    )

      
    
  }
}




const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
