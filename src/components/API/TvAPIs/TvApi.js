import axios from 'axios';


const apiUrl = 'https://api.themoviedb.org/3';
const authKey = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDBiNDA5YTE1OTk3MDZkNWFkNGVlYTI1OTkwMjM2YSIsInN1YiI6IjY1MGY5ZTNmZTFmYWVkMDBhZTJmZDJiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W95cxuoye1Wec3gbQ7ELjOemeFW11GxU9qEE_bF8ir4'

export const fetchTvIDs = async(pageNo) =>{
    const url = `${apiUrl}/tv/changes?page=${pageNo}`;
    const options = {
        method: 'GET',
        headers:{
            accept: 'application/json',
            Authorization: authKey
        }
    };
    
    try {
    const response = await axios(url, options);
    const TvIDs = response.data.results;
    return TvIDs;
  } catch (error) {
    console.error('Error fetching TV IDs:', error);
    return [];
  }
}

export const fetchTvDetails = async(id) =>{
    if(id != null){
      const url = `${apiUrl}/tv/${id}?language=en-US`;
    const options = {
        method: 'GET',
        headers:{
            accept: 'application/json',
            Authorization: authKey
        }
    };
    return axios(url, options);}
}