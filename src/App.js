import Footer from "./components/Footer";
import Header from "./components/Header";

import { Routers } from "./Global/Routers";

function App() {
  return (
    <div className="App">
      <Header />
      {Routers()}
      <Footer />
    </div>
  );
}

export default App;
