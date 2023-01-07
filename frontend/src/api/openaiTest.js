import { Configuration, OpenAIApi } from "openai";
import React, {button, useState, useEffect} from 'react';
//import {dotenv} from 'dotenv';
//const dotenv = require("dotenv");

export const TestOpenAI = async() =>{
    const configuration = new Configuration({
        apiKey: YOURAPIKEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
        model: "text-ada-001",
        prompt: "Give me a list of 5 hackathon projects that I can do in 24 hours using python",
        temperature: 0.5,
        max_tokens: 120,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
    console.log(response.data.choices[0]);
}

