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
  const response = await apiRequest(`api/trailer/1`, 'GET', {}, {}, {});
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
<<<<<<< HEAD
export const guardarEmbarque = async (
  idTrailer,
  idMunicipioOrigen,
  idMunicipioDestino,
  idAgenteExportacion,
  embarqueDetalles
) => {
  const response = await apiRequest(
    `api/embarque/`,
    'POST',
    {
      idTrailer: idTrailer,
      idMunicipioOrigen: idMunicipioOrigen,
      idMunicipioDestino: idMunicipioDestino,
      idAgenteExportacion: idAgenteExportacion,
      embarqueDetalles: embarqueDetalles
    },
    {},
    {}
  );
  return response.response ? response.response.data : response.data;
};
=======

export const getEmbarque = async () => {
  const response = await apiRequest(`/api/embarque/1`, 'GET', {}, {}, {});
  return response.response ? response.response.data : response.data;
};
>>>>>>> b2c7c85f8afb28a0ceb2f52aa923db956ba2bfcb
