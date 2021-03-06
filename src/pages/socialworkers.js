import React, { Component } from "react";
import Layout from "../components/Layout";
import LoginView from "../components/LoginView"
import InnerPageTemplate from "../components/utils/InnerPageTemplate";
import { Card, CardBody, CardHeader } from "reactstrap";
import UnpaidBills from "../components/bills/UnpaidBills";
import PaidBills from "../components/bills/PaidBills";

const SocialWorkers = (props) => {
    return (
        <Layout>
            <InnerPageTemplate PageTitle="Social Workers">

            <Card className="section">
            <CardHeader><h5>List of Sponsors</h5></CardHeader>
            <CardBody>
                
            <table className="table table-bordered" style={{width: '91%'}}>
                <thead>
                    <tr>
                    <th>Sponsor</th>
                    <th>Amount</th>
                    </tr>              
                </thead>
                <tbody>
                    <tr>
                        <td>Women Advocator Foundation</td>
                        <td>N2500</td>
                    </tr>
                    <tr>
                        <td>African Vulnerable Welfare Emphatic And Egalitarian Society of Nigeria</td>
                        <td>N4500</td>
                    </tr>
                    <tr>
                        <td>Women Advocator Foundation</td>
                        <td>N3000</td>
                    </tr>
                </tbody>
                </table>
            </CardBody>
            </Card>
                
            </InnerPageTemplate>
        </Layout>
    )
}


export default SocialWorkers