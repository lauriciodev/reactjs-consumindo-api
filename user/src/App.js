import axios from "axios";
import { useEffect } from "react";
import api from "./serices/api";

try {
  let result = await axios.get.api("/user");
  console.log(result);
} catch (erro) {
  console.log(erro);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>teste</h1>
      </header>
    </div>
  );
}

export default App;
