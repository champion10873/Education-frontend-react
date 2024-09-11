import ChartMonth from "../../components/Student/ChartMonth";
import ChartWeek from "../../components/Student/ChartWeek";
import CastConnectedOutlinedIcon from "@mui/icons-material/CastConnectedOutlined";
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';

const Dashboard = () => {
  return (
    <div className="m-10 p-40">
      <div className="grid grid-cols-2 gap-20 mb-10">
        <div className="flex bg-white items-center p-10 gap-10">
          <div className="bg-gray-300 p-3">
            <CastConnectedOutlinedIcon className="text-sky-800" />
          </div>
          <div>
            <div>Jogos finalizados pelos alunas</div>
            <div>1 Jogos</div>
          </div>
        </div>
        <div>
          <div className="flex bg-white items-center p-10 gap-10">
            <div className="bg-gray-300 p-3">
              <WatchOutlinedIcon className="text-sky-800" />
            </div>
            <div>
              <div>Jogos finalizados pelos alunas</div>
              <div>1 Jogos</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-20 h-80">
        <ChartWeek />
        <ChartMonth />
      </div>
    </div>
  );
};

export default Dashboard;
