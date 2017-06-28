import React,{Component} from "react";
import base from "../base";

class Select extends Component{
    constructor(){
        super();
        this.state={
            rooms:{},
            teachers:{}
        }
    }

    componentWillMount(){
        this.ref1=base.syncState("teachers",{
            context:this,
            state:"teachers"
        });
        this.ref2=base.syncState("rooms",{
            context:this,
            state:"rooms"
        });
    }

    componentWillUnmount(){
        base.removeBinding(this.ref1.endpoint);
        base.removeBinding(this.ref2.endpoint);
    }

    render(){
        console.log(this.state);
        const {teachers,rooms} =this.state;  
        return(
            <div>
                <select>
                    {Object.keys(teachers).map((key)=><option key={key} value={teachers[key].name} >{teachers[key].name}</option>)}
                </select>
                <select>
                    {Object.keys(rooms).map((key)=><option key={key} value={rooms[key].name}>{rooms[key].name}</option>)}
                </select>
            </div>
        );
    }
}

export default Select;