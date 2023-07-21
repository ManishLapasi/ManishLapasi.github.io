import IntroBox from "./Components/LP/IntroBox";
import Summary from "./Components/LP/Summary";
import WorkExp from "./Components/Exp/WorkExp";
import Cards from "./Components/LP/PokeCards";
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="pageOne" style={{display: "flex", flexFlow: "row wrap"}}>
        <div style={{flexBasis: "50%", flexGrow: 0, alignItems: "center"}}>
          <IntroBox/>
          <Summary/>
        </div>
        <div style={{flexBasis: "50%", flexGrow: 0, alignItems: "center"}}>
          <Cards/>  
        </div>  
      </div>
      <div >
        <WorkExp />
      </div>
    </div>
  );
}

export default App;
