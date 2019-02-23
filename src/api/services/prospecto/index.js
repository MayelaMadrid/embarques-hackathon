import { apiRequest } from '../../apiRequest';

export const getProspectsById = async id => {
  const response = await apiRequest(`prospects/${id}`, 'GET', {}, {}, {});

  return response.response ? response.response.data : response.data;
};

export const getProspectsCompany = async id => {
  const response = await apiRequest(
    `companies/${id}/prospects`,
    'GET',
    {},
    {},
    {}
  );

  return response.response ? response.response.data : response.data;
};
export const getAllProspects = async () => {
  const response = await apiRequest(`prospects`, 'GET', {}, {}, {});
  return response.response ? response.response.data : response.data;
};

export const getProspectsPromoter = async id => {
  const response = await apiRequest(`promoters/prospects`, 'GET', {}, {}, {});

  return response.response ? response.response.data : response.data;
};

export const getDetalleProspecto = async id => {
  const response = await apiRequest(`promoters/prospects`, 'GET', {}, {}, {});

  return response.response ? response.response.data : response.data;
};
