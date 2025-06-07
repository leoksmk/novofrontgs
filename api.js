import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.60.33.177:8080/api', // Altere para seu IP local na rede
  timeout: 5000,
});

export const getSensorData = async () => {
  const res = await api.get('/sensores');
  return res.data;
};

export const getAlerts = async () => {
  const res = await api.get('/alertas');
  return res.data;
};

export const getControlActions = async () => {
  const res = await api.get('/controle');
  return res.data;
};

export const sendControlAction = async (acao) => {
  const res = await api.post(`/controle?acao=${acao}`);
  return res.data;
};
