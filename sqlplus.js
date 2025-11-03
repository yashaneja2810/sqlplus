#!/usr/bin/env node

const readline = require('readline');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Hardcoded API key - replace with your actual Gemini API key
const API_KEY = 'AIzaSyA-I1JFigsTZZeB-yZ5OIJDIHNqpfYa1Og';

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'C:\\SQL+> '
});

console.log('Microsoft Windows [Version 10.0.19045.3803]');
console.log('(c) Microsoft Corporation. All rights reserved.\n');
console.log('SQL+ AI Command Processor v1.0.0 - Powered by Gemini');
console.log('Type your message to chat with AI...\n');

rl.prompt();

rl.on('line', async (input) => {
    const message = input.trim();

    if (!message) {
        rl.prompt();
        return;
    }

    if (message.toLowerCase() === 'exit' || message.toLowerCase() === 'quit') {
        console.log('Goodbye!');
        process.exit(0);
    }

    try {
        const result = await model.generateContent(message);
        const response = await result.response;
        console.log('\n' + response.text() + '\n');
    } catch (error) {
        console.log('\nError: ' + error.message + '\n');
    }

    rl.prompt();
}).on('close', () => {
    console.log('\nGoodbye!');
    process.exit(0);
});
