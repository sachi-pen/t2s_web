import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import { appException } from "../App.states";

import {
  getStoresList,
  getAllStoresListWithCustomerCount,
} from "../helpers/Stores.service";

export default function StoresListComponent() {
  const [storesList, setStoresList] = useState([]);
  const setAppException = useRecoilState(appException)[1];

  useEffect(() => {
    (async () => {
      try {
        let result = await getAllStoresListWithCustomerCount();
        setStoresList(result);
      } catch (error) {
        setAppException(error);
      }
    })();
  }, []);

  return (
    <div className="StoresListContainer">
        <label className="StoresListLabel"> Stores List</label>
      <table className="StoresListTable">
        <thead>
          <tr>
            <td>Store Name</td>
            <td>No. Of Customers</td>
          </tr>
        </thead>
        <tbody>
          {storesList &&
            storesList.map((s) => {
              return (
                <tr>
                  <td>{s.name}</td>
                  <td>{s.totalCustomerCount}</td>
                </tr>
              );
            })}
          {storesList && storesList.length === 0 && <tr>No data</tr>}
        </tbody>
      </table>
    </div>
  );
}
