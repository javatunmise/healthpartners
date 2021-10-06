import React, { Component } from "react";
import Layout from "../components/Layout";
import LoginView from "../components/LoginView"
import InnerPageTemplate from "../components/utils/InnerPageTemplate";
import { Card, CardBody, CardHeader } from "reactstrap";
import UnpaidBills from "../components/bills/UnpaidBills";
import PaidBills from "../components/bills/PaidBills";

const Dependents = (props) => {
    return (
        <Layout>
            <InnerPageTemplate PageTitle="Dependents">
                <div>
                    No dependents found
                </div>
            </InnerPageTemplate>
        </Layout>
    )
}


export default Dependents