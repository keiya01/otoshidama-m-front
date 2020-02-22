import { MAIN_SERVICE_API, fetchService } from './api';
import { ACCESS_TOKEN } from './strage';


const CAMPAIGN_RESULT_URL = `${MAIN_SERVICE_API}/campaign/join`;

const getCampaignResult = async (campaignID: string): Promise<boolean> => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  const res = await fetchService(`${CAMPAIGN_RESULT_URL}`, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id: campaignID }),
  });

  return !!res.isWinner;
};

export default getCampaignResult;
