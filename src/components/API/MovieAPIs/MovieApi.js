import axios from 'axios';


const apiUrl = 'https://api.themoviedb.org/3';
const authKey = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDBiNDA5YTE1OTk3MDZkNWFkNGVlYTI1OTkwMjM2YSIsInN1YiI6IjY1MGY5ZTNmZTFmYWVkMDBhZTJmZDJiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W95cxuoye1Wec3gbQ7ELjOemeFW11GxU9qEE_bF8ir4'

export const fetchMovieIDs = async(pageNo) =>{
    const url = `${apiUrl}/movie/changes?page=${pageNo}`;
    const options = {
        method: 'GET',
        headers:{
            accept: 'application/json',
            Authorization: authKey
        }
    };
    
    try {
    const response = await axios(url, options);
    const movieIDs = response.data.results;
    return movieIDs;
  } catch (error) {
    console.error('Error fetching movie IDs:', error);
    return [];
  }
}

export const fetchMovieDetails = async(id) =>{
    if(id != null){
      const url = `${apiUrl}/movie/${id}?language=en-US`;
    const options = {
        method: 'GET',
        headers:{
            accept: 'application/json',
            Authorization: authKey
        }
    };
    try {
      const response = await axios(url, options);
      return response
    } catch (error) {
      console.error('Error fetching movie IDs:', error);
      return [];
    }
  }

}