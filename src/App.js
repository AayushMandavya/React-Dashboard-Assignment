import Data from "../src/Data.json";
import './App.css';
import Header from './Components/Header';
import Action from "./Components/Action";
import Position from "./Components/Position";
import Status from "./Components/Status";
import Download from "./Components/Download";
import Name from "./Components/Name";

function App() {
  return (
  <div className="container">
  <Header/>

  {Data.users.map((user)=>(
    
    <div className="Data__list">
      <input type="checkbox"></input>
      <Name fullName={user.full_name} />
      <Position position={user.designation} />
      <Status status={user.active_status} />
      <Download
          download_total={user.download_completed_rate.total}
          download_complete={user.download_completed_rate.completed}
          download_size={user.download_completed_rate.size_type}
      />

      <Action action={user.invited_status} />
    </div>
    
))}
  </div>
  );
}

export default App;
