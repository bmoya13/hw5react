import { useState, useEffect } from 'react';
import axios from 'axios';

const client = axios.create({
   baseURL: "https://gamerpower.p.rapidapi.com/api/worth",
   headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
    }
 });

const Worths = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      client.get().then((response) => {
         setPosts(response.data);
      });
   }, []);

   return (
    <div>
      <p>There are currently {posts.active_giveaways_number} giveaways worth around ${posts.worth_estimation_usd}</p>
    </div>
   );
};

export default Worths;