import React, { Component } from "react";
import Collapsible from 'react-collapsible';
import TextField from "@material-ui/core/TextField";

class CustomInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            customUrl: "",
            setCustomUrl: props.customUrl
        }
    }

    handleTextFieldChange = (event) => {
        this.state.setCustomUrl(event.target.value);
    }

    render() {
        return (
            <div className="custom-input">
				<Collapsible trigger="Link Options" easing="ease-out">
					<div className="label-wrapper">
						<p className="custom-url-label">chootu.netlify.app</p>
					</div>
					<div className="textfield-wrapper">
						<TextField
							id="custom-url"
							label="Custom Link"
							InputLabelProps={{style: { color: '#ECEFF1' }}}
							placeholder="myUrl"
							fullWidth
							onChange = {this.handleTextFieldChange}
							/>
					</div>
				</Collapsible>	
			</div>
        )
    }

}

export default CustomInput;