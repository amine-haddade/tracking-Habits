import { Card, CardContent, Chip } from "@mui/material";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import '../../styleTodo.css'
import { GetDataTodo } from '../../_provider/TodoLists'

export default function DatePicker() {
  const {option,lisTodo,setListToDo,selected, setSelected}=GetDataTodo()

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = (
      <div>
        due date is{" "}
        <Chip
        style={{fontSize:'16px'}}
          color="primary"
          variant="filled"
          label={format(selected, "PP")}
        />
      </div>
    );
  }

  return (
    <>
      <Card className="picker-date" style={{ backgroundColor: "#f7f9f9" ,width:"350px"}}>
        <CardContent>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
          />
        </CardContent>
      </Card>
      {/* <h1>hello world{format(selected, "PP")}</h1> */}
    </>
  );
};
