import * as _ from "lodash";
import { polyfill } from "es6-promise";
import {
  APP_CNST_TOKEN_LABEL,
  APP_CNST_API_AUTH_HEADER,
} from "../App.constants";

polyfill();
const axios = require("axios").default;

export const SERVER_METHODS = { GET: "GET", POST: "POST", PUT: "PUT" };
export const requestServer = async (
  method,
  url,
  payload = {},
  additionalHeaders = {},
  additionalOptions = {}
) => {

  let token = localStorage.getItem(APP_CNST_TOKEN_LABEL) || "UNKNOWN";
  let options = {
    timeout: 360000,
    headers: { ...additionalHeaders, ...{ [APP_CNST_API_AUTH_HEADER]: token } },
    ...additionalOptions,
  };
  if (method === SERVER_METHODS.POST || method === SERVER_METHODS.PUT) {
    options = _.merge(options, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
      mode: "no-cors",
      credentials: "include",
    });
  } else {
    url =
      url +
      "?" +
      _.keys(payload)
        .map((key) => key + "=" + payload[key])
        .join("&");
    options = _.merge(options, {
      method: SERVER_METHODS.GET,
    });
  }
  try {
    let res = await axios(url, options);
    return res.data;
  } catch (error) {
    if (error.response) throw error.response;
    else throw error;
  }
};
