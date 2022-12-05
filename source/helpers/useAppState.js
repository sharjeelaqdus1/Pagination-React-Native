import {useState, useEffect} from 'react';
import {AppState} from 'react-native';

const useAppState = () => {
  const [appStateVisible, setAppStateVisible] = useState();

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState.match(/inactive|background/)) {
        setAppStateVisible('background');
      } else {
        setAppStateVisible('active');
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return {
    appStateVisible,
  };
};

export default useAppState;
