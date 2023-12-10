import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

type useProtectedPageRouteProps = {
    rerouteAddr: string;
};

/**
 * hook checks if user is `unauthenticated`. If this is true they are rerouted to the arugment passed in
 * @param props needs to be in the form 
 * ```ts
 * {
    	rerouteAddr: string;
	};
 * ```
 * where rerouteAddr is used to bring the user back to a unprotected page
 */
export default function useProtectedPageRoute(props: useProtectedPageRouteProps) {
    const router = useRouter();
    const { status } = useSession();

    useEffect(() => {
        if (status !== "unauthenticated") return;
        router.push(props.rerouteAddr);
    }, [router]);
}
