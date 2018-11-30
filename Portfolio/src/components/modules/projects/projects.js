import React from 'react'
import './projects.css'
import Modal from '../modal/modal'


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
    fetch("https://raw.githubusercontent.com/CyberPutty/CyberPutty.github.io/master/Portfolio/src/components/modules/projects/carousel.js")
    .then(res=>res.json).then(data=>{

        this.setState({projectlist : data.items});
    });
    
    
}
modal=(event)=>{
    if(this.state.show===""){
let id=event.target.id;
    
    this.setState({selected:this.state.projectlist[id], show:"show"});

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

    return(<div className="projectsContainer">
     {this.state.projectlist.map(function(item,index){
         
              return(<img src={item.img} id={index} onClick={handClick} alt={item.name}/>);
         
     })}
     <Modal show={this.state.show} hide={this.hide} selected={this.state.selected}/>
    </div>)}
}





export default Projects