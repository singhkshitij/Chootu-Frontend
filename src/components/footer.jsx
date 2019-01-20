import React, { Component } from "react";
import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";

class Footer extends Component {

	render() {

	    return (
	    	<div className="footer">
		    	<Container>
	          		<Row>
		    		<p>Open Source Project - Made with ❤ in India</p>
		    		</Row>
		    		<Row>
		    		<p><a href="https://github.com/singhkshitij/Chootu">Github</a>  |  <a href="https://github.com/singhkshitij/">Developer</a></p>
		    		</Row>
	        	</Container>
	    	</div>
	    );
	   }
	}


export default Footer;