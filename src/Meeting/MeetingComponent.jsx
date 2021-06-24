import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AddMeeting } from './AddMeeting'


export function Meeting ()
{  var title = "Title"
    return(
        <div className = "calander">
          

            <div className="meeting">
                <label className= "name">Meeting</label>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0" className="toggle">
                                  {title}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Card.Text>Hello! I'm the body</Card.Text>
                                <AddMeeting></AddMeeting>
                                <Button variant="danger" size="sm">Delete</Button>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                {/* <Button className="Add"  variant="info">Add Meeting</Button> */}
                <AddMeeting></AddMeeting>
            </div>
        </div>
    )
}