import { apiRequest } from '../../apiRequest';

export const authTracking = async (username, password) => {
  const response = await apiRequest(
    '5c70d95438000058453fccc8',
    'GET',
    { username, password },
    {},
    {}
  );
  return response.response ? response.response.data : response.data;
};
