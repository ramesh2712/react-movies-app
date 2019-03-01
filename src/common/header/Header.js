import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
import BookShow from '../../screens/bookshow/BookShow';

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
        <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
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
            username: '',
            loginpasswordRequired: 'dispNone',
            loginpassword: '',

            firstname: '',
            firstnameRequired: '',
            lastname: '',
            lastnameRequired: '',
            email: '',
            emailRequired: '',
            registerPasswordRequired: 'dispNone',
            registerPassword: '',
            contactnoRequired: '',
            contactno: ''
        }
    }

    openModalHandler = () => {
        this.setState({ modalIsOpen: true })
    }
    closeModal = () => {
        this.setState({ modalIsOpen: false })
        this.setState({ value: 0 })
        this.setState({ usernameRequired: "dispNone" })
        this.setState({ loginpasswordRequired: "dispNone" })
        this.setState({ username: "" })
        this.setState({ loginpassword: "" })
        // Registration

        this.setState({ firstnameRequired: "dispNone" })
        this.setState({ lastnameRequired: "dispNone" })
        this.setState({ emailRequired: "dispNone" })
        this.setState({ contactnoRequired: "dispNone" })
        this.setState({ registerPasswordRequired: "dispNone" })

        this.setState({ firstname: "" })
        this.setState({ lastname: "" })
        this.setState({ email: "" })
        this.setState({ contactno: "" })
        this.setState({ registerPassword: "" })

    }
    tabChangeHandler = (event, value) => {
        this.setState({ value: value });
    }
    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.loginpassword === "" ? this.setState({ loginpasswordRequired: "dispBlock" }) : this.setState({ loginpasswordRequired: "dispNone" });
    }
    inputUsernameChangeHandler = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    inputPasswordChangeHandler = (e) => {
        this.setState({
            loginpassword: e.target.value
        })
    }
    registerClickHandler = () => {
        this.state.firstname === "" ? this.setState({ firstnameRequired: "dispBlock" }) : this.setState({ firstnameRequired: "dispNone" });
        this.state.lastname === "" ? this.setState({ lastnameRequired: "dispBlock" }) : this.setState({ lastnameRequired: "dispNone" });
        this.state.email === "" ? this.setState({ emailRequired: "dispBlock" }) : this.setState({ emailRequired: "dispNone" });
        this.state.contactno === "" ? this.setState({ contactnoRequired: "dispBlock" }) : this.setState({ contactnoRequired: "dispNone" });
        this.state.registerPassword === "" ? this.setState({ registerPasswordRequired: "dispBlock" }) : this.setState({ registerPasswordRequired: "dispNone" });
    }
    inputfirstNameChangeHandler = (e) => {
        this.setState({
            firstname: e.target.value
        })
    }
    inputlastNameChangeHandler = (e) => {
        this.setState({
            lastname: e.target.value
        })
    }
    inputemailChangeHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    inputRegisterPasswordChangeHandler = (e) => {
        this.setState({
            registerPassword: e.target.value
        })
    }
    inputcontactNoChangeHandler = (e) => {
        this.setState({
            contactno: e.target.value
        })
    }
    bookshowHandler = () => {
        ReactDOM.render(<BookShow />, document.getElementById('root'));
    }
    render() {
        return <div>
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <div className="login-button">
                    <Button variant="contained" color="default" className="login-button" onClick={this.openModalHandler}>Login</Button>
                </div>
                {this.props.showBookShowButton === "true" ?
                    <div className="bookshow-button">
                        <Button variant="contained" color="primary" onClick={this.bookshowHandler}>
                            BOOK SHOW</Button>
                    </div> : ""
                }

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
                            <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                            <FormHelpertext className={this.state.usernameRequired}>
                                <span className="red">required</span> </FormHelpertext>
                        </ FormControl><br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="password"> Password </InputLabel>
                            <Input id="password" type="password" password={this.state.loginpassword} onChange={this.inputPasswordChangeHandler} />
                            <FormHelpertext className={this.state.loginpasswordRequired}>
                                <span className="red">required</span> </FormHelpertext>
                        </ FormControl><br /><br />
                        <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                    </TabContainer>}
                {this.state.value === 1 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="firstname"> First Name </InputLabel>
                            <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputfirstNameChangeHandler} />
                            <FormHelpertext className={this.state.firstnameRequired}>
                                <span className="red">required</span> </FormHelpertext>
                        </ FormControl><br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="lastname"> Last Name </InputLabel>
                            <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.inputlastNameChangeHandler} />
                            <FormHelpertext className={this.state.lastnameRequired}>
                                <span className="red">required</span> </FormHelpertext>
                        </ FormControl><br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="email"> Email </InputLabel>
                            <Input id="lastname" type="text" email={this.state.email} onChange={this.inputemailChangeHandler} />
                            <FormHelpertext className={this.state.emailRequired}>
                                <span className="red">required</span> </FormHelpertext>
                        </ FormControl><br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="password"> Password </InputLabel>
                            <Input id="password" type="password" password={this.state.registerPassword} onChange={this.inputRegisterPasswordChangeHandler} />
                            <FormHelpertext className={this.state.registerPasswordRequired}>
                                <span className="red">required</span> </FormHelpertext>
                        </ FormControl><br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="contactno"> Contact No. </InputLabel>
                            <Input id="contactno" type="text" contactno={this.state.contactno} onChange={this.inputcontactNoChangeHandler} />
                            <FormHelpertext className={this.state.contactno}>
                                <span className="red">required</span> </FormHelpertext>
                        </ FormControl><br /><br />
                        <Button variant="contained" color="primary" onClick={this.registerClickHandler}> REGISTER </Button>
                    </TabContainer>}
            </Modal>
        </div>
    }
}

export default Header;