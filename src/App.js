import IntroBox from "./Components/LP/IntroBox";
import Summary from "./Components/LP/Summary";
import WorkExp from "./Components/Exp/WorkExp";
import Cards from "./Components/LP/PokeCards";
import './App.css'

function App() {
  return (
    <div className="App">
      <div style={{display: "flex", flexFlow: "row wrap"}}>
        <div>
          <IntroBox/>
          <Summary/>
        </div>
        <div>
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
