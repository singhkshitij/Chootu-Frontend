import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const styles = {
    root: {
        flexGrow: 1
    }
};

function Header(props) {
    const { classes } = props;

    const style = {
        bannerStyle: {
            background: "#2c3e50",
            color: "white",
            height: 60,
            padding: "0 30px 10px"
        },
        linkStyle: {
            color: "white",
            margin: '0 0 0 10px'
        },
        iconsStyle: {
            padding: "0 10px"
        }
    };

    return (
        <div className={classes.root}>
      <AppBar position="fixed" style={style.bannerStyle}>
        <Toolbar>
              <img src="./logo.png" alt="Chootu" style={{width:"160px"}}/>
              <Button href="https://github.com/singhkshitij/Chootu" style={style.linkStyle}>
                Github
              </Button>
        </Toolbar>
      </AppBar>
    </div>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);