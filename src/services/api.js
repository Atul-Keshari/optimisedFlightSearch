
import axios from "axios";
import dayjs from "dayjs";

const url="http://localhost:3000";

export default async function searchFlights({from,to,departDate,returnDate}){

    try{
        console.warn(`${url}/search?from=${from}&to=${to}&departDate=${dayjs(departDate).format('YYMMDD')}&returnDate=${dayjs(returnDate).format('YYMMDD')}`);
        const response=await fetch(`${url}/search?from=${from}&to=${to}&departDate=${dayjs(departDate).format('YYMMDD')}&returnDate=${dayjs(returnDate).format('YYMMDD')}`);
        // const result = await response.json()
        // console.log(result,"-0-0-0--0");
        console.warn(response);
        if(response.status!=200){
            console.error('error');
            return {error:"Failed to search ",data:[]};
        }
        return {
            data:await response.json(),
        };
    }
    catch(e){
        console.error(e);
        return {
            error:'Network error',
            data:[],
        };
    }
}