import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TouchRipple from "@material-ui/core/ButtonBase/TouchRipple";

class Trips extends Component {
    state = {
        trips: [],
        city: "",
        nightsStayed: "",
        amountSpent: "",
        currency: ""
    };

    componentDidMount() {
        this.loadTrips();
    }

    loadTrips = () => {
        API.getTrips()
            .then(res =>
                this.setState({ trips: res.data, city: "", nightsStayed: "", amountSpent: "", currency: "" }))
            .catch(err => console.log(err))
    }

    render() {
        return (

            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>City</TableCell>
                            <TableCell numeric>Nights Stayed</TableCell>
                            <TableCell numeric>Amount Spent</TableCell>
                            <TableCell>Currency</TableCell>
                            <TableCell numeric>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.trips.map(trip => {
                            return (
                                <TableRow key={trip._id}>

                                    <TableCell component="th" scope="row">
                                        {trip.city}
                                    </TableCell>
                                    <TableCell numeric>{trip.nightsStayed}</TableCell>
                                    <TableCell numeric>{trip.amountSpent}</TableCell>
                                    <TableCell numeric>{trip.currency}</TableCell>
                                    <TableCell numeric>{trip.date}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>


            // <div>
            //     <div>
            //         {this.state.trips.map(trip => (

            //             <div key={trip._id}>
            //                 <div>City:
            //                 <Link to={"/trips/" + trip._id}>
            //                         <strong>
            //                             {trip.city}
            //                         </strong>
            //                     </Link>
            //                 </div>
            //                 <div>Nights Stayed: {trip.nightsStayed}
            //                 </div>
            //                 <div>Amount Spent: {trip.amountSpent}
            //                 </div>
            //                 <div>Currency Used: {trip.currency}
            //                 </div>
            //             </div>
            //         ))}
            //     </div>
            // </div>
        )
    }
}

export default Trips;