import React from "react";
import LoadingSpinner from "./LoadingSpinner";



export default function LoadingScreenBlocker({ message }: { message: string }) {
    return (
        <div className="z-30 backdrop-blur-md pointer-events-none absolute top-0 left-0 w-full h-full flex gap-3 flex-col justify-center items-center shadow-lg rounded-md">
            <h1 className="text-5xl font-bold">SmartSpeech</h1>
            <LoadingSpinner />
            <h2 className="text-3xl">{message}</h2>
        </div>
    );
}
