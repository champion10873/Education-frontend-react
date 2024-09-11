import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useDispatch } from "../store/index";
import { deleteQuestions } from "../store/reducers/questiondata";

const QuestionCard = (props) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteQuestions(props.id));
  }
  return (
    <div>
      <div>
        <div className="flex justify-between bg-white py-5 px-10 rounded-xl m-2">
          <div className="flex w-[100%]">
            <div className="w-[5%]">{props.No}</div>
            <div className="w-[15%]">{props.topic}</div>
            <div className="w-[20%]">{props.title}</div>
            <div className="w-[45%] truncate">{props.description}</div>
            <div className="w-[15%]">{props.level}</div>
          </div>
          <div className="flex items-center gap-5 ">
            <div className="cursor-pointer" onClick={handleDelete}>
              <DeleteForeverOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
