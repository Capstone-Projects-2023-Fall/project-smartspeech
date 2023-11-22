import { useEffect, useState } from "react";

function useDebouncedState<T>(initialValue: T, delay = 500) {
    const [value, setValue] = useState<T>(initialValue);
    const [isChangingValue, setIsChangingValue] = useState(true);

    useEffect(() => {
        setIsChangingValue(true);

        console.log("Inside effect")

        const timeoutId = setTimeout(() => {
            setIsChangingValue(false);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [value, delay]);

    return isChangingValue;
}

export default useDebouncedState;
