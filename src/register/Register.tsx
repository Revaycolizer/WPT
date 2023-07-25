
"use client"


import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Label } from 'src/components/ui/label';
import { createUser } from "../../src/libs/zustand";
import axios from "axios";
import toast from "react-hot-toast";
import React from "react";
import { Link, useNavigate } from "react-router-dom";



export default function Register(){
 const [Email,setEmail]=createUser((state)=>[state.Email,state.setEmail])
 const [FName,setFName]=createUser((state)=>[state.FName,state.setFname])
 const [LName,setLName] =createUser((state)=>[state.LName,state.setLName])
 const [UserName,setUserName] =createUser((state)=>[state.UserName,state.setUserName])
 const [Password,setPassword] =createUser((state)=>[state.Password,state.setPassword])
 const [PNo,setPNo] =createUser((state)=>[state.PNo,state.setPNo])
 const [Country,setCountry] =createUser((state)=>[state.Country,state.setCountry])
const GroupID = "1"
const RoleID = "1"
const UserAttempFailed = "0"
const CreatedBy = "1"
const Status = "1"
const UpdatedBy ="1"

const navigate = useNavigate()

  const formData= {Email,FName,LName,PNo,Country,Status,UserName,Password,GroupID,RoleID,UserAttempFailed,CreatedBy,UpdatedBy}
 const handleSubmit=async(e:React.FormEvent)=>{
    e.preventDefault()
    const load = toast.loading('Registering on progress')
    try{
        const data = await axios.post('/users/create', formData)
        
    if(data){
      setEmail('')
      setCountry('')
      setLName('')
      setPNo('')
      setFName('')
      setUserName('')
      setPassword('')
      toast.dismiss(load)
        toast.success(data.data.message)
        navigate('/')
    }
}catch(error){
    toast.error('error')
    toast.dismiss(load)
}
    
 }
 

    return(
        <main className='py-8 md:py-40 lg:py-10 flex justify-center items-center'>
     
           
         
        <form className=' grid grid-cols-1 gap-3 py-10' onSubmit={handleSubmit}>
      
          <Label>Email:</Label>
          <Input type="email" placeholder="Email" name="Email" value={Email} required
           onChange={(e)=>setEmail(e.target.value)}
          />

          <Label>Firstname</Label>
          <Input type="text" placeholder="First name" name="FName" value={FName} required
           onChange={(e)=>setFName(e.target.value)}
          />
          
          <Label>Lastname</Label>
          <Input type="text" placeholder="Last name" name="LName" value={LName} required
           onChange={(e)=>setLName(e.target.value)}
          />

         <Label>Phone Number</Label>
          <Input type="number" placeholder="Phone Number" name="PNo" value={PNo} required
           onChange={(e)=>setPNo(e.target.value)}
          />

         <Label>UserName</Label>
          <Input type="text" placeholder="Username" name="UserName" value={UserName} required
           onChange={(e)=>setUserName(e.target.value)}
          />

         <Label>Country</Label>
          <Input type="text" placeholder="Country" name="Country" value={Country} required
           onChange={(e)=>setCountry(e.target.value)}
          />
        
          
          <Label>Password:</Label>
          <Input type="password" name="Password" placeholder='Password' value={Password} required 
            onChange={(e)=>setPassword(e.target.value)}
          ></Input>
          {/* <Label>Retype Password:</Label>
          <Input type="password" placeholder='Confirm password' name="confirmpassword" value={confirmpassword} required
            onChange={(e)=>setConfirmPassword(e.target.value)}
          ></Input> */}
          <Button variant="default" type="submit" >Register</Button>
          <aside className='flex flex-row text-center justify-center items-center gap-3'>
            <aside className="flex flex-row justify-betweeen gap-2">
            <p className='text-bra'>Already having an Account?</p>
            <Link className='cursor-pointer font-bold text-blue-900' to='/'>Login</Link>
            </aside>
          </aside>
         
          
        </form>
      </main>
    )
}