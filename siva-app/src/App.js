import Form from "./form";
import One from "./one";
import Pro from "./pro";
import Use from "./use";

export default function App(){
  let obj={
    name:'siva',
    address:'erode',
    isAlive:true
  }
  return(
    <>
    <div className="d-flex justify-content-around">
    <h1>Hello</h1>

    <One/>
    </div>
    <Use/>
    <Pro a={obj}/>

    <div>
      <Form/>
    </div>
    </>
  )
}