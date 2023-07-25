import { FaUser, FaSuitcase, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../libs/zustand';
import {Truck} from "lucide-react"

export default function SideNavbar() {
  const [showLabels, setShowLabels] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [setUser] = createUser((state)=>[state.setUser])
  const [setisLoading] = createUser((state)=>[state.setisLoading])

  const navigate = useNavigate()
  const handleMouseEnter = () => {
    setShowLabels(true);
  };

  const handleMouseLeave = () => {
    setShowLabels(false);
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const handleLogout=()=>{
    setisLoading(false)
    setUser([])
    navigate('/')
  }

  return (
    <>
      <button className="sidenav-toggle" onClick={toggleNav}>
        <FaBars />
      </button>
      <nav className={`sidenav ${showNav ? 'show' : ''}`}>
        
        <Link to="/home" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <FaUser />
          {showLabels && <span>Profile</span>}
        </Link>
        <Link to="/trips" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <FaSuitcase />
          {showLabels && <span>Mytrips</span>}
        </Link>
        <Link to="/spectrip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Truck />
          {showLabels && <span>Search</span>}
        </Link>
        <Link to="" onClick={handleLogout}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <FaSignOutAlt />
          {showLabels && <span onClick={handleLogout}>Logout</span>}
        </Link>
      </nav>
    </>
  );
}