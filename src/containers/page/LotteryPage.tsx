import React, { useCallback } from 'react';
import LotteryPage from '../../components/page/LotteryPage';
import { TWITTER_SERVICE_API } from '../../services/api';

const useTwitterAuth = () => {
  const login = useCallback((isPlanner?: boolean) => () => {
    if (isPlanner) {
      localStorage.setItem('userType', 'planner');
    } else {
      localStorage.setItem('userType', 'applicant');
    }

    window.location.href = `${TWITTER_SERVICE_API}/auth`;
  }, []);

  return {
    loginForApplicant: login(),
    loginForPlanner: login(true),
  };
};

const LotteryPageContainer = () => {
  const {
    loginForApplicant, loginForPlanner,
  } = useTwitterAuth();
  return (
    <LotteryPage
      loginForApplicant={loginForApplicant}
      loginForPlanner={loginForPlanner}
    />
  );
};

export default LotteryPageContainer;
