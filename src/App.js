import Footer from "./components/Footer";
import Header from "./components/Header";

import { Routers } from "./Global/Routers";

function App() {
  console.log(Routers);
  return (
    <div className="App">
      <Header />
      {Routers()}
      <Footer />
    </div>
  );
}

export default App;
