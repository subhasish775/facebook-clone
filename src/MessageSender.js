import React,{ useState } from 'react'
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import profile from './profilebg.png';
function MessageSender() {
    const [input, setInput] = useState("");


    const handleSubmit=(e)=>{
        e.preventDefault();
        //reset input 
        setInput("");
    }
    return <div className="messageSender">
    <div className="messageSender_top">
    <Avatar src={profile}/>
    <form>
    <input 
    value={input}
    onChange={(e)=> setInput(e.target.value)}
    className="messageSender_input"
     type="text" placeholder={`What's on your mind, Subhasish?`}/>
     <button onClick={handleSubmit}>Hidden submit</button>
    </form>
    </div>
    <div className="messageSender_bottom">
    <div className="messageSender_option">
    <VideocamIcon style={{color:"red"}} />
    <h3>Live Vedio</h3>
    </div>
    
    <div className="messageSender_option">
        <PhotoLibraryIcon style={{color:"green"}} />
        <h3>Photo/Video</h3>
    </div>
    <div className="messageSender_option">
        <InsertEmoticonIcon style={{color:"orange"}} />
        <h3>Feeling/Activity</h3>
    </div>

    </div>
        
            
        </div>
    
}

export default MessageSender
