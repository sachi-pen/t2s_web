import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import StoresListComponent from "../components/StoresList.component";

export default function HomePage() {
  const history = useHistory();
  return (
    <div>
      <div className="LogoffSection">
        <button
          onClick={() => {
            history.push("/auth");
          }}
        >
          Logoff
        </button>
      </div>
      <StoresListComponent />
    </div>
  );
}
