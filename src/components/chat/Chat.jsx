import { useState } from 'react';
import './chat.scss';

function Chat(){
    const [chat,setChat] = useState(true)
    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiRQwXf9TTpgIOStvwMpdGBeEQecgottZew&s" 
                    alt=""
                     />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiRQwXf9TTpgIOStvwMpdGBeEQecgottZew&s" 
                    alt=""
                     />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiRQwXf9TTpgIOStvwMpdGBeEQecgottZew&s" 
                    alt=""
                     />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiRQwXf9TTpgIOStvwMpdGBeEQecgottZew&s" 
                    alt=""
                     />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiRQwXf9TTpgIOStvwMpdGBeEQecgottZew&s" 
                    alt=""
                     />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiRQwXf9TTpgIOStvwMpdGBeEQecgottZew&s" 
                    alt=""
                     />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiRQwXf9TTpgIOStvwMpdGBeEQecgottZew&s" 
                    alt=""
                     />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiRQwXf9TTpgIOStvwMpdGBeEQecgottZew&s" 
                    alt=""
                     />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
            </div>
            {chat && (<div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiRQwXf9TTpgIOStvwMpdGBeEQecgottZew&s" 
                        alt="" />
                        John Doe
                    </div>
                    <span className="close" onClick={()=> setChat(null)}>X</span>
                </div>
                <div className="centre">
                    <div className="chatMessage">
                        <p>How are you</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>How are you</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>How are you</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>How are you</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>How are you</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                         <p>How are you</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>How are you</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>How are you</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea ></textarea>
                    <button>Send</button>
                </div>
            </div>)}
        </div>
    )
}

export default Chat;