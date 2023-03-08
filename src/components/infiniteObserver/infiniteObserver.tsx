import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import useIntersectionObserver from "./useIntersectionObserver";

interface Airline {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quaters: string;
  wbsite: string;
  established: string;
}

interface Passenger {
  _id: string;
  name: string;
  tripes: number;
  airline: Airline;
  __v: number;
}

interface Props {
  isLastItem: boolean;
  onFetchMorePassengers: () => void;
}

const Passenger: React.FC<React.PropsWithChildren<Props>> = ({
  isLastItem,
  onFetchMorePassengers,
  children,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isIntersecting = !!entry?.isIntersecting;

  useEffect(() => {
    isLastItem && isIntersecting && onFetchMorePassengers();
  }, [isLastItem, isIntersecting]);
  return (
    <div
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        border: "1px solid black",
      }}
    >
      <div style={{ margin: "auto" }}>{children}</div>
    </div>
  );
};

export default function InfiniteScroll() {
  const [paseengers, setPaseengers] = useState<Array<Passenger>>([]);
  const [page, setPage] = useState<number>(0);
  const [isLast, setIsLast] = useState<boolean>(false);

  const getPassengers = async () => {
    const params = { page, size: 10 };

    try {
      const res = await axios.get(
        "https://api.instantwebtools.net/v1/passenger",
        { params }
      );

      const passengers = res.data.data;
      const isLast = res.data.totalPages === page;

      setPaseengers((prev) => [...prev, ...passengers]);
      setIsLast(isLast);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    !isLast && getPassengers();
  }, [page]);

  return (
    <div className="App">
      {paseengers.map((paseenger, idx) => (
        <Passenger
          key={paseenger._id}
          isLastItem={paseengers.length - 1 === idx}
          onFetchMorePassengers={() => setPage((prev) => prev + 1)}
        >
          {paseenger.name}
        </Passenger>
      ))}
    </div>
  );
}
