
import { useEffect, useState } from "react";

function App() {

  const [status, setStatus] = useState("SAFE");

  async function fetchStatus() {

    try {

      const response = await fetch("http://10.119.226.178:5000/status");

      const data = await response.json();

      setStatus(data.status);

    } catch (error) {

      console.log(error);

    }
  }

  async function resetSystem() {
    await fetch("http://10.119.226.178:5000/reset", {
      method: "POST"
    });
    fetchStatus();
  }

  useEffect(() => {

    fetchStatus();

    const interval = setInterval(fetchStatus, 2000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: status === "ALERT" ? "red" : "lightgreen",
        color: "black",
        fontFamily: "Arial"
      }}
    >

      <h1> IOT SMART VEHICLE SECURITY SYSTEM</h1>

      <h2>
        {status === "ALERT"
          ? "🚨 THEFT ALERT!"
          : "✅ VEHICLE SAFE"}
      </h2>

      <button
        onClick={resetSystem}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          cursor: "pointer",
          marginTop: "20px",}}
     >RESET SYSTEM</button>
    </div>
  );
}

export default App;