
import './App.css';

const answer_list= [];   

export function Template(props) {
  const list =[];

  props.ques.forEach((prop,i)=>{
    list.push(<div key={i}><div id={prop}></div><div id={props.opt + prop} data-ques-id={prop} key={i}></div></div>);
  });
  
  function onClickSubmit(event){
    const ans = {
      quiz_id : props.quiz_id,
      ques_ans :answer_list
    };
    event.preventDeafult();
  }

  console.log(props.quiz_id);
  return (
    <div id="App">{props.title}
      <form id={props.quiz_id} onSubmit={onClickSubmit}>
        {list}
        <input type="submit" id={"btn_"+ props.quiz_id} value="submit" name="submit"/>
      </form>
    </div>
  );
}

export function Question(prop) {
  return (          
    <p>{prop.title}</p>  
  );
}

export function Options(props){

  const property = props.title; 
  const list = [];
  
  property.forEach((prop, i) => {
    list.push(<div key={i}><input type="radio" value={prop} name={props.id} key={i}/>{prop}</div>);
  });
 
  function onChangeValue(event) {
    var q_id = props.id;
    answer_list.filter(s => s.ques_id.includes(q_id)).length > 0? answer_list.filter(s => s.ques_id.includes(q_id))[0].answer=  event.target.value:answer_list.push({ ques_id: q_id, answer: event.target.value});
  }
  
  return(
     <div onChange={onChangeValue}>{list}</div>
  );
}
