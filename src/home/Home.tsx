

import { createUser } from '../libs/zustand';
import src from 'src/icons/person.png'
import Protected from '../routes/Protected';

export default function Home(){

  const user = createUser((state) => state.user);
    
  localStorage.setItem('user', JSON.stringify(user));

  const savedUser = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <Protected>
    <main className="pt-8">
      {savedUser ? (
        <>
        <div className="flex items-center justify-center">
        <img src={src} alt=""/>
        </div>
          <p>Username: {savedUser.UserName}</p>
          <p>Firstname: {savedUser.FName}</p>
          <p>Lastname: {savedUser.LName}</p>
          <p>Phone number: {savedUser.PNo}</p>
          <p>Email: {savedUser.Email}</p>
          <p>Country: {savedUser.Country}</p>
          
        </>
      ) : (
        <p>No user data found.</p>
      )}
    </main>
    </Protected>
  );
}