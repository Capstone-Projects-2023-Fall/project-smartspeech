import { useEffect, useState } from "react";

export default function useTimedIncrement(incrementTime: number = 5000, start: number = 0) {
    const [number, setNumber] = useState(start);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the number every 5000 ms
            setNumber((prevNumber) => prevNumber + 1);
        }, incrementTime);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    return number;
}
