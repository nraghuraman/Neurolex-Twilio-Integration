import React from 'react';

class TextForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numbers: '',
			message: '',
			frequency: '',
			frequencyUnits: 'minutes',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleSubmit() {
		this.props.submitFormData({
			numbers: this.state.numbers,
			message: this.state.message,
			frequency: this.state.frequency,
			frequencyUnits: this.state.frequencyUnits,
		}, () => {
			this.props.pageChange('thankyou');
		}, () => {});
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
			  	<h2>Numbers to send, entered with + and the country code (ie. +12345678910), with each number separated by a single comma and no spaces:</h2>
				  <textarea name="numbers" value={this.state.numbers} onChange={this.handleInputChange} />
				  <h2>Message to send:</h2>
				  <textarea name="message" value={this.state.message} onChange={this.handleInputChange} />
				  <h2>Frequency with which to send (enter as a single numeral, ie. 5) and the units (select from dropdown):</h2>
				  <label>
				  	Every
					  <input type="text" name="frequency" value={this.state.frequency} onChange={this.handleInputChange} />
					  <select name="frequencyUnits" value={this.state.frequencyUnits} onChange={this.handleInputChange}>
						  <option value="minutes">Minutes</option>
						  <option value="hours">Hours</option>
						  <option value="days">Days</option>
						  <option value="seconds">Seconds</option>
						</select>
					</label>
				</form>
			  <h3 onClick={this.handleSubmit}>click here to submit and begin sending text messages</h3>
			</div>
	  );
  }
}

export default TextForm;