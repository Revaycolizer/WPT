import { Link } from "react-router-dom";
import {  useNavigate, } from 'react-router-dom';

interface Props{
    tripID: string;
    tripNo: string;
    vendorID: string;
    vendorName: string;
    sourceGeofName:string;
    sourceGeofLongt:string;
    sourceGeofLat:string;
    transporterName:string;
    truckType:string;
    speed:number;
    timeInTrip:string;
    lastReported:string;
    horseNo:string;
    horseChasesNo:string;
    locName:string;
    lat:string;
    destinGeofName:string;
    destinGeofLongt:string;
    dateTime:string;
    destinGeofLat:string;
    driverPNo:string;
    driverName:string;
    driverLicense:string;
    driverPassPort:string;
    enterGeofence:string;
    estDistance:string;
    estRemainedDist:string;
    estTime:string;
    estTravelDist:string;
    estTraveledDist:string;
    noOfTripReturned:string;
    plateNo1:string;
    plateNo2:string;
    protocolVersion:string;
    remainDistMsg:string;






}




export default function Display({spectrip}:{spectrip:Props}){
    const navigate = useNavigate()
  const handleTrip=async()=>{
    navigate(`/trip/${spectrip.tripID}`,{ state: { spectrip } })
  }
    return(
        <main className="flex flex-row cursor-pointer">
            <div className="flex flex-row" onClick={handleTrip}>
            <h6>{spectrip.tripID}. </h6>
           <h6>{spectrip.locName}</h6> 
           {/* <Link to={`/mytrips/${trip.tripID}`}></Link> */}
           </div>

        </main>
    )
}