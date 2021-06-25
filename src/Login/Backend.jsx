import axi from 'axios'
import{API_HOST} from './config'


const sendDataLogin = async(data)=>
{
    try{  
           
                   console.log('login_axios')
                   console.log(data.Password)
                  const response = await axi.post(`${API_HOST}/login`, {
                              username: data.Username,
                              password: data.Password,
                          })
                 
                return response.data.success_message
              
        }
              
          catch(error)
          {
              console.log(error.response.data.error_message) 
              document.getElementById('error').innerText = error.response.data.error_message
          } 
}

const handleLogout = async(setRedirect) =>
{
    const response = await axi.get(`${API_HOST}/logout`)
    localStorage.clear();
    setRedirect('/login')
    window.location.reload();
    
}

const getMeeting = async() =>
{
    const response =  await axi.get(`${API_HOST}/meetings`)
    return response.data
}

const setMeeting = async(data) =>
{   
    try
    {
        const response = await axi.post(`${API_HOST}/meetings`, {
            Title: data.Title,
            Description: data.Description,
            Start: data.Start,
            End: data.End
        })

        return response.data.success_message
    }

    catch(error)
    {
        console.log(error.response.data.error_message)
    }

}

const updateMeeting = async(data) =>
{   
    try
    {   console.log('backend')
        console.log(data)
        const response = await axi.put(`${API_HOST}/meetings/${data.id}`, {
            Title: data.Title,
            Description: data.Description,
            Start: data.Start,
            End: data.End
        })

        return response.data.success_message
    }

    catch(error)
    {
        console.log(error.response.data.error_message)
    }

}

const deleteMeeting = async(data) =>
{
    try
    {
        
    }

    catch (error)
    {
        console.log(error.response.data.error_message)  
    }
}



export {sendDataLogin,handleLogout,getMeeting,setMeeting,updateMeeting}
 