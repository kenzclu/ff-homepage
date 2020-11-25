import Axios from "axios";

const request = async (params) => {
  try {
    const { status, headers, data } = await Axios.request(params);
    return { status, headers, data };
  } catch (err) {
    throw err;
  }
};

const get = async (params) => {
  return request({
    method: "get",
    url: params.url,
  });
};

const post = async (params) => {
  return request({
    method: "post",
    url: params.url,
    headers: params.headers,
    data: params.body,
  });
};

export const sendEmail = async (data) => {
  const response = await post({
    url: "/send",
    body: data,
  });
  return response.data;
};

export const getResume = async (data) => {
  const response = await get({
    url: "/about/resume",
  });
  return response.data;
};
