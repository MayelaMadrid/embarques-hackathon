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
export const getTrailers = async idEstado => {
  const response = await apiRequest(
    `api/trailer/${idEstado}`,
    'GET',
    {},
    {},
    {}
  );
  return response.response ? response.response.data : response.data;
};
export const getAgentesExportacion = async () => {
  const response = await apiRequest(
    `api/agente-exportacion/`,
    'GET',
    {},
    {},
    {}
  );
  return response.response ? response.response.data : response.data;
};
export const getProductos = async () => {
  const response = await apiRequest(`/api/productos/1`, 'GET', {}, {}, {});
  return response.response ? response.response.data : response.data;
};

export const getTransportista = async () => {
  const response = await apiRequest(`/api/transportistas/1`, 'GET', {}, {}, {});
  return response.response ? response.response.data : response.data;
};

export const getEmbarque = async () => {
  const response = await apiRequest(`/api/embarque/1`, 'GET', {}, {}, {});
  return response.response ? response.response.data : response.data;
};

export const getDispositivo = async () => {
  const response = await apiRequest(`/api/dispositivo/1`, 'GET', {}, {}, {});
  return response.response ? response.response.data : response.data;
};