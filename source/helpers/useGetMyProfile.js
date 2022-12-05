import {useState, useEffect} from 'react';
import {fetchMyProfile} from './admin';

export const useGetMyProfile = () => {
  const [profile, setProfile] = useState();

  useEffect(() => {
    setProfile(fetchMyProfile());
  }, []);
  return {
    profile,
  };
};
