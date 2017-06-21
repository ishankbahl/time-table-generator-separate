import React from "react";
import InputBox from "./InputBox";

class App extends React.Component{
  constructor(){
    super();
    this.addTeacher=this.addTeacher.bind(this);
    this.addRoom=this.addRoom.bind(this);
    this.renderData=this.renderData.bind(this);
    this.renderLi=this.renderLi.bind(this);
    this.removeData=this.removeData.bind(this);
    this.removeRoom=this.removeRoom.bind(this);
    this.removeTeacher=this.removeTeacher.bind(this);
    this.state={
      teachers:{},
      rooms:{}
    }
  }

  addTeacher(data){
    const teachers={...this.state.teachers};
    teachers[`teacher-${Date.now()}`]=data;
    this.setState({teachers});
  }

  addRoom(data){
    const rooms={...this.state.rooms};
    rooms[`room-${Date.now()}`]=data;
    this.setState({rooms});
  }

  renderData(key){
    let data;
    const value=this.props.params.data;
    if (value==="teachers")
      data=this.state.teachers[key];
    else
      data=this.state.rooms[key];
    const removeButton=<button onClick={()=>this.removeData(key)}>&times;</button>;
    return (
      <li key={key}>{data.name}<span>{removeButton}</span></li>
    );
  }

  removeData(key){
    if(this.props.params.data==="teachers")
      this.removeTeacher(key);
    else
      this.removeRoom(key);
  }

  removeTeacher(key){
    const teachers={...this.state.teachers};
    delete teachers[key];
    this.setState({teachers});
  }

  removeRoom(key){
    const rooms={...this.state.rooms};
    delete rooms[key];
    this.setState({rooms});
  }

  componentWillUpdate(nextProps,nextState){
    localStorage.setItem("data",JSON.stringify(nextState));
  }

  componentWillMount(){
    const localStorageRef=localStorage.getItem("data");
    if(localStorageRef){
      this.setState({
        teachers:JSON.parse(localStorageRef).teachers,
        rooms:JSON.parse(localStorageRef).rooms
      });
    }
  }

  renderLi(){
    const data=this.props.params.data;
    if(data==="teachers")
       return Object.keys(this.state.teachers).map(key=>this.renderData(key));
    else
      return Object.keys(this.state.rooms).map(key=>this.renderData(key));
  }

  render(){
    const data=this.props.params.data;
    return(
        <div>
          <h1>{data}</h1>
          <InputBox addTeacher={this.addTeacher} addRoom={this.addRoom} data={data} />
          <ul>{this.renderLi()}</ul>
        </div>
    );
  }
}

export default App;