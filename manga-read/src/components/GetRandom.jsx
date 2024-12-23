import axios from 'axios';
import { Base_URL } from './BaseUrl';

export default function GetRandom(){

    async () => {
        const response = await axios(`${Base_URL}/manga/random`);
        const data =  response.json();
        console.log(data);
        console.log("nsjfne")
    }


    return <div>
     Hell
    </div>
}