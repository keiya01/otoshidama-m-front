import { MAIN_SERVICE_API } from './api';

const CAMPAIGN_RESULT_URL = `${MAIN_SERVICE_API}/result`;

const getCampaignResult = () => {
  const campaignID = localStorage.getItem('campaignID');
  const token = localStorage.getItem('access_token');
  fetch(`${CAMPAIGN_RESULT_URL}?campaignID=${campaignID}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default getCampaignResult;
