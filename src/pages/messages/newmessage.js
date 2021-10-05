import React, { Component } from "react";
import Layout from "../../components/Layout";
import InnerPageTemplate from "../utils/InnerPageTemplate";
import { Card, CardBody, CardHeader } from "reactstrap";
import { Link } from "gatsby";
import { navigate } from "gatsby-link";


const tryLogin = (event) => {
    event.preventDefault();
    
    navigate("/messages")
  }

const NewMessage = (props) => {
  
    return (
        <Layout>
            <InnerPageTemplate PageTitle="Messages > New Message">
                <div>
                    <table className="table table-bordered" style={{width: '500px'}}>
                        <tbody>
                            <tr>
                                <td style={{width: '20%'}}>To:</td>
                                <td>
                                    <select className="form-control">
                                        <option>Dr. Philips</option>
                                        <option>Ms. Jane</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Subject:</td><td><input className="form-control" /></td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                <textarea rows="10" className="form-control"></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>



                    <button className="btn btn-primary" onClick={tryLogin}>Send</button>&nbsp;
                    <button className="btn btn-secondary" onClick={tryLogin}>Cancel</button>
                </div>
            </InnerPageTemplate>
        </Layout>
    )
}


export default NewMessage