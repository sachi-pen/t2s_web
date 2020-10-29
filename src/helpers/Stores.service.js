import { APP_CNST_API_ENDPOINT } from "../App.constants";
import { requestServer, SERVER_METHODS } from "../helpers/request.service";

export const getStoresList = async () => {
  let url = APP_CNST_API_ENDPOINT + "/stores";
  try {
    let result = await requestServer(SERVER_METHODS.GET, url);
    return result;
  } catch (error) {
    throw error;
  }
};

export const getAllStoresListWithCustomerCount = async () => {
    let url = APP_CNST_API_ENDPOINT + "/stores_with_customer_count";
    try {
      let result = await requestServer(SERVER_METHODS.GET, url,{getAll : true});
      return result;
    } catch (error) {
      throw error;
    }
  };
