import React from "react";
import io from "socket.io-client";


var HOST = window.location.hostname
var PORT = 3000

// var ws = new WebSocket(HOST);
// var el = document.getElementById('server-time');
// ws.onmessage = function (event) {
//   el.innerHTML = 'Server time: ' + event.data;
// };

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };
        console.log(HOST + ':' + PORT);

        if (process.env.NODE_ENV === "production") {
            this.socket = io();
        } else {
            this.socket = io('http://localhost:3001');
        }

        // this.socket.on('error', function (err) {
        //     console.log('received socket error:')
        //     console.log(err)
        //   })

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

    render() {
        return (
            <div style={{ paddingTop: "10px" }} className="container">
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Global Chat</div>
                                <hr />
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div key={Math.random() * 1000}>{message.author}: {message.message}</div>
                                        )
                                    })}
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
                </div>
            </div>
        );
    }
}

export default Chat;