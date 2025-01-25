import React, { useState } from 'react';
import aiAgent from '../ai/ai-agent';

const App: React.FC = () => {
    const [userInput, setUserInput] = useState('');
    const [aiResponse, setAiResponse] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const inputArray = userInput.split(',').map(Number);
        const response = aiAgent.runNetwork(inputArray);
        setAiResponse(response.toString());
    };

    return (
        <div className="app-container">
            <h1>AI Agent Interaction</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user-input">Enter Input:</label>
                <input
                    type="text"
                    id="user-input"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="e.g., 1,0"
                />
                <button type="submit">Submit</button>
            </form>
            <div className="response-container">
                <h2>AI Response:</h2>
                <p>{aiResponse}</p>
            </div>
        </div>
    );
};

export default App;
