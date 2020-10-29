import { useHistory } from "react-router-dom";

import AuthComponent from "../components/Auth.component";
export default function AuthPage() {
  const history = useHistory();
  const handleOnSubmit = () => {
    history.push("/home");
  };

  return <AuthComponent onSubmit={handleOnSubmit} />;
}
