import AIAgent from './ai/ai-agent';

// Initialize the AI agent
const aiAgent = new AIAgent();

// Example of training data
const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
];

// Train the AI agent with the training data
aiAgent.trainNetwork(trainingData);

// Example of running the AI agent with an input
const output = aiAgent.runNetwork([1, 0]);
console.log('Output from AI agent:', output);

// Export the AI agent for use in other parts of the application
export default aiAgent;
