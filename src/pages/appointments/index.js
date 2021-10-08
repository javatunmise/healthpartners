import React, { Component } from "react";
import Card from "reactstrap/lib/Card";
import div from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";
import CardBody from "reactstrap/lib/CardBody";
import Dropdown from "reactstrap/lib/Dropdown";
import DropdownItem from "reactstrap/lib/DropdownItem";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import InnerPageTemplate from "../../components/utils/InnerPageTemplate";
import Table from "reactstrap/lib/Table";
import Layout from "../../components/Layout";

export default class Appointments extends Component
{
    render() {
        return (
            <Layout>
                <InnerPageTemplate PageTitle="Appointments">
                    <AppointmentList />
                </InnerPageTemplate>
            </Layout>
        )
    }
}

class AppointmentFilter extends Component
{
    render() {
        return(
            <div>

                <Form>
                    <Row>
                        <Col md={1}>
                            <h5>Filter:</h5>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                {/* <Label htmlFor="status">Status</Label> */}
                                <select className="form-control">
                                    <option>Upcoming</option>
                                    <option>All</option>
                                </select>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

class AppointmentList extends Component
{
    constructor(props) {
        super(props)
        this.state = { appointments: [], loading: true}
    }

    componentDidMount() {
        this.loadAppointments();  
    }

    async loadAppointments() {
        const response = await fetch('../../data/appointments.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          });
        const data = await response.json();
        this.setState({ appointments: data, loading: false });  
    }

    render() {
        const  { appointments } = this.state;
        return(
        <Card className="section">
            <CardHeader><h5>List of Appointments</h5></CardHeader>
            <CardBody>
                <AppointmentFilter />
                <br />

                <Loading active={this.props.loading} />

                <table className="table table-bordered">
                <thead>
                    <tr>
                    <th>Details</th>
                    <th>Date</th>
                    <th>Consultant</th>
                    </tr>              
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => 
                    <tr key={index}>
                        <td>{appointment.name}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.consultant}</td>
                    </tr>
                    )}              
                </tbody>
                </table>
            </CardBody>
        </Card>
        )
    }
}

let Loading = props => {
    
    return props.active ? <div><i>Loading...</i></div> : <></>
}