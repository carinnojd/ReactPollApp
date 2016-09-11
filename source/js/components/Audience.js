var React = require('react');
var Display = require('./parts/Display');
var JoinForm = require('./parts/JoinForm');
var Ask = require('./parts/Ask');

var Audience = React.createClass({

    render: function() {

        return (
            <Display if={this.props.status === 'connected'}>

                <Display if={this.props.member.name}>

                    <Display if={this.props.currentQuestion && !this.props.currentAnswer}>
                        <Ask question={this.props.currentQuestion} answer={this.props.answer}/>
                    </Display>

                    <Display if={!this.props.currentQuestion}>
                        <h4>Welcome {this.props.member.name}!</h4>
                        <p>Here will the questions displays...</p>
                    </Display>
                    
                    <p> You are {this.props.status} to audience page</p>
                    <p>Users connected: {this.props.audience.length}</p>
                </Display>

                <Display if={!this.props.member.name}>
                    <JoinForm emit={this.props.emit} />
                </Display>
                
            </Display>
        )

    }
    

})
module.exports = Audience;