import React from "react";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import CardHeader from "reactstrap/lib/CardHeader";
import CardBody from "reactstrap/lib/CardBody";
import { Component } from "react";
import Card from "reactstrap/lib/Card";


class MedicationHistory extends Component
{
    constructor(props) {
        super(props)
        this.state = { records: [], loading: true}
    }

    componentDidMount() {
        this.loadData();  
    }

    async loadData() {
        const response = await fetch('./static/data/medicationhistories.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          });
        const data = await response.json();
        console.log(data)
        this.setState({ records: data, loading: false });  
    }

    render() {
        const  { records } = this.state;
        return(
        <Card className="section" style={{width: '90%'}}>
            <CardHeader><h5>Medication History</h5></CardHeader>
            <CardBody>
                <Loading active={this.props.loading} />

                <table className="table table-bordered">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Dosage</th>
                    <th>Status</th>
                    </tr>              
                </thead>
                <tbody>
                    {records.map((item, index) => 
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.dosage}</td>
                        <td>{item.status} {showStatus(item.status)}</td>
                    </tr>
                    )}              
                </tbody>
                </table>
            </CardBody>
        </Card>
        )
    }
}

let showStatus = (text) => {
    return text === "active" ? "" : "";
}

let Loading = props => {
    
    return props.active ? <div><i>Loading...</i></div> : <></>
}


export default MedicationHistory