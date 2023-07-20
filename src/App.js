import MyCanvas from "./Components/Exp/Elements";
import IntroBox from "./Components/LP/IntroBox";
import Summary from "./Components/LP/Summary";
import WorkExp from "./Components/Exp/WorkExp";
import Cards from "./Components/LP/PokeCards";
import './App.css'

function App() {
  return (
    <div>
      <div className="onePage" style={{display: "flex", flexFlow: "row wrap"}}>
        <div>
          <IntroBox/>
          <Summary/>
        </div>
        <div>
          <Cards/>  
        </div>  
      </div>
      <div className="onePage">
        <WorkExp />
      </div>
    </div>
  );
}

export default App;
