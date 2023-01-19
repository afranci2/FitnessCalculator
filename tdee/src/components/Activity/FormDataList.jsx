import FormData from "./FormData";

function FormDataList(props) {
  return(
        <ul>
            {props.activities.map((activity) => (
            <FormData key={activity.id} title={activity.title}/>
            ))}
        </ul>
  )
}

export default FormDataList;
