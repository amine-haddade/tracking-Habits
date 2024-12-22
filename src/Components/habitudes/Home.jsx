
import TableHabitudes from "./TableHabitudes";
import FormsHabits from "./FormsHabits";
import EditHabitude from "./EditHabitude";
function Home() {

  return (
    <>
      <div id="forms-habits">
        <div  id="row-1">
          <FormsHabits/>
          <EditHabitude/>
        </div>
        <TableHabitudes/>
      </div>
    </>
  )
}

export default Home;

