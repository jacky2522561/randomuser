
import axios from 'axios';

const getRendomUser = async(amount) =>{
    const URL = 'https://randomuser.me/api/?results=' + amount;
    // console.log(URL);
    const response = await axios.get(URL);
    return response.data.results;
}

export default getRendomUser;