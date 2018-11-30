import React from 'react'
import './projects.css'
import Modal from '../modal/modal'
import projects from './carousel'

class Projects extends React.Component{

constructor(props){
    super(props);
    this.state = {
        selected:[],
        projectlist:[],
        show: ""
    }
}


componentDidMount(){

    this.setState({projectlist : projects.items});
    
}
modal=(event)=>{
    if(this.state.show===""){
let id=event.target.id;
    
    this.setState({selected:this.state.projectlist[id], show:"show"});
    console.log(this.state.selected);

    }
 
}
hide=(event)=>{
    if(this.state.show!==""){
        this.setState({show: ""});
    }
}


render(){
 const handClick=(event)=>{
     this.modal(event);
 }
console.log(this.state.projectlist);
    return(<div className="projectsContainer">
     {this.state.projectlist.map(function(item,index){
         
              return(<img src={item.img} id={index} onClick={handClick} alt={item.name}/>);
         
     })}
     <Modal show={this.state.show} hide={this.hide} selected={this.state.selected}/>
    </div>)}
}





export default Projects