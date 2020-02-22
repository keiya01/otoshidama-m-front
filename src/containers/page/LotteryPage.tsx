import React, { useCallback, useEffect } from 'react';
import LotteryPage from '../../components/page/LotteryPage';
import { TWITTER_SERVICE_API } from '../../services/api';
import { USER_TYPE, CAMPAIGN_ID } from '../../services/strage';
import { parseQueryParam } from '../../utils/url';

const useTwitterAuth = () => {
  const login = useCallback((isPlanner?: boolean) => () => {
    if (isPlanner) {
      localStorage.setItem(USER_TYPE, 'planner');
    } else {
      localStorage.setItem(USER_TYPE, 'applicant');
    }

    window.location.href = `${TWITTER_SERVICE_API}/auth`;
  }, []);

  useEffect(() => {
    const query = parseQueryParam(window.location.href);
    if (query.campaign_id) {
      localStorage.setItem(CAMPAIGN_ID, query.campaign_id);
    }
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
