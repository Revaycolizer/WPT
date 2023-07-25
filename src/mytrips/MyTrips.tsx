import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup,Circle} from 'react-leaflet';
import icon from '../icons/pin.png'
import n from '../icons/location-pin.png'
import L from 'leaflet';
import { Card } from "src/components/ui/card";
import { Box } from '@chakra-ui/react';
import {FcBusinessman} from 'react-icons/fc'
import {TbBusStop} from 'react-icons/tb'
import {MdOutlineDateRange} from 'react-icons/md'
import {GiPathDistance} from 'react-icons/gi'
import {BiSolidTime} from 'react-icons/bi'
import {TbReport} from 'react-icons/tb'
import {GrStatusInfo} from 'react-icons/gr'
import {BsTelephone} from 'react-icons/bs'
import Protected from '../routes/Protected';
import { createUser } from '../libs/zustand';




export default function MyTrips(){

    const con = L.icon({
        iconUrl: icon,
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38],
      })

      const co = L.icon({
        iconUrl: n,
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38],
      })

    const location = useLocation();
    const trips = location.state?.trip;
    // const [trips,setTrips] = createUser((state)=>[state.trips,state.setTrips])
      
    localStorage.setItem('trips', JSON.stringify(trips));
  
    const trip = JSON.parse(localStorage.getItem('trips') || '{}');
    

    return (
      <Protected>

<h5 className=" py-8">{trip.locName}</h5>

        {/* <div className=" pt-12 px-6 lg:pt-4 "> */}
                
              

            <div className="flex flex-row  sm:flex flex-col ">
                <Card className="sm:flex flex-col sm:gap-6 lg:grid grid-cols-2 gap-2 px-4 py-4">
                <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="flex flex-row gap-2">
                <FcBusinessman size={30} color="blue" /><h5 className="items-center justify-center flex"> Driver name: {trip.driverName}</h5>
                </div>
                    </Box><br className="lg:hidden md:hidden" />
                    <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="flex flex-row gap-2">
                  <BsTelephone size={22} color="blue"/>  <h5>Driver Phone number: {trip.driverPNo}</h5>
                    </div>
                    </Box><br className="lg:hidden md:hidden" />
                    <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="flex flex-row gap-2">
                  <TbBusStop size={30} color="blue"/> <h5>Destination: {trip.destinGeofName}</h5></div>
                   </Box><br className="lg:hidden md:hidden" />
                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                 <MdOutlineDateRange size={28} color="blue"/>  <h5>Date: {trip.dateTime}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />
                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                 <GiPathDistance size={28} color="blue"/> <h5>Estimated Distance: {trip.estDistance} km</h5></div>
                   </Box><br className="lg:hidden md:hidden" />
                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                  <BiSolidTime size={30} color="blue"/> <h5>Time: {trip.timeInTrip}</h5>
                  </div>
                   </Box><br className="lg:hidden md:hidden" />
                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
               <TbReport size={30} color="blue"/>    <h5>Reported: {trip.lastReported}</h5>
               </div>
                   </Box><br className="lg:hidden md:hidden" />
                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                 <GrStatusInfo size={30} color="blue"/>  <h5>Trip status: {trip.remainDistMsg}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />
                    </Card>
                    </div>
         
        <div className="lg:py-4">
          <MapContainer  center={[trip.sourceGeofLat, trip.sourceGeofLongt]} zoom={13}
            style={{ height: '400px', width: '100%' }}>
         
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker icon={co} position={[trip.sourceGeofLat, trip.sourceGeofLongt]}>
            <Circle center={[trip.sourceGeofLat, trip.sourceGeofLongt]} radius={200} />
              <Popup>Current Location: {trip.sourceGeofName}</Popup>
            </Marker>

            <Marker icon={con} position={[trip.destinGeofLat
, trip.destinGeofLongt]}>
            <Circle center={[trip.destinGeofLat
, trip.destinGeofLongt]} radius={200} />
              <Popup>Destination: {trip.destinGeofName}</Popup>
            </Marker>
            
          </MapContainer>
          </div>

          
        {/* </div> */}
        </Protected>
      );
}