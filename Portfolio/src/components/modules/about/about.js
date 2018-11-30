import React from 'react'
import AboutImage from '../../../images/me.png';
import './about.css'
const arr=["JAVASCRIPT","HTML5","CSS3","REACT","REDUX","D3.JS","GATSBY","EXPRESS","C#","MVC"];

const About=()=>(<div className="aboutContainer">
<div className="image"><img src={AboutImage} alt="Michael Cordero"></img></div>
<div className="middle">
    <p>"Having lived in many parts of Utah, Arizona, California, and Oregon I have met and learned from alot of people along the way. I enjoy programming and love finding creative people to work with.
<br/><br/>After completing my FCC certifications I have continued to code full time. Currently I am working with a remote team as part of a chingu cohorts voyage. In my free time I am a sketcher , concept artist, and musician."
</p>
    <div className="skills">
    <ul>{
        arr.map(function(item,index){
            return(<li>{item}</li>)
        })
    }</ul>    
    </div>
</div>
<div className="image">

</div>
    </div>)

export default About