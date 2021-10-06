import React, { Component } from "react";
import Layout from "../components/Layout";
import LoginView from "../components/LoginView"
import InnerPageTemplate from "../components/utils/InnerPageTemplate";
import { Card, CardBody, CardHeader } from "reactstrap";
import UnpaidBills from "../components/bills/UnpaidBills";
import PaidBills from "../components/bills/PaidBills";
import { Link } from "gatsby";
import { navigate } from "gatsby-link";

const Messages = (props) => {
    let activities = [
        { "subject": "Expecting you", "message": "We are expecting you tommorow", "date": "2021/10/03", "sender": "Dr. Philips"},
        {  "subject": "Result is out", "message": "Your results are out. Pls come and collect them", "date": "2021/10/05", "sender": "Ms. Jane"},
    ]
    return (
        <Layout>
            <InnerPageTemplate PageTitle="Messages">
                <div>
                    <button className="btn btn-primary" onClick={() => navigate('/messages/newmessage')}>New Message</button>

                    <br /><br />
                    

                        <div>
                            {activities.map(activity =>
                            <Card className="section" style={{width: '90%', marginBottom: '15px'}}>
                                <CardHeader><h5>{activity.sender} - {activity.date}</h5></CardHeader>
                                <CardBody>
                                <b>{activity.subject}</b>
                                <div>{activity.message}</div>
                                <div>
                                    <Link to="/messages/newmessage">Reply</Link>
                                </div>
                                </CardBody>
                            </Card>
                            )}
                        </div>
                            
                </div>
            </InnerPageTemplate>
        </Layout>
    )
}


export default Messages