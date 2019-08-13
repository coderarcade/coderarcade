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
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({ message: '' });
        }
    }
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
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
                    <div className="card-footer">
                        <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({ username: ev.target.value })} className="form-control" />
                        <br />
                        <input type="text" placeholder="Message" value={this.state.message} onChange={ev => this.setState({ message: ev.target.value })} className="form-control" />
                        <br />
                        <button style={{ backgroundColor: "blue" }} onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Chat;