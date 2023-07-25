import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";

import { createUser } from "../../src/libs/zustand";
import axios from "axios";
import toast from "react-hot-toast";
import React, {  useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from 'src/components/ui/dialog'
import Protected from "../routes/Protected";
import {DatePicker} from 'rsuite'
import 'rsuite/dist/rsuite.min.css'
import Display from "./Display";



export default function SpecificTrip(){
    const [WptSi,setWptSi]=createUser((state)=>[state.WptSi,state.setWptSi])
    const [WptSo,setWptSo]=createUser((state)=>[state.WptSo,state.setWptSo])
    const [spectrips,setSpecTrips] = createUser((state)=>[state.spectrips,state.setSpecTrips])
   const WptVi = "1"
    const WptTi ="1"
    const WptSoi = "1"
    const [WptDi,setWptDi] =createUser((state)=>[state.WptDi,state.setWptDi])
    const [WptOm,setWptOm] =createUser((state)=>[state.WptOm,state.setWptOm])
    const [WptIs,setWptIs] =createUser((state)=>[state.WptIs,state.setWptIs])
    const [WptOs,setWptOs] =createUser((state)=>[state.WptOs,state.setWptOs])
    const WptDft = "6"
    const [WptDts,setWptDts] =useState<Date | null>(null)
    const [WptTed,setWptTed] =useState<Date | null>(null)
    const [WptPnum,setWptPnum] =createUser((state)=>[state.WptPnum,state.setWptPnum]) 
    const [trips,setTrips] = createUser((state)=>[state.trips,state.setTrips])
    const [open,setOpen] =useState(false)
   
   const WptDt = "2"
   const WptIt = "2"
   const WptUt = "1"
   
   
   
   // useEffect(()=>{
   //   handleSubmit()
   // },[])

   const handleDaterChange = (value: Date | null) => {
    setWptDts(value);
  };

   const handleDateChange = (value: Date | null) => {
    setWptTed(value);
  };

   
    const formData= {WptDt,WptIt,WptUt,WptSi,WptSo,WptVi,WptTi,WptSoi,
       WptDi,WptOm,WptIs,WptOs,WptDft,WptDts,WptTed,WptPnum}

    const handleSubmit=async(e:React.FormEvent)=>{
        e.preventDefault()
        console.log(formData)
        const load = toast.loading('Submitting')
        try{
            const data = await axios.post('/assets/statusdetails/', formData)  
        if(data){
      
          setWptDi('')
          setWptSi('')
          setWptSo('')
          setWptPnum('')
          setWptDts(null)
          setWptOm('')
          setWptIs('')
          setWptTed(null)
          setWptOs('')
          
        
          toast.dismiss(load)
          console.log(data)
          console.log(data.data.myData[0])
            toast.success(data.data.message)
            setSpecTrips(data.data.myData[0])
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
        <div>
             <Protected>
      <>
      

        <main className='py-8 md:py-40 lg:py-10 flex justify-center items-center'>
     
           
     <div className="flex flex-col justify-center items-center">
     <p>Search for a Trip</p>
        <form  onSubmit={handleSubmit}>
      
        <section className=' grid grid-cols-2 gap-3 py-10'>
        
          <Input type="text" placeholder="Trip Id" name="WptSi" value={WptSi} required
           onChange={(e)=>setWptSi(e.target.value)}
          />

         
          <Input type="text" placeholder="WptSo" name="WptSo" value={WptSo} required
           onChange={(e)=>setWptSo(e.target.value)}
          />
          
        
          {/* <Input type="text" placeholder="WptVi" name="WptVi" value={WptVi} required
           onChange={(e)=>setWptVi(e.target.value)}
          /> */}

         
          {/* <Input type="text" placeholder="WptTi" name="WptTi" value={WptTi} required
           onChange={(e)=>setWptTi(e.target.value)}
          /> */}

         
          {/* <Input type="text" placeholder="WptSoi" name="WptSoi" value={WptSoi} required
           onChange={(e)=>setWptSoi(e.target.value)}
          /> */}

         
          <Input type="text" placeholder="WptDi" name="WptDi" value={WptDi} required
           onChange={(e)=>setWptDi(e.target.value)}
          />
        
          
         
          <Input type="text" name="WptOm" placeholder='WptOm' value={WptOm} required 
            onChange={(e)=>setWptOm(e.target.value)}
          ></Input>

<DatePicker format="yyyy-MM-dd HH:mm:ss" block appearance="subtle" placeholder="Start Date" value={WptDts} onChange={handleDaterChange}/>
          <Input type="text" placeholder='WptIs' name="WptIs" value={WptIs} required
            onChange={(e)=>setWptIs(e.target.value)}
          ></Input>
     

     <DatePicker format="yyyy-MM-dd HH:mm:ss" block appearance="subtle" placeholder="End Date" value={WptTed} onChange={handleDateChange}/>
          
          <Input type="text" placeholder='WptOs' name="WptOs" value={WptOs} required
            onChange={(e)=>setWptOs(e.target.value)}
          ></Input>

{/*          
          <Input type="text" placeholder='WptDft' name="WptDft" value={WptDft} required
            onChange={(e)=>setWptDft(e.target.value)}
          ></Input> */}


        

    
          {/* <Input type="datetime-local" placeholder='End Date(yy-mm-dd hh:mm:ss)' name="WptTed" value={WptTed} required
            onChange={(e)=>setWptTed(e.target.value)}
          ></Input> */}

         
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
        {spectrips !==null ? (
  <>
    {spectrips &&
      (Array.isArray(spectrips)
        ? spectrips.map((spectrip: any) => <Display key={spectrip.tripID} spectrip={spectrip} />)
        : [<Display key={trips.tripID} spectrip={spectrips} />])}
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
        </div>
    )
}