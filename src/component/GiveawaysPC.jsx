import { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Giveaways.css"

const client = axios.create({
   baseURL: "https://gamerpower.p.rapidapi.com/api/filter",
   params: {
    platform: 'pc',
    type: 'game.loot',
    'sort-by': 'value'
   },
   headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
    }
 });

const GiveawaysPC = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      client.get().then((response) => {
         setPosts(response.data);
      });
   }, []);

   return (
    <div>
      {posts.map((post) => {
        return (
            <div className="givecontainer">
                <img className="giveimage" src={post.image} alt="Game Giveaway Icon"/>
                <div className="givecontent">
                    <h2 className="givetitle">{post.title}</h2>
                    <h3>{post.worth}</h3>
                    <p className="givedesc">{post.description}</p>
                    <br></br>
                    <p className="givedesc" id="instruction">{post.instructions}</p>
                    <br></br>
                    <a href={post.open_giveaway_url} target="_blank" rel="noreferrer" id="givelink">Open Giveaway!</a>
                </div>
            </div>
        )
    })}
    </div>
   );
};

export default GiveawaysPC;