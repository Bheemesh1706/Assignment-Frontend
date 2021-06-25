import React, {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {yupResolver} from "@hookform/resolvers/yup";
import { meetingSchema } from '../Login/Schema';
import {useForm} from "react-hook-form";
import { setMeeting , updateMeeting} from '../Login/Backend';


export function AddMeeting ({meetingProp})
{
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const  {register,handleSubmit,reset,formState: { errors } } = useForm({
    resolver: yupResolver(meetingSchema)
})

const handleMeeting = (e) =>{
    console.log('inside')
    console.log(e)
    
    {meetingProp ? updateMeeting(e).then((e)=>{if(e==='Meeting Updated'){ window.location.reload();}}) : setMeeting(e).then((e)=>{if(e==='Meeting Created Sucessfully'){ window.location.reload();}})}
    
}

useEffect(()=>{console.log('reset')
    reset()},[])

  return (<React.Fragment>
      {meetingProp ? <Button variant="primary" onClick={handleShow}>Edit</Button> :<Button variant="primary" className="mt-5" onClick={handleShow}>Add Meeting</Button>}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Add Meeting</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit={handleSubmit(handleMeeting)}>
                <input className= "modalInput" type="text" id="uname" placeholder="Title" name='Title' defaultValue= {meetingProp && meetingProp.Title } {...register('Title')}/>
                <textarea rows = "5" cols = "50" name = "description" placeholder ="Description" defaultValue={meetingProp && meetingProp.Description } {...register('Description')}> 
                </textarea>
                <input className= "modalInput" type="text" id="start" placeholder="Start Time" name='Start' defaultValue={meetingProp && meetingProp.Start } {...register('Start')} />
                <input className= "modalInput" type="text" id="end" placeholder="End Time" name='End' defaultValue={meetingProp && meetingProp.End } {...register('End')}/>
                {meetingProp && <input type="hidden" id="id" name="id" defaultValue={meetingProp.id} {...register('id')} />}
                <Button className="mt-1" variant="primary" type='submit' >Submit</Button>
            </form>  
            
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    </React.Fragment>
  );
}