import * as React from "react"
import { Row } from 'reactstrap'
import Layout from '../components/Layout'
import InnerPageTemplate from './utils/InnerPageTemplate'
import DashboardComponent, 
      { 
        RecentVitals, UpcomingAppointments, DashboardSummaryBox, Messages,
        CareTeamMembers,
        SocialWorkersActivities
      } from './dashboard/DashboardComponents'

// markup
const IndexPage = () => {
    let user = { name: "Toyin Olubanji"}
    return (
      <Layout>
        <InnerPageTemplate PageTitle="Dashboard">
          <h4>Welcome, {user.name}</h4>
          <br />

          <Row>
            <DashboardSummaryBox 
              title="Available Test Results" 
              value="2/5"
              link="#" />
            <DashboardSummaryBox 
              title="Dependants" 
              value="3"
              link="#" />
            <DashboardSummaryBox 
                title="Bills" 
                value="N57,000"
                link="#" />
          </Row>
          
          <Row>
            <DashboardComponent Title="Scheduled Appointments" ColumnWidth="col-md-4">
              <UpcomingAppointments />
            </DashboardComponent>

            <DashboardComponent Title="Recent Vitals" ColumnWidth="col-md-4">
              <RecentVitals />
            </DashboardComponent>

            <DashboardComponent Title="Your Care Team" ColumnWidth="col-md-3">
              <CareTeamMembers />
            </DashboardComponent>
          </Row>

          <Row>
            <DashboardComponent Title="Messages" ColumnWidth="col-md-5">
              <Messages />
            </DashboardComponent>

            <DashboardComponent Title="Social Worker Accomplishments" ColumnWidth="col-md-6">
              <SocialWorkersActivities />
            </DashboardComponent>

          </Row>
      </InnerPageTemplate>
       </Layout>
  )
}

export default IndexPage
