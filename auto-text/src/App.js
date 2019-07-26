import React from 'react';
import WelcomePage from './WelcomePage';
import TextForm from './TextForm';
import ThankYou from './ThankYou';
import './App.css';
import { submitFormData } from './api';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageType: 'welcome',
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(changeTo) {
		this.setState({
			pageType: changeTo,
		});
	}

	render() {
		let page;

		if (this.state.pageType === 'welcome') {
			page = <WelcomePage pageChange={this.handleClick}/>;
		} else if (this.state.pageType === 'form') {
			page = <TextForm pageChange={this.handleClick} submitFormData={submitFormData}/>;
		} else {
			page = <ThankYou pageChange={this.handleClick}/>;
		}

		return <div className="App">{page}</div>;
	}
}

export default App; 