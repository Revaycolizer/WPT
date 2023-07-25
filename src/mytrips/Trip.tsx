
import { useLocation } from 'react-router-dom';

// import icon from '../icons/pin.png'
// import n from '../icons/location-pin.png'
// import L from 'leaflet';

import { Box } from '@chakra-ui/react';

import Protected from '../routes/Protected';


export default function Trip(){

    // const con = L.icon({
    //     iconUrl: icon,
    //     iconSize: [38, 38],
    //     iconAnchor: [19, 38],
    //     popupAnchor: [0, -38],
    //   })

    //   const co = L.icon({
    //     iconUrl: n,
    //     iconSize: [38, 38],
    //     iconAnchor: [19, 38],
    //     popupAnchor: [0, -38],
    //   })

    const location = useLocation();
    const spectrips = location.state?.spectrip;
    // const [trips,setTrips] = createUser((state)=>[state.trips,state.setTrips])
      
    localStorage.setItem('trips', JSON.stringify(spectrips));
  
    const trip = JSON.parse(localStorage.getItem('trips') || '{}');
    
    return(
      <Protected>
         <div className="flex sm:flex flex-col pt-12 px-16 lg:px-52 lg:pt-4 "> 
         {/* <p>{trip.locName}</p> */}
         
             <div className=" gap-2 lg:flex items-center justify-center sm:flex flex-col ">
              <aside className="sm:flex flex-col sm:gap-6 lg:items-center justify-center lg:grid grid-cols-3 gap-2 px-4 py-4">
                <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="flex flex-row gap-2">
               <h5 className="items-center justify-center flex"> Driver name: {trip.driverName}</h5>
                </div>
                    </Box><br className="lg:hidden md:hidden" />
                    <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="flex flex-row gap-2">
                    <h5>Driver Phone number: {trip.driverPNo}</h5>
                    </div>
                    </Box><br className="lg:hidden md:hidden" />

                    <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                 <h5>Driver Passport: {trip.driverPassPort}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />

                    <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="flex flex-row gap-2">
                   <h5>Destination: {trip.destinGeofName}</h5></div>
                   </Box><br className="lg:hidden md:hidden" />
                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                   <h5>Date: {trip.dateTime}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />
                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                 <h5>Estimated Distance: {trip.estDistance} km</h5></div>
                   </Box><br className="lg:hidden md:hidden" />
                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                <h5>Estimated Time: {trip.estTime}</h5>
                  </div>
                   </Box><br className="lg:hidden md:hidden" />
                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                <h5>Device Type: {trip.deviceType}</h5>
               </div>
                   </Box><br className="lg:hidden md:hidden" />
                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                 <h5>Battery Percent: {trip.batteryPercent}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />

                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                 <h5>Transporter ID: {trip.transporterID}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />

                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                 <h5>Transporter ID: {trip.transporterID}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />

                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                 <h5>Transporter Name: {trip.transporterName}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />

                  
                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                 <h5>updated By: {trip.updatedBy}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />

                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                 <h5>Vendor ID: {trip.vendorID}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />


                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                 <h5>Vendor Name: {trip.vendorName}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />

                   
                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                 <h5>Destination: {trip.destinGeofName}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />

                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                  <h5>Horse No: {trip.horseNo}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />

                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
               <h5>HorseChase No: {trip.horseChasesNo}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />

                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                 <h5>PlateNo 1: {trip.plateNo1}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />


                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                   <h5>PlateNo 2: {trip.plateNo2}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />

                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                 <h5>Protocol Version: {trip.protocolVersion}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />


                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                 <h5>Updated At: {trip.updatedAt}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />

                     
                  <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                 <h5>Current Trip Number: {trip.tripNo}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />

                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                 <h5>Created At: {trip.createdAt}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />

                  

                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                   <h5>Gsm Signal: {trip.gsmSignal}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />

                   
                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                  <h5>Office Location Name: {trip.locName}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />

                   <Box className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <div className="flex flex-row gap-2">
                  <h5>Office: {trip.sourceGeofName}</h5>
                 </div>
                   </Box><br className="lg:hidden md:hidden" />
                    </aside>
                    
                    

                    {/* <div className="lg:items-center flex justify-center">
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
          </div> */}
          </div>
                    

                    </div>

                    </Protected>
        
    )
}