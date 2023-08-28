// import React from 'react'
// import { useState, useEffect } from 'react';
// import "../SecondSection/Secondsection.css"
// const Secondsection = () => {
//     const [configuration, setConfiguration] = useState(1);
//     const [roundness, setRoundness] = useState(1);
    
//     const [textcollection, settextcollection] = useState( "Brand Strategy");
//     const services = [
       
//         "Brand Design",
//         "Brand Copywriting",
//         "Brand Guidelines ",
//         "Marketing Strategy ",
//         "Digital Advertising",
//         "Social Media Strategy",
//         "Content Marketing ",
//         "Email Marketing",
//         "Search Engine Optimization"
//       ];
    
     
//     const wrapper = document.getElementById("#wrapper");

//     const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    
//     const uniqueRand = (min, max, prev) => {
//       let next = prev;
      
//       while(prev === next) next = rand(min, max);
      
//       return next;
//     }
    
//     const combinations = [
//       { configuration: 1, roundness: 1 },
//       { configuration: 1, roundness: 2 },
//       { configuration: 1, roundness: 4 },
//       { configuration: 2, roundness: 2 },
//       { configuration: 2, roundness: 3 },
//       { configuration: 3, roundness: 3 }
//     ];
    
//     let prev = 0;
    
//   //   const animation = () => setInterval(() => {
//   //     const index = uniqueRand(0, combinations.length - 1, prev),
//   //           combination = combinations[index];
//   //           const randomNum = Math.floor(Math.random() * 10) + 1;
//   //     setConfiguration(combination.configuration);
//   //    setRoundness(combination.roundness) ;
//   //     settextcollection(services[randomNum])
//   //     console.log(textcollection)
//   //     prev = index;
//   //   }, 2000);
//   //   useEffect(() => {
//   //  animation()

//   //   }, [])
    
//   return (
//     <div className='Secondsection'>
//     <div className="text-box"><h3>{textcollection}</h3></div>

// <div id="wrapper" data-configuration={configuration} data-roundness={roundness}>
//   <div className="shape"></div>
//   <div className="shape"></div>
//   <div className="shape"></div>
//   <div className="shape"></div>
//   <div className="shape"></div>
//   <div className="shape"></div>
//   <div className="shape"></div>
// </div>

//     </div>
//   )
// }

// export default 

import React from 'react'

function Secondsection() {
  return (
    <div>Secondsection</div>
  )
}

export default Secondsection