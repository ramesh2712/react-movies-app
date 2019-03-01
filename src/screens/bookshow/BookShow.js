import React, { Component } from 'react';
import Header from '../../common/header/Header';
import Typography from '@material-ui/core/Typography';
import './BookShow.css'
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';
import FormHelpertext from '@material-ui/core/FormHelperText';
import { Link } from 'react-router-dom';

class BookShow extends Component {

    constructor() {
        super()
        this.state = {
            location: "",
            language: "",
            showdate: "",
            showtime: "",
            tickets: 0,
            unitPrice: 500,
            availableTickets: 20,
            locationRequired: 'dispNone',
            languageRequired: 'dispNone',
            showdateRequired: 'dispNone',
            showtimeRequired: 'dispNone',
            ticketsRequired: 'dispNone'
        }
    }

    locationChangeHandler = (event) => {
        this.setState({ location: event.target.value })
    }
    languageChangeHandler = (event) => {
        this.setState({ language: event.target.value })
    }
    showDateChangeHandler = event => {
        this.setState({ showdate: event.target.value })
    }
    showTimeChangeHandler = event => {
        this.setState({ showtime: event.target.value })
    }
    ticketsChangeHandler = event => {
        this.setState({ tickets: event.target.value })
    }

    bookShowButtonHandler = () => {
        this.state.location === "" ? this.setState({ locationRequired: "dispBlock" }) : this.setState({ locationRequired: "dispNone" });
        this.state.language === "" ? this.setState({ languageRequired: "dispBlock" }) : this.setState({ languageRequired: "dispNone" });
        this.state.showdate === "" ? this.setState({ showdateRequired: "dispBlock" }) : this.setState({ showdateRequired: "dispNone" });
        this.state.showtime === "" ? this.setState({ showtimeRequired: "dispBlock" }) : this.setState({ showtimeRequired: "dispNone" });
        this.state.tickets === 0 ? this.setState({ ticketsRequired: "dispBlock" }) : this.setState({ ticketsRequired: "dispNone" });

        if ((this.state.location === "") || (this.state.language === "") || (this.state.showTime === "") || (this.state.showDate === "") || (this.state.tickets === 0)) { return; }

        this.props.history.push({
            pathname: '/confirm/' + this.props.match.params.id,
            bookingSummary: this.state
        })
    }
    render() {
        return (
            <div>
                <Header />
                <div className="bookShow">
                    <Typography className="back" >
                        <Link to={"/movie/" + this.props.match.params.id}>&#60; Back to Movie Details</Link>
                    </Typography>
                    <Card className="cardStyle">
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                BOOK SHOW
                            </Typography><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="location"> Choose Location: </InputLabel>
                                <Select
                                    value={this.state.location}
                                    onChange={this.locationChangeHandler}>
                                    {location.map(loc => (
                                        <MenuItem key={'loc' + loc.id} value={loc.location}>
                                            {loc.location}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelpertext className={this.state.locationRequired}>
                                    <span className="red">required</span> </FormHelpertext>
                            </FormControl> <br /> <br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="language"> Choose Language: </InputLabel>
                                <Select
                                    value={this.state.language}
                                    onChange={this.languageChangeHandler}>
                                    {language.map(lan => (
                                        <MenuItem key={'lan' + lan.id} value={lan.language}>
                                            {lan.language}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelpertext className={this.state.languageRequired}>
                                    <span className="red">required</span> </FormHelpertext>
                            </FormControl> <br /> <br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="showdate"> Choose Show Date: </InputLabel>
                                <Select
                                    value={this.state.showdate}
                                    onChange={this.showDateChangeHandler}>
                                    {showDate.map(sd => (
                                        <MenuItem key={'sd' + sd.id} value={sd.showDate}>
                                            {sd.showDate}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelpertext className={this.state.showdateRequired}>
                                    <span className="red">required</span> </FormHelpertext>
                            </FormControl> <br /> <br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="showtime"> Choose Show Time: </InputLabel>
                                <Select
                                    value={this.state.showtime}
                                    onChange={this.showTimeChangeHandler}>
                                    {showTime.map(st => (
                                        <MenuItem key={'st' + st.id} value={st.showTime}>
                                            {st.showTime}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelpertext className={this.state.showtimeRequired}>
                                    <span className="red">required</span> </FormHelpertext>
                            </FormControl> <br /> <br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="tickets"> Tickets: ( {this.state.availableTickets} available) </InputLabel>
                                <Input id="tickets"
                                    value={this.state.tickets !== 0 ? this.state.tickets : ""}
                                    onChange={this.ticketsChangeHandler} />
                                <FormHelpertext className={this.state.ticketsRequired}>
                                    <span className="red">required</span> </FormHelpertext>
                            </FormControl> <br /><br />
                            <Typography>
                                Unit Price: Rs. {this.state.unitPrice}
                            </Typography> <br /><br />
                            <Typography>
                                Total Price Rs. {this.state.unitPrice * this.state.tickets}
                            </Typography><br /><br />
                            <Button variant="contained"
                                onClick={this.bookShowButtonHandler}
                                color="primary"> BOOK SHOW </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default BookShow;