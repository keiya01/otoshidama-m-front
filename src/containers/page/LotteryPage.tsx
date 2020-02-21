import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as TwitterAuthActions from '../../actions/TwitterAuthActions';
import { User } from '../../types/user';
import LotteryPage from '../../components/page/LotteryPage';

const dummyFetch = async () => new Promise<User>((resolve, reject) => setTimeout(() => {
  resolve({ id: '12345', name: 'dummy' });
  // reject(new Error('Error occurred'));
}, 1000));

const useTwitterAuth = () => {
  const [actionState, setActionState] = useState({
    fetching: false,
    isError: false,
  });
  const dispatch = useDispatch();

  const login = useCallback(async () => {
    setActionState({ fetching: true, isError: false });
    try {
      const user = await dummyFetch();
      dispatch(TwitterAuthActions.twitterAuthAction(user));
      setActionState((prev) => ({ ...prev, fetching: false }));
    } catch (error) {
      setActionState({ fetching: false, isError: true });
    }
  }, [dispatch]);

  return {
    ...actionState,
    login,
  };
};

const LotteryPageContainer = () => {
  const { login, fetching, isError } = useTwitterAuth();
  return <LotteryPage login={login} fetching={fetching} isError={isError} />;
};

export default LotteryPageContainer;
