import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as App from './App';
import reportWebVitals from './reportWebVitals';

const option_keyword = "opt";
const ques_list = [];

const quiz_question = [
    {
        quiz_id:"1",
        quiz_title:"General Quiz",
        questions:[
            {
                ques_id:"Q1",
                question:"How old are you?",
                options:[5,8,12,14]
            },
            
            {
                ques_id:"Q2",
                question:"What are you doing?",
                options:["nothing","busy","talking to you","playing games"]
            },
            
            {
                ques_id:"Q3",
                question:"What's the diameter of the sun?",
                options:["don't know","let me think about it","wait, let me check internet","lame.."]
            }
        ]
    },
    {
        quiz_id:"2",
        quiz_title:"General Knowledge",
        questions:[
            {
                ques_id:"Q1",
                question:"Is your father a scientist?",
                options:["Yes", "No"]
            },
            
            {
                ques_id:"Q2",
                question:"Is your Mother an engineer?",
                options:["Yes", "No"]
            },
            
            {
                ques_id:"Q3",
                question:"Will you encourage your childern to become a doctor?",
                options:["Yes", "No"]
            }
        ]
    }
]


quiz_question.forEach((qus,i)=>{
    if(qus.quiz_id==2)
    {
        qus.questions.forEach((q_id,i)=>{
            ques_list.push(q_id.ques_id);
        });        

        ReactDOM.render(<App.Template title={qus.quiz_title} quiz_id={qus.quiz_id} opt={option_keyword} ques={ques_list}/>, document.getElementById('root'));
        qus.questions.forEach((ques,i)=>{
            ReactDOM.render(<App.Question title={ques.question} />, document.getElementById(ques.ques_id));
            ReactDOM.render(<App.Options title={ques.options} id={ques.ques_id}  />, document.getElementById(option_keyword + ques.ques_id));
        });
    }
});

reportWebVitals();