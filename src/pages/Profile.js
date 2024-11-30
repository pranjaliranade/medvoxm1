import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import './Profile.css'
import ProfileHeader from '../components/ProfileHeader.js'; 
import Sidebar from '../components/Sidebar.js';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchReadingHistory(currentUser.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchReadingHistory = async (userId) => {
    const q = query(collection(db, 'readingHistory'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    setHistory(querySnapshot.docs.map(doc => doc.data()));
  };

  return (
    <div>
      <ProfileHeader /> 
      <Sidebar />
      <h2>Profile</h2>
      {user && <p>Welcome, {user.email}</p>}
      <h3>Your Reading History</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
