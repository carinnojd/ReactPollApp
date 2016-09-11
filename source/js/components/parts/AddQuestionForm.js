var React = require('react');

var AddQuestionForm = React.createClass({

	render: function() {
		return(
			<div className="newQuestion">
				<h2>Add a new question </h2>
				<form action="javascript:void(0)" onSubmit={this.addQuestion}>
					<label> Question: </label>
					<input type="text" placeholder="Enter your question here" ref="questionInput" className="form-control" required />
					<label> Answer: </label>
					<input type="text" placeholder="Type answer A here" ref="answerA" className="form-control" required />
					<input type="text" placeholder="Type answer B here" ref="answerB" className="form-control" required />
					<input type="text" placeholder="Type answer C here" ref="answerC" className="form-control" required />
					<input type="text" placeholder="Type answer D here" ref="answerD" className="form-control" required />
					<button className="btn btn-primary">Add question</button>
				</form>
			</div>
		)
	}
	,addQuestion:function() {
        var question = this.refs.questionInput.value;
        var answerA = this.refs.answerA.value;
        var answerB = this.refs.answerB.value;
        var answerC = this.refs.answerC.value;
        var answerD = this.refs.answerD.value;
        
        this.props.emit("add_question", {
        	q: question, 
        	a: answerA, 
        	b: answerB, 
        	c: answerC, 
        	d: answerD
        })

		this.refs.questionInput.value = '';
		this.refs.answerA.value = '';
		this.refs.answerB.value = '';
		this.refs.answerC.value = '';
		this.refs.answerD.value = '';
    }
});

module.exports = AddQuestionForm;