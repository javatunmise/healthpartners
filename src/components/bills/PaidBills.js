
import React, { Component } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

class PaidBills extends Component {
    constructor(props) {
        super(props)
        this.state = { records: [], loading: true}
    }

    componentDidMount() {
        this.loadData();  
    }

    async loadData() {
        const response = await fetch('./data/bills.json', {
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
            <CardHeader><h5>Paid Bills</h5></CardHeader>
            <CardBody>
                <Loading active={this.props.loading} />

                <table className="table table-bordered">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Paid By</th>
                    </tr>              
                </thead>
                <tbody>
                    {records.filter(item => item.status === "Paid").map((item, index) => 
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>N{item.amount}</td>
                        <td>{item.status} {showStatus(item.status)}</td>
                        <td>{item.paidBy}</td>
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

export default PaidBills