import '../styles/Display.css';
import GiveawaysSW from "../component/GiveawaysSW";

const DisplaySW = () => {
    return (
        <div className="App">
          <header className="displayheader">
            <code>Giveaways for Switch</code>
          </header>
          <GiveawaysSW />
        </div>
      );
  };
  
  export default DisplaySW;