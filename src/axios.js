
import axios from 'axios';


const movies_db = axios.create({ baseURL:  'https://api.themoviedb.org/3'});


export default movies_db;