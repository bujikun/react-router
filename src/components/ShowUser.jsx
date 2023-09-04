import { useParams } from "react-router-dom"

const ShowUser = () => {
  //get the id from the url
  //using param name
  const {id}  = useParams();
  return (
    <div>ShowUser : {id} </div>
  )
}
export default ShowUser