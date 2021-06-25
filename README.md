# DOCUMENTATION
## [App Live Link](https://ecstatic-babbage-7ffd36.netlify.app/)
## API ENDPOINTS 

Backend endpoint
https://intern1706.herokuapp.com

Endpoint to access users data
https://intern1706.herokuapp.com/users

*Request type: GET*

Endpoint to access meetings data
https://intern1706.herokuapp.com/meetings

*Request type: GET*

Endpoint to add meetings data
https://intern1706.herokuapp.com/meetings

*Request type: POST*

Endpoint to edit
https://intern1706.herokuapp.com/meetings/id

*Request type: PUT*

Endpoint to delete 
https://intern1706.herokuapp.com/meetings/id

*Request type: DELETE*

## DATABASE SCHEMA
Function to setup the database schema and validation on client side using yup library for meeting
```
const meetingSchema = yup.object().shape(
    {
        Title: yup.string().required(),
        Description: yup.string().required(),
        Start: yup.string().required(),
        End: yup.string().required(),
        id: yup.string()
    }
)
```
Function to setup the database schema and validation on client side using yup library for login
```
const loginSchema =yup.object().shape({
    Username: yup.string().min(8).max(15).matches(/^[a-zA-Z0-9_@]+$/,'Valid Inputs are charecter number and ("_","@")').required(),
    Password: yup.string().min(6).max(15).required()
})
```
## External libraries
- react-bootstrap
  - Library used for styling  `npm i react-bootstrap`
- react-hook-form
  - Library used for form manipulation and validation `npm i react-hook-form`  
- react-router-dom
  - Library used for routing `npm i react-router-dom`
- axios
  - Library used for accessing and manipulation of backend data `npm i axios`
- yup
  - Library used for schema and validation for react-hook-form `npm i yup` 
