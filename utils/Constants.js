
import cons1 from "../assets/cons1.png";
import cons2 from "../assets/cons2.png";
import cons3 from "../assets/cons3.png";


import Fac from '../assets/facebook.png';
import Youteb from '../assets/youTube.png';
import Twwiter from '../assets/twwiter.png'
import InstataGram from '../assets/instagram.png'



import img1 from "../assets/our1.png"
import img2 from "../assets/our2.png"
import img3 from "../assets/our3.png"
import img4 from "../assets/our4.png"
import img5 from "../assets/our5.png"
import img6 from "../assets/our6.png"
import img7 from "../assets/our7.png"
import img8 from "../assets/our8.png"
import img9 from "../assets/our9.png"
import img10 from "../assets/our10.png"
import img11 from "../assets/our11.png"
import img12 from "../assets/our12.png"

import work1 from "../assets/work1.png"
import work2 from "../assets/work2.png"
import work3 from "../assets/work3.png"
import work4 from "../assets/work4.png"
import work5 from "../assets/work5.png"


import imgI1 from "../assets/ios.png";
import imgI2 from "../assets/andro.png";
import imgI3 from "../assets/bespro.png";

import Dev1 from "../assets/dev.png"
import Dev2 from "../assets/development2.png"
import Dev3 from "../assets/development3.png"



import imgK1 from "../assets/services1.png"
import imgK2 from "../assets/services2.png"
import imgK3 from "../assets/services3.png"
import imgK4 from "../assets/services4.png"
import imgK5 from "../assets/services5.png"
import imgK6 from "../assets/services6.png"


export let Services = [
    {
        post:'Development_of',
        img:imgK1
    },
    {
        post:'Development_implementation',
        img:imgK2
    },
    {
        post:'User_interface',
        img:imgK3
    },
    {
        post:'Business_It',
        img:imgK4
    },
    {
        post:'IT_consulting',
        img:imgK5
    },
    {
        post:'Information_technology',
        img:imgK6
    },

]

export const NavbarList = [{
  key: 'Direction',
  text: 'Direction',
  id:1
},
{
  key: 'Command',
  text: 'Command',
  id:2
},
{
  key: 'Services',
  text: 'Services',
  id:3
},
{
  key: 'Tools',
  text: 'Tools',
  id:4
  
},
{
  key: 'Clients',
  text: 'Clients',
  id:5
},
{
  key: 'Portfolio',
  text: 'Portfolio',
  id:6
},]


export const FooterList = [{
  text: 'IT_consulting',
  key: "IT_consulting",
  id:7
},

{
  text: 'Development_of',
  key: "Development_of",
  id:8
},

{
  text: 'Development_implementation',
  key: "Development_implementation",
  id:9
},
{
  text: 'User_interface',
  key: "User_interface",
  id:10
},

{
  text: 'Business_It',
  key: "Business_It",
  id:11
},
{
  text: 'Information_technology',
  key: "Information_technology",
  id:12
},
]


export const Our = [
   {
    img:img1
   },
   {
    img:img2
   },
   {
    img:img3
   },
   {
    img:img4
   },
   {
    img:img5
   },
   {
    img:img6
   },
   {
    img:img7
   },
   {
    img:img8
   },
   {
    img:img9
   },
   {
    img:img10
   },
   {
    img:img11
   },
   {
    img:img12
   },
]



export const WorkedList = [
    {
       img:work1,
       title:"Contact",
       text:"Send us your project request or project idea."
    },
    {
       img:work2,
       title:"Analysis",
       text:"We will contact you to clarify your project requirements."
    },
    {
       img:work3,
       title:"Offer",
       text:"We will provide you with our free, non-binding application."
    },
    {
       img:work4,
       title:"Team",
       text:"We provide a team for your requirements."
    },
    {
       img:work5,
       title:"Start",
       text:"You will get to know the team and we'll get started."
    },
]







export const Development = [
    {
        title:"iOS",
        src:imgI1,
        id:1
    },
    {
        title:"Android",
        src:imgI2,
        id:2
    },
    {
        title:"Android",
        src:imgI3,
        id:3
    }
]


export let Dev = [
    {
      text:"Swift",
      img:Dev1
    },
    {
      text:"Kotlin",
      img:Dev2
    },
    {
      text:"Flutter",
      img:Dev3
    }
] 

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