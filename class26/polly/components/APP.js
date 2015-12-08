var React = require('react');
var io = require('socket.io-client');
var Header = require('./parts/Header');
var APP = React.createClass({
  render: function() {
    console.log('clients', this.state.clients, this.state.status);
    var listItems = this.state.clients.map(function(client) {
      return <li>{client}</li>  
    });
    console.log('listItems', listItems);
    return (
        <ul>{listItems}
        </ul>
    );
  },

  getInitialState: function() {
    return {
      status: 'disconnected',
      clients: []
    }
  },

  // when component mounts
  componentWillMount: function() {
    // connect
    this.socket = io(); 
    this.socket.on('connect', this.onConnect);
    this.socket.on('new client', this.onNewClient);
  },

  onConnect: function() {
    console.log(this.socket.id, "connected");
  },

  onNewClient: function(data) {
    console.log('new client joined'); 
    this.setState({'clients': data});
    console.log('data', data);
  }

})

module.exports = APP;
