import { useState } from "react";

function XSSDemo() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleDisplay = () => {
    setOutput(input);
  };

  return (
    <div>
      <p>
        input the following img code into the text field and click the Display
        button:
      </p>
      <p>
        <code>&lt;img src="x" onerror="alert('XSS Attack!')" /&gt;</code>
      </p>

      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter some text"
      />
      <button onClick={handleDisplay}>Display</button>
      <div>
        <h3>Safe Output (Default React behavior):</h3>
        <p>{output}</p>
        <h3>Unsafe Output (Using dangerouslySetInnerHTML):</h3>
        <div dangerouslySetInnerHTML={{ __html: output }} />
      </div>
    </div>
  );
}

export default XSSDemo;
