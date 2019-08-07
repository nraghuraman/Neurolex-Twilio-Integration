import React from 'react';

class ThankYou extends React.Component {
	render() {
		return (
			<div>
				{
					this.props.formType === 'thankYou-textForm' &&
					<React.Fragment>
						<h2>Thank you! Your text messages will be sent.</h2>
						<h3 onClick={() => this.props.pageChange('textForm')}>Send another text message</h3>
						<h3 onClick={() => this.props.pageChange('callForm')}>Or send an automated, recorded phone call</h3>
					</React.Fragment>
				}

				{
					this.props.formType === 'thankYou-callForm' &&
					<React.Fragment>
						<h2>Thank you! The number you entered will be called.</h2>
						<h3 onClick={() => this.props.pageChange('textForm')}>Send an automated text message</h3>
					</React.Fragment>
				}
				
				<h3 onClick={() => this.props.pageChange('welcome')}>Go back to welcome page</h3>
			</div>
		);
	}
}

export default ThankYou;