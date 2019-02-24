import { apiRequest } from '../../apiRequest';

export const authTracking = async (username, password) => {
  const response = await apiRequest(
    'api/usuario/login',
    'POST',
    { username: username, password: password },
    {},
    {}
  );
  return response.response ? response.response.data : response.data;
};
export const getEstados = async () => {
  const response = await apiRequest('api/estados/', 'GET', {}, {}, {});
  return response.response ? response.response.data : response.data;
};
export const getMunicipios = async idEstado => {
  const response = await apiRequest(
    `api/municipios/${idEstado}`,
    'GET',
    {},
    {},
    {}
  );
  return response.response ? response.response.data : response.data;
};
export const getTrailers = async () => {
  const response = await apiRequest('api/trailer/', 'GET');
  return response.response ? response.response.data : response.data;
};
