import React, { Component } from "react";
import ReadmeContent from './readme';
const ReactMarkdown = require('react-markdown')

class Description extends Component {

    render() {

        const input = ReadmeContent();

        return (
            <div className="description">
			<ReactMarkdown source={input.content} />
		</div>
        );
    }

}

export default Description;