import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ValidateUrl from './UrlValidator';
import CustomUrlValidator from './CustomUrlValidator'

const style = {
    background: 'linear-gradient(45deg, #fe8c00 , #f83600 )',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

class ButtonStyled extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: props.text,
            textBoxValue: props.textBoxValue,
            showConvertedUrl: props.convertedLink,
            getCustomUrl: props.customUrl
        }
    }

    getConvertedLink = () => {

        document.getElementsByClassName('output')[0].style.display = "none";

        if (!ValidateUrl(this.state.textBoxValue())) {
            toast.error("Please enter valid url !", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        } else if (!CustomUrlValidator(this.state.getCustomUrl())) {
            toast.error("Please enter alpha-numeric custom url !", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        } else {
            axios.post('https://www.chtu.ml/shortener', {
                    "url": this.state.textBoxValue(),
                    "customUrl": this.state.getCustomUrl()
                })
                .then(res => {
                    this.state.showConvertedUrl(res.data);
                })

            if(this.state.getCustomUrl() !== ""){
                toast.info("Custom url will be served if available :)", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            }           
        }
    }
    render() {
        return (
            <div>
                <Button style={style} onClick={ this.getConvertedLink }>{this.state.text}</Button>;
            </div>
        );
    }
}

export default ButtonStyled;