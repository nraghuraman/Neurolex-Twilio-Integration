import React from 'react';

class CallForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number: '',
			message: '',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleSubmit() {
		this.props.submitFormData({
			number: this.state.number,
			message: this.state.message,
		}, () => {
			this.props.pageChange('thankYou-callForm');
		}, () => {}, 'call');
	}

	handleInputChange(e) {
		const target = e.target;
		const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
	}

  render() {
	  return (
			<div>
			  <form id="messagesForm">
			  	<h2>A number to call, entered with + and the country code (ie. +12345678910):</h2>
				  <textarea name="number" value={this.state.number} onChange={this.handleInputChange} />
				  <h2>Message to call:</h2>
				  <textarea name="message" value={this.state.message} onChange={this.handleInputChange} />
				</form>
			  <h3 onClick={this.handleSubmit}>click here to submit and call the designated number</h3>
			</div>
	  );
  }
}

export default CallForm;