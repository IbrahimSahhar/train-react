import { useState } from "react";
import { Routers } from "./Global/Routers";
import { useEffect } from "react";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("fillName");
    setIsAuthorized(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthorized(true);
    }
  }, [isAuthorized]);

  return (
    <div className="App">{Routers(isAuthorized, setIsAuthorized, logOut)}</div>
  );
}

export default App;
