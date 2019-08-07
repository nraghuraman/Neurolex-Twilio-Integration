import React from 'react';
import WelcomePage from './WelcomePage';
import TextForm from './TextForm';
import ThankYou from './ThankYou';
import CallForm from './CallForm';
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
		} else if (this.state.pageType === 'textForm') {
			page = <TextForm pageChange={this.handleClick} submitFormData={submitFormData}/>;
		} else if (this.state.pageType === 'callForm') {
			page = <CallForm pageChange={this.handleClick} submitFormData={submitFormData}/>;
		} else {
			page = <ThankYou pageChange={this.handleClick} formType={this.state.pageType}/>;
		}

		return <div className="App">{page}</div>;
	}
}

export default App; 