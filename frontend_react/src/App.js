import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('/server', { question: question });
    setAnswer(response.data.answer);
  };

  return (
    <div>
      <h1>Question-Answering System</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Question:
          <input type="text" value={question} onChange={(event) => setQuestion(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        <strong>Answer:</strong> {answer}
      </div>
    </div>
  );
}

export default App;
