import axi from 'axios'
import{API_HOST} from './config'


const sendDataLogin = async(data)=>
{
    try{  
           
                   console.log('login_axios')
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

export {sendDataLogin,handleLogout}
 