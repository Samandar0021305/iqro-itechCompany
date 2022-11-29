import cons1 from "../../assets/cons1.png";
import cons2 from "../../assets/cons2.png";
import cons3 from "../../assets/cons3.png";


import Fac from '../../assets/facebook.png';
import Youteb from '../../assets/youTube.png';
import Twwiter from '../../assets/twwiter.png'
import InstataGram from '../../assets/instagram.png'

export  const inputs = [
    {
        type:"text",
        placeholder:"Name",
        name:"name",
        style:"sm:w-[477px] w-[300px] pt-2 pb-2 pl-2 border-[1px]  border-blackDev mt-[20px] rounded"  
    },
    {
        type:"email",
        name:"email",
        placeholder:"Your email" ,
        style:"sm:w-[477px] w-[300px] pt-2 pb-2 pl-2 border-[1px]  border-blackDev mt-[20px] rounded" 
    },
    {
        type:"text",
        name:"number",
        placeholder:"Your number"  , 
        style:"sm:w-[477px] w-[300px] pt-2 pb-2 pl-2 border-[1px]  border-blackDev mt-[20px] rounded"
    },
    {
        type:"textarea",
        name:"textarea",
        placeholder:"Briefly describe your project",
        style:"sm:w-[477px] w-[300px] pt-2 pb-[40px] pl-2 border-[1px]  border-blackDev mt-[20px] rounded"  
    },
   ]


   export const localization = [
    {
        img:cons1,
        text:"Almalyk city, Tashkent region, Amir Temur-29a",
    },
    {
        img:cons2,
        text:"+998 95 007 70 50",
    },
    {
        img:cons3,
        text:"sardorprogg@gmail.com",
    }
   ]

   export const logo = [Fac, Youteb, Twwiter, InstataGram]