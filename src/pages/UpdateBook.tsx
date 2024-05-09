import { useParams } from "react-router-dom";

const UpdateBook = () => {
  const { id } = useParams();
  return <div>UpdateBook: {id}</div>;
};

export default UpdateBook;
