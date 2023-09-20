import { useState } from "react";
import DOMPurify from "dompurify";

function SanitizedInput() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleDisplay = () => {
    const sanitizedHTML = DOMPurify.sanitize(input);
    setOutput(sanitizedHTML);
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
        placeholder="Enter some text or HTML content"
      />
      <button onClick={handleDisplay}>Display</button>
      <div>
        <h3>Safe Output (Default React behavior):</h3>
        <p>{output}</p>
        <h3>
          Sanitized Output (Using DOMPurify with dangerouslySetInnerHTML):
        </h3>
        <div>
          a hacker tried to execute code using onerror and a error image, and
          was blocked by `dompurify`
        </div>
        <div dangerouslySetInnerHTML={{ __html: output }} />
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default SanitizedInput;
