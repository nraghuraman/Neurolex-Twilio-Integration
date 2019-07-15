import React from 'react';

class ThankYou extends React.Component {
  render() {
	  return (
			<div>
			  <h2>Thank you! Your text messages will be sent.</h2>
			  <h3 onClick={() => this.props.pageChange('form')}>Send another text message</h3>
			  <h3 onClick={() => this.props.pageChange('welcome')}>Go back to welcome page</h3>
			</div>
	  );
  }
}

export default ThankYou;