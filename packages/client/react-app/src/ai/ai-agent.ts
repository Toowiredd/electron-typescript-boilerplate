import brain from 'brain.js';

class AIAgent {
    private network: brain.NeuralNetwork;

    constructor() {
        this.network = new brain.NeuralNetwork();
    }

    /**
     * Train the neural network with the provided training data.
     * @param trainingData - Array of training data objects with input and output properties.
     */
    trainNetwork(trainingData: { input: any; output: any }[]): void {
        this.network.train(trainingData, {
            iterations: 20000,
            errorThresh: 0.005,
            log: true,
            logPeriod: 10,
            learningRate: 0.3,
        });
    }

    /**
     * Run the neural network with the given input and return the output.
     * @param input - The input data to process.
     * @returns The output from the neural network.
     */
    runNetwork(input: any): any {
        return this.network.run(input);
    }
}

export default AIAgent;
