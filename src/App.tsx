
// import logo from './logo.svg';
import './App.css';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react'
import  ToasterProvider  from './provider/ToasterProvider'
import Register from "./register/Register";
import Login from './login/Login';
import Home from './home/Home';

// import { Route,Routes } from 'react-router';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Trips from './trips/Trips';
import MyTrips from './mytrips/MyTrips';

import { createUser } from './libs/zustand';
import {shallow} from 'zustand/shallow'
import NotFound from './NotFound/NotFound';
import Protected from './routes/Protected';

import Trip from './mytrips/Trip';
import SpecificTrip from './specifictrip/SpecificTrip';
import { SideBar } from './sidebar/SideNavBar';
import Sidebar from './sidebar/Sidebar';
import 'rsuite/dist/rsuite.min.css'


function App() {
  const user = createUser((state) => Object.keys(state.user),shallow)
  const isLoading = createUser((state)=>[state.isLoading])

    return (
      <ChakraProvider>
        <ToasterProvider />
        <div className="App">
          <BrowserRouter>
            {isLoading[0] === true ? ( <Sidebar />):(<p className='invisible'>No</p>)}
            <Routes>
            <Route
              path="/"
              element={user.length > 1 ? (<Protected> <Home /></Protected>) : ( <Login />)} />
              <Route path="/home" element={<Home />} />
              
              <Route path="/trips" element={<Trips />} />
              <Route path="/trip/:tripID" element={<Trip />} />
              <Route path="/mytrips/:tripID" element={<MyTrips />} />
              <Route path="/spectrip" element={<SpecificTrip/>} />
           
              <Route path="/register" element={  user.length > 1 ? (<Protected><Home /></Protected>) : (<Register />)} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ChakraProvider>
    );
  }


export default App;
