import '../styles/Display.css';
import GiveawaysPC from "../component/GiveawaysPC";

const DisplayPC = () => {
    return (
        <div className="App">
          <header className="displayheader">
            <code>Giveaways for PC</code>
          </header>
          <GiveawaysPC />
        </div>
      );
  };
  
  export default DisplayPC;