import React, { ReactElement, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  USER, ACCESS_TOKEN, USER_TYPE, CAMPAIGN_ID,
} from '../../services/strage';
import { parseQueryParam } from '../../utils/url';

const LoginCompletePage = (): ReactElement => {
  const history = useHistory();
  useEffect(() => {
    const { jwt } = parseQueryParam(window.location.href);
    const base64 = jwt.split('.')[1];
    const data = JSON.parse(window.atob(base64));
    window.localStorage.setItem(ACCESS_TOKEN, jwt);
    window.localStorage.setItem(USER, JSON.stringify(data));
    const userType = window.localStorage.getItem(USER_TYPE);
    const campaignID = window.localStorage.getItem(CAMPAIGN_ID);
    switch (userType) {
      case 'planner':
        history.push('/setting');
        break;
      case 'applicant':
        if (campaignID) {
          history.push(`/result/${campaignID}`);
        } else {
          history.push('/');
        }
        break;
      default:
        history.push('/');
    }
  }, [history]);
  return (
    <p>loading...</p>
  );
};

export default LoginCompletePage;
