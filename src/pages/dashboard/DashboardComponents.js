import React, { Component } from 'react'
import { Link } from 'gatsby';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import { DateTimeUtil } from '../../components/utils/datetime'

export default class DashboardComponent extends Component
{
  constructor(propes) {
    super(propes)
  }

  render() {
    return (
      <Card className={(this.props.ColumnWidth || 'col-md-4') + ' dashboard-component'}>
        <CardBody>
          <h5>{this.props.Title}</h5>
          <br />
          {this.props.children}
        </CardBody>
      </Card>
    )
  }
}

let appointments = [
    {
        "name": "Aerobics Workout",
        "date": "2021-05-13 7:00 AM"
    },
    {
        "name": "Urine Test Check",
        "date": "2021-05-13 2:00 PM"
    },
   {
        "name": "Dentist Checkup",
        "date": "2021-05-14 9:00 AM",
        "consultant": "Dr. Alex Blade"
    },
    {
        "name": "Ante-natal care",
        "date": "2021-05-18 1:00 PM"
    },
    {
        "name": "Baby Scan Recheck",
        "date": "2021-05-22 4:00 PM"
    }
]



let Messages = props => {
    return <div>
        <div className="alert alert-info">
            <b>{new Date().toDateString()}</b>
            <div>We are expecting you soon...</div>
        </div>
        <div className="alert alert-info">
            <b>{new Date().toDateString()}</b>
            <div>Thanks, we received a successful payment on your account...</div>
        </div>
    </div>
}

let SocialWorkersActivities = props => {
    let activities = [
        'Received a cash assistance of one hundred thousand Naira from  Association from Reproductive and Family Health NGO to assist in bill payment',
        'Received fifty thousand naira cash for you from Actress Toyin Abraham'
    ]

    return (
    <div>
        {activities.map(activity =>
         <div className="alert alert-secondary">
            <b></b>
            <div>{activity}</div>
        </div>
        )}
    </div>
    )
}


let UpcomingAppointments = props => {
    return(
        <>
          <table className="table table-bordered">
          <thead>
              <tr>
              <th>Details</th>
              <th>Date</th>
              <th>Time</th>
              </tr>              
          </thead>
          <tbody>
            {appointments.map(_ => 
            <tr>
            <td>{_.name}</td>
            <td>{DateTimeUtil.toDate(_.date)}</td>
            <td>{DateTimeUtil.toTime(_.date)}</td>
            </tr>              
            )}
          </tbody>
          </table>

          <div>
              <button className="btn btn-info">View More &gt;&gt;</button>
          </div>
        </>
    )
}

let RecentVitals = props => {

    let vitals = [
        { name: "Pulse", value: "87", dateTaken: "01-MAY-2021" },
        { name: "Oxygen", value: "95", dateTaken: "01-MAY-2021" },
        { name: "Temperature", value: "97.5", dateTaken: "01-MAY-2021" },
        { name: "Respiration", value: "16", dateTaken: "01-MAY-2021" },
        { name: "Blood Pressure", value: "115/65", dateTaken: "14-MAY-2021" },
        { name: "Weight", value: "67.5", dateTaken: "15-MAY-2021" },
        { name: "Height", value: "5.5", dateTaken: "15-MAY-2021" }
    ]

    return(
          <table className="table table-bordered">
          <thead>
              <tr>
              <th>Vitals</th>
              <th>Outcome</th>
              <th>Date Taken</th>
              </tr>              
          </thead>
          <tbody>
            {vitals.map(vital => 
                <tr>
                <td>{vital.name}</td>
                <td className="text-right pr-5">{vital.value}</td>
                <td>{DateTimeUtil.toDate(vital.dateTaken)}</td>
                </tr>              
            )}
          </tbody>
          </table>
    )
}

let DashboardSummaryBox = props => {
    return  <div class="col-xxl-3 col-lg-3 col-md-3">
    <div class="card bg-info text-white mb-4">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <div class="mr-3">
            <div class="text-white-75 medium">{props.title}</div>
            <div style={{fontSize: '24px', fontWeight: 'bold'}}>{props.value}</div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar feather-xl text-white-50"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        </div>
      </div>
      <div class="card-footer d-flex align-items-center justify-content-between">
        <a class="small text-white stretched-link" href={props.link}>View Report</a>
        <div class="small text-white">&gt;</div>
      </div>
    </div>
  </div>

}

let CareTeamMembers = props => {
    let members = [
        { name: "Dr. Olamide Ayofemi", title: "Physician OB/GYN", phoneNumber: "317 234 3454" },
        { name: "Rita Olawole", title: "Social Worker", phoneNumber: "317 234 5347"},
        { name: "Mrs. Felicia Ayomide", title: "Physiotherapist", phoneNumber: "317 234 7985"},
        { name: "Toyin Adeola", title: "Nurse Counselor", phoneNumber: "317 234 7977"}
    ]

    let images = [
        '../images/2.jpg','../images/1.jpg','../images/5.jpg','../images/4.jpg'
    ]

    return(
        <ul class="list-unstyled">
            {members.map((_, index) => 
            <li class="media mb-3">
            <img class="mr-3" style={{width: '64px', height: '64px', borderRadius: '50%'}} 
                 src={images[index]} alt="" />
            <div class="media-body">
            <h5 class="mt-0 mb-1">{_.name}</h5>
            {_.title}<br />
            {_.phoneNumber}
            </div>
            </li>
            )}
        </ul>        
  )
}



export { 
    UpcomingAppointments, 
    RecentVitals, 
    DashboardSummaryBox,
    Messages,
    CareTeamMembers,
    SocialWorkersActivities
 }