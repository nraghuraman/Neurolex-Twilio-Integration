import React from 'react';

class WelcomePage extends React.Component {
  render() {
	  return (
			<div>
			  <h1>welcome to auto-text</h1>
			  <h2>a project by Nikhil Raghuraman for NeuroLex's TRIBE 4 Competition</h2>
			  <h3 onClick={() => this.props.pageChange("form")}>click here to continue</h3>
			</div>
	  );
  }
}

export default WelcomePage;