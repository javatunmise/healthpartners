import React from "react";
import Layout from "../components/Layout";
import InnerPageTemplate from "../components/utils/InnerPageTemplate";
import PharmacyHistory from '../components/medications/PharmacyHistory'
import MedicationHistory from '../components/medications/MedicationHistory'

const Medications = (props) => {
    return (
        <Layout>
            <InnerPageTemplate PageTitle="Medications">
                <div>
                <PharmacyHistory />

                <br />
                <MedicationHistory />     
                </div>
            </InnerPageTemplate>
        </Layout>
    )
}
export default Medications