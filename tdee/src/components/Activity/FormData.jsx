
function FormData(props) {

  let printSomething = () => {
  console.log(props.title)
}

  return(
  <li onClick={printSomething} className="p-2 flex m-2 hover:bg-slate-700 hover:text ">
    <label id="list "className="cursor-pointer">{props.title}</label>
  </li>);
}


export default FormData;
