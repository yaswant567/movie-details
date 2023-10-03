import axios from "axios";


const apiUrl ='https://api.themoviedb.org/3/search';
const authKey = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDBiNDA5YTE1OTk3MDZkNWFkNGVlYTI1OTkwMjM2YSIsInN1YiI6IjY1MGY5ZTNmZTFmYWVkMDBhZTJmZDJiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W95cxuoye1Wec3gbQ7ELjOemeFW11GxU9qEE_bF8ir4';



export const fetchSearchResults = async(input) =>{
    const url = `${apiUrl}/movie?query=${input}&include_adult=false&language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers:{
            accept: 'application/json',
            Authorization: authKey
        }
    };
    try{
        const response = await axios(url, options);
        console.log("response",response);
        return response;
    }
    catch(error){
        console.error('Error fetching Search Results:', error);
        return (<h2>Error Fetching Search Results</h2>);
    }
}