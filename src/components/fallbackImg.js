"use client";
import {Film} from "lucide-react";
import Image from "next/image";
import {useState} from "react";

const FallbackImg = (props) => {
    const [error,setError] = useState(false);

    return  error? <Film/>: <Image
        src={props.data.poster || props.data.images[0]}
        alt={props.data.title}
        className="rounded-lg w-full h-64 object-cover"
        width={300}
        height={450}
        onError={(e)=>{setError(true)}}
    />
}
export default FallbackImg;
