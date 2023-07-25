

import { useNavigate } from 'react-router-dom';
import {shallow} from 'zustand/shallow'
import { createUser } from '../libs/zustand';
import { useEffect } from 'react';



export default function Protected({children}:{children:React.ReactNode}){
    const user = createUser((state) => Object.keys(state.user),shallow)
    const navigate = useNavigate()
    useEffect(()=>{
        if(user.length>1){
            console.log('Welcome')
          }else{
            navigate('/')
          }
    })
    return(
        <main>{children}</main>
    )
}