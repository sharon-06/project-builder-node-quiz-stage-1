const fs = require("fs")
const question = require('./questions')


//fetch the data from question.js 
fs.writeFileSync("questions.json", JSON.stringify({ questions: [] }))

//append the data to question.json
const questionsJson = JSON.parse(fs.readFileSync("questions.json"))

//append to questions array
questionsJson.questions.push(question())

// updating the json file when new ques added
fs.writeFileSync("questions.json", JSON.stringify(questionsJson))