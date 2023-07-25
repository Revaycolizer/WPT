

import {toast} from 'react-hot-toast'
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Label } from 'src/components/ui/label';
import { createUser } from "../../src/libs/zustand";
import axios from 'axios';
import {  Link, useNavigate, } from 'react-router-dom';



export default function Login() {
 
  const navigate = useNavigate()
  // const history = useHistory();
 
  const [UserName,setUserName] =createUser((state)=>[state.UserName,state.setUserName])
  const [Password,setPassword] =createUser((state)=>[state.Password,state.setPassword])
  const [user,setUser] = createUser((state)=>[state.user,state.setUser])
  const [isLoading,setisLoading] = createUser((state)=>[state.isLoading,state.setisLoading])
  

  const formData = {UserName,Password}
  const handleSubmit=async(e:React.FormEvent)=>{
    e.preventDefault()
    const load = toast.loading('Logging in')
    
    try{
        const data = await axios.post('/users/logins', formData)
        
    if(data){
        setUserName('')
        setPassword('')
        setUser(data.data.message[0])
        setisLoading(true)
        toast.dismiss(load)
        toast.success(`${UserName} logged in successfully`)
        navigate('/home',{ state: { user: data.data.message[0] } })
    }
}catch(error){
    toast.error('error')
    toast.dismiss(load)
}
    
 }
  

  return (
   
    
    <main className='pt-12 md:pt-56 lg:py-40 flex justify-center items-center'>
    
      <form className=' grid grid-cols-1 gap-3 py-10' onSubmit={handleSubmit}>
      <Label>UserName</Label>
          <Input type="text" placeholder="Username" name="UserName" value={UserName} required
           onChange={(e)=>setUserName(e.target.value)}
          />
        
           <Label>Password:</Label>
          <Input type="password" name="Password" placeholder='Password' value={Password} required 
            onChange={(e)=>setPassword(e.target.value)}
          ></Input>
        <Button variant="default" type="submit" >Login</Button>
        <div className='flex flex-row text-center justify-center items-center'>
          <Link className='cursor-pointer' to='/register'>Create an Account</Link>
          
        </div> 
        
      </form>
    </main>
   
  )
}
