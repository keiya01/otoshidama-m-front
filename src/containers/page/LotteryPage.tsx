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

  const login = useCallback((fetchFunc: () => Promise<any>) => async () => {
    if (actionState.fetching) return;
    setActionState({ fetching: true, isError: false });
    try {
      const user = await fetchFunc();
      dispatch(TwitterAuthActions.twitterAuthAction(user));
      setActionState((prev) => ({ ...prev, fetching: false }));
    } catch (error) {
      setActionState({ fetching: false, isError: true });
    }
  }, [actionState.fetching, dispatch]);

  return {
    ...actionState,
    loginForApplicant: login(dummyFetch),
    loginForPlanner: login(dummyFetch),
  };
};

const LotteryPageContainer = () => {
  const {
    loginForApplicant, loginForPlanner, fetching, isError,
  } = useTwitterAuth();
  return (
    <LotteryPage
      loginForApplicant={loginForApplicant}
      loginForPlanner={loginForPlanner}
      fetching={fetching}
      isError={isError}
    />
  );
};

export default LotteryPageContainer;
