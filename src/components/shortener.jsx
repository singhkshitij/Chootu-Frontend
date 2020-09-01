import React, { Component } from "react";
import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import TextField from "@material-ui/core/TextField";
import Background from "./background";
import Button from "./button";
import IconButton from '@material-ui/core/IconButton';
import CopyIcon from "@material-ui/icons/FileCopy";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Footer from "./footer";
import Description from "./description";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class Content extends Component {

    constructor() {
        super()
        this.state = {
            textBoxValue: "",
            convertedLink: ""
        }
    }

    handleTextFieldChange = (event) => {
        this.setState({
            textBoxValue: event.target.value
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
								placeholder="https://github.com/singhkshitij/Chootu-Frontend"
								fullWidth
								onChange = {this.handleTextFieldChange}
							/>
						</Row>
						<Row>
							<Button text = {'Shorten'} textBoxValue = { this.getTextBoxValue } convertedLink = { this.showConvertedUrl }/>
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