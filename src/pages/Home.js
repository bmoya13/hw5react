import logo from '../controller.png';
import '../styles/App.css';
import Worths from '../component/Worths';


const Home = () => {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <code>Welcome to Game Giveaway Grouper!</code>
            </p>
            <Worths />
          </header>
        </div>
      );
  };
  
  export default Home;