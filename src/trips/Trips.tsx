



import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import Display from "src/trips/Display";
import { createUser } from "../../src/libs/zustand";
import axios from "axios";
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from 'src/components/ui/dialog'
import Protected from "../routes/Protected";



export default function Trips(){
 const [WptSi,setWptSi]=createUser((state)=>[state.WptSi,state.setWptSi])
 const [WptSo,setWptSo]=createUser((state)=>[state.WptSo,state.setWptSo])
 const [WptVi,setWptVi] =createUser((state)=>[state.WptVi,state.setWptVi])
 const [WptTi,setWptTi] =createUser((state)=>[state.WptTi,state.setWptTi])
 const [WptSoi,setWptSoi] =createUser((state)=>[state.WptSoi,state.setWptSoi])
 const [WptDi,setWptDi] =createUser((state)=>[state.WptDi,state.setWptDi])
 const [WptOm,setWptOm] =createUser((state)=>[state.WptOm,state.setWptOm])
 const [WptIs,setWptIs] =createUser((state)=>[state.WptIs,state.setWptIs])
 const [WptOs,setWptOs] =createUser((state)=>[state.WptOs,state.setWptOs])
 const [WptDft,setWptDft] =createUser((state)=>[state.WptDft,state.setWptDft])
 const [WptDts,setWptDts] =createUser((state)=>[state.WptDts,state.setWptDts])
 const [WptTed,setWptTed] =createUser((state)=>[state.WptTed,state.setWptTed])
 const [WptPnum,setWptPnum] =createUser((state)=>[state.WptPnum,state.setWptPnum]) 
 const [trips,setTrips] = createUser((state)=>[state.trips,state.setTrips])
 const [open,setOpen] =useState(false)

const WptDt = "1"
const WptIt = "1"
const WptUt = "1"

const navigate = useNavigate()

// useEffect(()=>{
//   handleSubmit()
// },[])

 const formData= {WptDt,WptIt,WptUt,WptSi,WptSo,WptVi,WptTi,WptSoi,
    WptDi,WptOm,WptIs,WptOs,WptDft,WptDts,WptTed,WptPnum}
 const handleSubmit=async(e:React.FormEvent)=>{
    e.preventDefault()
    
    const load = toast.loading('Submitting')
    try{
        const data = await axios.post('/assets/statusdetails/', formData)  
    if(data){
      setWptDft('')
      setWptDi('')
      setWptSi('')
      setWptSo('')
      setWptPnum('')
      setWptDts('')
      setWptOm('')
      setWptIs('')
      setWptDts('')
      setWptTed('')
      setWptOs('')
      setWptSoi('')
      setWptVi('')
      setWptTi('')
      toast.dismiss(load)
      // console.log(data)
        toast.success(data.data.message)
        setTrips(data.data.myData)
        setOpen(true)
        // navigate('/mytrips',{ state: { trips: data.data.myData } })
    }else{
      toast.error('Ooops!, error while fetching active trip(s)')
      toast.dismiss(load)
    }
}catch(error){
  toast.dismiss(load)
    toast.error('Ooops!, error while fetching active trip(s)')
    setTrips(null)
}
 }
 

    return(
      <Protected>
      <>
     

        <main className='py-8 md:py-40 lg:py-10 flex justify-center items-center'>
     
           
     <div className="flex flex-col justify-center items-center">
     <p>Add a new Trip</p>
        <form  onSubmit={handleSubmit}>
      
        <section className=' grid grid-cols-2 gap-3 py-10'>
        
          <Input type="text" placeholder="WptSi" name="WptSi" value={WptSi} required
           onChange={(e)=>setWptSi(e.target.value)}
          />

         
          <Input type="text" placeholder="WptSo" name="WptSo" value={WptSo} required
           onChange={(e)=>setWptSo(e.target.value)}
          />
          
        
          <Input type="text" placeholder="WptVi" name="WptVi" value={WptVi} required
           onChange={(e)=>setWptVi(e.target.value)}
          />

         
          <Input type="text" placeholder="WptTi" name="WptTi" value={WptTi} required
           onChange={(e)=>setWptTi(e.target.value)}
          />

         
          <Input type="text" placeholder="WptSoi" name="WptSoi" value={WptSoi} required
           onChange={(e)=>setWptSoi(e.target.value)}
          />

         
          <Input type="text" placeholder="WptDi" name="WptDi" value={WptDi} required
           onChange={(e)=>setWptDi(e.target.value)}
          />
        
          
         
          <Input type="text" name="WptOm" placeholder='WptOm' value={WptOm} required 
            onChange={(e)=>setWptOm(e.target.value)}
          ></Input>

          
          <Input type="text" placeholder='WptIs' name="WptIs" value={WptIs} required
            onChange={(e)=>setWptIs(e.target.value)}
          ></Input>
     
          
          <Input type="text" placeholder='WptOs' name="WptOs" value={WptOs} required
            onChange={(e)=>setWptOs(e.target.value)}
          ></Input>

         
          <Input type="text" placeholder='WptDft' name="WptDft" value={WptDft} required
            onChange={(e)=>setWptDft(e.target.value)}
          ></Input>

          <Input type="text" placeholder='WptDts' name="WptDts" value={WptDts} required
            onChange={(e)=>setWptDts(e.target.value)}
          ></Input>

    
          <Input type="text" placeholder='WptTed' name="WptTed" value={WptTed} required
            onChange={(e)=>setWptTed(e.target.value)}
          ></Input>

         
          <Input type="text" placeholder='WptPnum' name="WptPnum" value={WptPnum} required
            onChange={(e)=>setWptPnum(e.target.value)}
          ></Input>
          </section>

          
           <div className="flex  justify-center items-center">
          <Button variant="default" type="submit" >Submit</Button>
          </div>
         
         
          
        </form>
        </div>

        
        {/* <div className="flex justify-center items-center">
        {trips ? (
  <>
    {trips &&
      (Array.isArray(trips)
        ? trips.map((trip: any) => <Display key={trip.tripID} trip={trip} />)
        : [<Display key={trips.tripID} trip={trips} />])}
  </>
) : (
  <section> </section>
)}
        </div> */}
        
      </main>
      

      <Dialog  open={open} onOpenChange={setOpen}>
          <DialogTrigger  className="pt-4">View Trips</DialogTrigger>
        <DialogContent className='justify-center items-center flex flex-col'>
        <DialogTitle>My Trips</DialogTitle>
        <DialogDescription>
        {trips.length > 1 ? (
  <>
    {trips &&
      (Array.isArray(trips)
        ? trips.map((trip: any) => <Display key={trip.tripID} trip={trip} />)
        : [<Display key={trips.tripID} trip={trips} />])}
  </>
) : (
  <section> <p>No Active Trips</p> </section>
)}
        </DialogDescription>

        <DialogFooter>
          <DialogTrigger>
          <Button>Cancel</Button>
          </DialogTrigger>
        </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
      </Protected>
    )
}