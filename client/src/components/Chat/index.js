import React from "react";
import io from "socket.io-client";
import "./index.css";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            message: '',
            messages: []
        };
        if (process.env.NODE_ENV === "production") {
            this.socket = io();
        } else {
            this.socket = io('http://localhost:5000');
        }
        this.socket.on('RECEIVE_MESSAGE', function (data) {
            addMessage(data);
        });
        const addMessage = data => {
            console.log(data);
            this.setState({ messages: [...this.state.messages, data] });
            console.log(this.state.messages);
        }
        this.sendMessage = ev => {
            ev.preventDefault();
            if (!this.state.message.length) {
                return
            } else {
                this.socket.emit('SEND_MESSAGE', {
                    author: this.state.username,
                    message: this.state.message
                })
                this.setState({ message: '' });
            }
        }
    }

    chatBot = () => {
        let botAuthors = ["Jose", "Madison", "Tabitha", "John", "Anthony", "Melissa", "Diana", "Vlad", "Tim", "Alana", "Dan", "Chris", "Alex", "Jodi", "Aaron", "Andre", "Ben", "Charlotte", "Greg", "Ismael", "Jamie", "Karina", "Kendra", "Kevin", "Matthew", "Patience", "Simon", "Tess", "Veronique", "Victor", "Vinnie", "Pedro"];
        let botMessages = ["Hello World", "This is so cool", "I'm having so much fun!", "I love Coder Arcade", "You should hire John Sickels", "Is anybody there?", "I'm here!", "Wow this is amazing", "Can you beat my high score on snake?", "What is your high score on snake?", "I just got 10K on Tetris!!! ", "Yay I beat your high score!", "Betcha can't beat me in tic tac toe", "=) hiii", "Is this real life?", "Coder Arcade is awesome!", "What an incredible arcade", "I am very impressed!", "Do you have LinkedIn?", "Can you send me your resume?", "Are you available for FT?", "The creators are geniuses!", "Coder arcade is pure entertainment", "Guys I need to get back to work", "Will you be on later?", "I'll be on all night!", "I'll be right back!", "Hello from Amsterdam!", "Hello from LinkedIn!", "I found this on reddit", "My friend just showed me this!!!", "Hello, how is everybody?", "A/S/L?", "Hello from Australia!", "Hi from Tennessee", "My family loves this in Alabama", "Are you ready for the hurricane?", "Good thing I have coder arcade...", "My high score on snake is 43"];

        let botData = {
            author: botAuthors[(Math.floor(Math.random()*botAuthors.length))],
            message: botMessages[(Math.floor(Math.random()*botMessages.length))]
        }
        
        this.setState({ messages: [...this.state.messages, botData] });
    }
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    componentDidMount() {
        setInterval(this.chatBot, 5000)
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }
    render() {
        return (
            <div style={{ paddingTop: "10px", width: "100%" }} className="container">
                <div style={{ paddingBottom: "10%", marginTop: "2.5%" }} className="card">
                    <div className="card-title"><h3>Global Chat</h3></div>
                    <div id="scrollingwrapper">
                        <div className="card-body" style={{ width: "350px" }}>
                            <div className="messages" style={{ height: "100%" }}>
                                {this.state.messages.map(message => {
                                    return (
                                        <div key={Math.random() * 1000}>{message.author}: {message.message}</div>
                                    )
                                })}
                            </div>
                            <div style={{ float: "left", clear: "both" }}
                                ref={(el) => { this.messagesEnd = el; }}>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={this.sendMessage} className="card-footer">
                        <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({ username: ev.target.value })} className="form-control" />
                        <br />
                        <input type="text" placeholder="Message" value={this.state.message} onChange={ev => this.setState({ message: ev.target.value })} className="form-control" />
                        <br />
                        <button type="submit" style={{ backgroundColor: "blue" }} className="btn btn-primary form-control">Send</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Chat;