"use server";

import data from "./data.json";


const transposeData=(data)=>{


   const returnData= data.map((item)=>{
        Object.keys(item).map(obj=>{
             item[obj.toLowerCase()]=item[obj];
        });
        return item;
    });

    return returnData;
}
export async function getMovies() {

    const tData=transposeData(data.movies);
    return tData;
}
