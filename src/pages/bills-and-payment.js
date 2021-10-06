import React, { Component } from "react";
import Layout from "../components/Layout";
import LoginView from "../components/LoginView"
import InnerPageTemplate from "../components/utils/InnerPageTemplate";
import { Card, CardBody, CardHeader } from "reactstrap";
import UnpaidBills from "../components/bills/UnpaidBills";
import PaidBills from "../components/bills/PaidBills";

const Bills = (props) => {
    return (
        <Layout>
            <InnerPageTemplate PageTitle="Bills and Payments">
                <div>
                    <table className="table">
                    <tbody>
                        <tr>
                        <td><b>Total Incurred</b>: N57000</td>
                        <td><b>Total Paid</b>: N32000</td>
                        <td><b>Balance</b>: N25000</td>
                        </tr>
                    </tbody>
                    </table>
                    
                    <br />

                    <UnpaidBills />

                </div>
            </InnerPageTemplate>
        </Layout>
    )
}


export default Bills