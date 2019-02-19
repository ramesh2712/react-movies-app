import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'
import Modal from 'react-modal'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Header extends Component {

    constructor(){
        super();
        this.state = {
            modalIsOpen : false,
            value: 0
        }
    }
    openModalHandler = () => {
        this.setState({modalIsOpen: true})
    }
    closeModal = () => {
        this.setState({modalIsOpen: false})
    }
    tabChangeHandler = (event , value) => {
        console.log(event);
        console.log(value);
        this.setState({value: value});
    }
    render() {
        return <div>
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <div className="login-button">
                    <Button variant="contained" color="default" className="login-button" onClick={this.openModalHandler}>Login</Button>
                </div>
            </header>
            <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.closeModal}>
                <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>
            </Modal>
        </div>
    }
}

export default Header;