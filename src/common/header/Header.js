import React, { Component } from "react";
import './Header.css';
import Button from '@material-ui/core/Button';
import './Header.css';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

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
    )

}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

class Header extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: true,
            value: 0,
            userNameRequird: "dispNone",
            loginPasswordRequired: "dispNone",
            username: "",
            loginPassword: "",
            firstname: "",
            lastname: "",
            email: "",
            contactNo: "",
            firstNameRequird: "dispNone",
            lastNameRequird: "dispNone",
            emailRequird: "dispNone",
            contactNoRequired: "dispNone",
            registerPassword: "",
            registerPasswordRequird: "dispNone"


        };
    }

    openModalHandler = () => {
        this.setState({
            modalIsOpen: true,
            value: 0,
            userNameRequird: "dispNone",
            loginPasswordRequired: "dispNone",
            username: "",
            loginPassword: "",
            firstname: "",
            lastname: "",
            email: "",
            contactNo: "",
            firstNameRequird: "dispNone",
            lastNameRequird: "dispNone",
            emailRequird: "dispNone",
            contactNoRequired: "dispNone",
            registerPassword: "",
            registerPasswordRequird: "dispNone"

        })
    }
    closeModalHandler = () => {
        this.setState({ modalIsOpen: false });

    }
    onChangeHandler = (event, value) => {
        this.setState({ value })

    }
    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ userNameRequird: "dispBlock" }) : this.setState({ userNameRequird: "dispNone" });
        this.state.loginPassword === "" ? this.setState({ loginPasswordRequired: "dispBlock" }) : this.setState({ loginPasswordRequired: "dispNone" });
    }

    registerClickHandler = () => {
        this.state.firstname === "" ? this.setState({ firstNameRequird: "dispBlock" }) : this.setState({ firstNameRequird: "dispNone" });
        this.state.lastname === "" ? this.setState({ lastNameRequird: "dispBlock" }) : this.setState({ lastNameRequird: "dispNone" });
        this.state.email === "" ? this.setState({ emailRequird: "dispBlock" }) : this.setState({ emailRequird: "dispNone" });
        this.state.registerPassword === "" ? this.setState({ registerPasswordRequird: "dispBlock" }) : this.setState({ registerPasswordRequird: "dispNone" });
        this.state.contactNo === "" ? this.setState({ contactNoRequired: "dispBlock" }) : this.setState({ contactNoRequired: "dispNone" });
    }
    inputUsernameChangeHandler = (e) => {

        this.setState({ username: e.target.value });

    }
    inputLoginPasswordChangeHandler = (e) => {
        this.setState({ loginPassword: e.target.value });
    }

    inputFirstnameChangeHandler = (e) => {
        this.setState({ firstname: e.target.value });
    }

    inputLastnameChangeHandler = (e) => {
        this.setState({ lastname: e.target.value });
    }
    inputemailChangeHandler = (e) => {
        this.setState({ email: e.target.value });
    }
    inputRegisterPasswordChangeHandler = (e) => {
        this.setState({ registerPassword: e.target.value });
    }
    inputContactNoChangeHandler = (e) => {
        this.setState({ contactNo: e.target.value });
    }

    render() {
        return (
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>Login</Button>
                    </div>
                </header>
                <Modal
                    ariaHideApp={false}
                    isOpen={this.state.modalIsOpen}
                    contentLabel="Login"
                    onRequestClose={this.closeModalHandler}
                    style={customStyles}
                >

                    <Tabs className="tabs" value={this.state.value} onChange={this.onChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    {this.state.value === 0 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="username" >Username</InputLabel>
                                <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                                <FormHelperText className={this.state.userNameRequird}><span className='red'>required</span></FormHelperText>
                            </FormControl><br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="loginpassword"  >Password</InputLabel>
                                <Input id="loginpassword" type="password" loginPassword={this.state.loginPassword} onChange={this.inputLoginPasswordChangeHandler} />
                                <FormHelperText className={this.state.loginPasswordRequired} ><span className='red'>required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                        </TabContainer>}

                    {this.state.value === 1 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="firstname" >First Name</InputLabel>
                                <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputFirstnameChangeHandler} />
                                <FormHelperText className={this.state.firstNameRequird}><span className='red'>required</span></FormHelperText>
                            </FormControl><br /><br />

                            <FormControl required>
                                <InputLabel htmlFor="lastname" >Last Name</InputLabel>
                                <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.inputLastnameChangeHandler} />
                                <FormHelperText className={this.state.lastNameRequird}><span className='red'>required</span></FormHelperText>
                            </FormControl><br /><br />

                            <FormControl required>
                                <InputLabel htmlFor="email" >Email</InputLabel>
                                <Input id="email" type="email" email={this.state.email} onChange={this.inputemailChangeHandler} />
                                <FormHelperText className={this.state.emailRequird}><span className='red'>required</span></FormHelperText>
                            </FormControl><br /><br />

                            <FormControl required>
                                <InputLabel htmlFor="registerpassword"  >Password</InputLabel>
                                <Input id="registerpassword" type="password" registerPassword={this.state.registerPassword} onChange={this.inputRegisterPasswordChangeHandler} />
                                <FormHelperText className={this.state.registerPasswordRequird} ><span className='red'>required</span></FormHelperText>
                            </FormControl>
                            <br /><br />

                            <FormControl required>
                                <InputLabel htmlFor="contactno"  >Contact No</InputLabel>
                                <Input id="contactno" type="text" contactNo={this.state.contactNo} onChange={this.inputContactNoChangeHandler} />
                                <FormHelperText className={this.state.contactNoRequired} ><span className='red'>required</span></FormHelperText>
                            </FormControl>
                            <br /><br />


                            <Button variant="contained" color="primary" onClick={this.registerClickHandler}>Register</Button>
                        </TabContainer>}

                </Modal>
            </div>

        )
    }
}

export default Header;