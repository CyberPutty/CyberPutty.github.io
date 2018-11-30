import React from 'react'
import './contact.css'


const Contact=()=>(<div className="contactContainer">
    
    <form method="POST" action="https://formspree.io/michaelcordero88@gmail.com">
             <text>CONTACT</text>
        <div><label>Name</label><input name="name" placeholder="Your name" type="text"/></div>
        <div><label>Email</label><input name="email" placeholder="Your email" type="email"/></div>
        <div>
          <label >Message</label><textarea name="message" placeholder="Your message">
          </textarea>
          <input type="hidden" name="_next" value="./thanks.html" />
          <input className="send"type="submit" value="Send"/>
        </div>
      </form>
    </div>)

export default Contact