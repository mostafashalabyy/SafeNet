import React, { useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const scanUrl = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/scan-url", { url });
      setResult(response.data);
    } catch (error) {
      setResult({ error: "Failed to scan URL" });
    }
  };

  return (
    <div>
      <h1>SafeNetV4.0 - URL Scanner</h1>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" />
      <button onClick={scanUrl}>Scan</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default App;
