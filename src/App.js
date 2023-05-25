import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [cpf, setCpf] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setData(data.message);
        setEmail(data.email);
        setCpf(data.cpf);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <p>Email: {!email ? "Loading..." : email}</p>
        <p>CPF: {!cpf ? "Loading..." : cpf}</p>
      </header>
    </div>
  );
}

export default App;