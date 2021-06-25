import React , {useEffect,useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AddMeeting } from './AddMeeting'
import { getMeeting , deleteMeeting } from '../Login/Backend'


export function Meeting ()
{  


    const [meetings,setMeetings] = useState([])

    useEffect(()=>
    {  
        getMeeting().then((e)=>{
            console.log('useEffect')
            console.log(e)
            setMeetings(e)
        })
    },[])

    const handleDeletion = (id) => {

        deleteMeeting(id).then((e)=>
        {
            if(e==='Meeting Deleted')
            { window.location.reload();}
        })
    }
  

    return(
        <div className = "calander">
          

            <div className="meeting">
                <label className= "name">Meeting</label>
                { meetings.map((meet,index) =>(
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey={meet.id+1} className="toggle">
                                  {meet.Title}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={meet.id+1}>
                            <Card.Body>
                                <Card.Text>{meet.Description}</Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">{meet.Start}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">{meet.End}</Card.Subtitle>
                                <AddMeeting meetingProp={meet}></AddMeeting>
                                <Button variant="danger" size="sm" onClick= {()=>{handleDeletion(meet.id)}}  >Delete</Button>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>))
                }
                <AddMeeting></AddMeeting>
            </div>
        </div>
    )
}