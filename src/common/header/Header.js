import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'
import Modal from 'react-modal'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import FormHelpertext from '@material-ui/core/FormHelperText';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0 , textAlign: 'center'}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}
class Header extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            usernameRequired: "dispNone",
            username: ''
        }
    }

    openModalHandler = () => {
        this.setState({ modalIsOpen: true })
    }
    closeModal = () => {
        this.setState({ modalIsOpen: false })
    }
    tabChangeHandler = (event, value) => {
        this.setState({ value: value });
    }
    loginClickHandler = () => {
        this.state.username === "" ? this.setState({usernameRequired: "dispBlock"}) : this.setState({usernameRequired: "dispNone"});
    }
    inputUsernameChangeHandler = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    render() {
        return <div>
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <div className="login-button">
                    <Button variant="contained" color="default" className="login-button" onClick={this.openModalHandler}>Login</Button>
                </div>
            </header>
            <Modal ariaHideApp={false}
                isOpen={this.state.modalIsOpen}
                contentLabel="Login"
                onRequestClose={this.closeModal}
                style={customStyles}>
                <Tabs class="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>
                {this.state.value === 0 && 
                <TabContainer>
                    <FormControl required>
                        <InputLabel htmlFor="username"> Username </InputLabel>
                        <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler}/>
                        <FormHelpertext className={this.state.usernameRequired}> 
                        <span className="red">required</span> </FormHelpertext>
                    </ FormControl><br /><br />
                    <FormControl required>
                        <InputLabel htmlFor="password"> Password </InputLabel>
                        <Input id="password" type="password" />
                    </ FormControl><br /><br />
                    <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                </TabContainer>}
            </Modal>
        </div>
    }
}

export default Header;