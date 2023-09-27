import { useEffect, useState } from "react";

export default function useClientRender() {
    const [renderPage, setRenderPage] = useState(false);

    useEffect(() => {
        setRenderPage(true);
    }, []);

    return renderPage;
}
