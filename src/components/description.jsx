import React, { Component } from "react";
import ReadmeContent from './readme';
const ReactMarkdown = require('react-markdown')

class Description extends Component {

    render() {

        const input = ReadmeContent();

        return (
            <div className="description">
            	<h2>Found Interesting ? Feel free to Contribute !</h2>
            	<div className="fr-desc">
					<ReactMarkdown source={input.frContent} />
					<a href="https://github.com/singhkshitij/Chootu-Frontend" target="_blank" rel="noopener noreferrer"><button className="btn orange" type="button"><span>Visit Repo</span></button></a>
				</div>
				<div className="bk-desc">
					<ReactMarkdown source={input.bkContent} />
					<a href="https://github.com/singhkshitij/UrlShortener-REST-API" target="_blank" rel="noopener noreferrer"><button className="btn orange" type="button"><span>Visit Repo</span></button></a>
				</div>
			</div>
        );
    }

}

export default Description;