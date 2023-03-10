// import axios from "axios";
// import React, { useEffect, useRef, useState } from "react";
// import { throttle } from "throttle-debounce";

// interface Airline {
//   id: number;
//   name: string;
//   country: string;
//   logo: string;
//   slogan: string;
//   head_quaters: string;
//   wbsite: string;
//   established: string;
// }

// interface Passenger {
//   _id: string;
//   name: string;
//   tripes: number;
//   airline: Airline;
//   __v: number;
// }

// export default function App() {
//   const listRef = useRef<HTMLUListElement | null>(null);
//   const currentPageRef = useRef<number>(0);

//   const [passengers, setPassengers] = useState<Array<Passenger>>([]);
//   const [isLast, setIsLast] = useState<boolean>(false);
//   const [isScrollBottom, setIsScrollBottom] = useState<boolean>(false);

//   const getPassengers = async (init?: boolean) => {
//     const params = { page: currentPageRef.current, size: 40 };
//     try {
//       const response = await axios.get(
//         "https://api.instantwebtools.net/v1/passenger",
//         { params }
//       );
//       const passengers = response.data.data;
//       const isLast = response.data.totalPages === currentPageRef.current;

//       init
//         ? setPassengers(passengers)
//         : setPassengers((prev) => [...prev, ...passengers]);

//       setPassengers(passengers);
//       setIsLast(isLast);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const handleScroll = throttle(1000, () => {
//     if (listRef.current) {
//       const { scrollHeight, offsetHeight, scrollTop } = listRef.current;

//       const offset = 50;

//       console.log("triger");
//       console.log(scrollHeight, offsetHeight, scrollTop);

//       setIsScrollBottom(scrollHeight - offsetHeight - scrollTop < offset);
//     }
//   });

//   useEffect(() => {
//     if (isScrollBottom) {
//       currentPageRef.current = currentPageRef.current + 1;

//       !isLast && getPassengers();
//     }
//   }, [isScrollBottom, isLast]);

//   useEffect(() => {
//     getPassengers(true);
//   }, []);

//   return (
//     <div className="App">
//       <ul ref={listRef} className="list" onScroll={handleScroll}>
//         {passengers.map((passenger) => (
//           <li className="item" key={passenger._id}>
//             {passenger.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import React from "react";

export default function AppInfinite1() {
  return <div>App-Infinite1</div>;
}
