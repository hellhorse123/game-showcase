import axios from "axios";

const call = async (
  method,
  url,
  data = null,
  onSuccess = () => {},
  onFinally = () => {},
  onError = () => {}
) => {
  url = `https://rawg.io/api${url}key=b90bffccb491493595291111a63784b7`;
  const options = {
    method: method,
    url: url,
  };

  if (data) {
    options.body = data;
  }

  try {
    const res = await axios(options);
    onSuccess(res.data);
    return res.data;
  } catch (err) {
    onError(err);
    console.log("err", err, url);
  } finally {
    onFinally();
  }
};

export const apiURL = async (url, onSuccess, onFinally, onError) => {
  return await call("GET", url, null, onSuccess, onFinally, onError);
};
