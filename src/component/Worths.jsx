import { useState, useEffect } from 'react';
import axios from 'axios';

const client = axios.create({
   baseURL: "https://gamerpower.p.rapidapi.com/api/worth",
   headers: {
      'X-RapidAPI-Key': '8525bc412bmsh5b9d590be0c05a6p1c493djsn36c213fb51f9',
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