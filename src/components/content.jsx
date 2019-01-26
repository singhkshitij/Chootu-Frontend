import React, { Component } from "react";
import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import TextField from "@material-ui/core/TextField";
import Background from "./background";
import Button from "./button";
import IconButton from '@material-ui/core/IconButton';
import CopyIcon from "@material-ui/icons/FileCopy";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Qrcode from 'qrcode.react';
import Footer from "./footer";
import CustomInput from "./customInput"
import Description from "./description";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class Content extends Component {

    constructor() {
        super()
        this.state = {
            textBoxValue: "",
            convertedLink: "",
            customUrl: ""
        }
    }

    handleTextFieldChange = (event) => {
        this.setState({
            textBoxValue: event.target.value
        })
    }

    getCustomUrl = () => {
        return this.state.customUrl;
    }

    setCustomUrl = (customUrl) => {
        this.setState({
            customUrl: customUrl
        })
    }

    getTextBoxValue = () => {
        return this.state.textBoxValue;
    }

    showConvertedUrl = (convertedUrl) => {
        this.setState({
            convertedLink: convertedUrl
        })
        document.getElementsByClassName('output')[0].style.display = "block";

    }

    generateNotification = () => {

        toast.warn("Copied Successfully !", {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    render() {

        return (
            <div className="main-content">
				<Background />
				<div className="content-box">
					<Container>
						<Row>
							<TextField
								id="outlined-full-width"
								label="Link to shorten:"
								style={{ margin: 8 , color:'#fff' }}
								InputLabelProps={{style: { color: '#ECEFF1' }}}
								placeholder="https://abkibarmodi.sarkar/jai-ho-modi-ji-ki"
								fullWidth
								onChange = {this.handleTextFieldChange}
							/>
						</Row>
						<Row>
							<CustomInput customUrl = { this.setCustomUrl }/>
						</Row>
						<Row>
							<Button text = {'Shorten'} textBoxValue = { this.getTextBoxValue } customUrl = { this.getCustomUrl } convertedLink = { this.showConvertedUrl }/>
						</Row>
						<Row>
								<div className='output'>
								<Row>	
									<p className='converted-link'> { this.state.convertedLink }
										<IconButton color="inherit" component="span">
										<CopyToClipboard text={this.state.convertedLink} onCopy={ this.generateNotification }>
								          <CopyIcon />
							         	</CopyToClipboard>
								        </IconButton>
								     </p>
								</Row>
								<Row>	
									<Qrcode value = { this.state.convertedLink }/>
								</Row>	
								</div>
						</Row>
					</Container>
				</div>
				<div>
					<Description/>
				</div>
				<div>
					<Footer/>
				</div>
				<ToastContainer />
			</div>
        );
    }
}

export default Content;