import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Col from 'reactstrap/lib/Col';
import { NavMenu } from './NavMenu';
import { SideBar } from './SideBar';
import 'bootstrap/dist/css/bootstrap.css'
import '../custom.css'

const Layout = ({children}) => {

    return (
        <div>
        <NavMenu />
        <Container fluid>
          <Row className="side-bar-container">
            <Col md={1}>
              <SideBar />
            </Col>
            <Col md={11}>
              {children}
            </Col>
          </Row>
        </Container>
      </div>

    )
}

export default Layout