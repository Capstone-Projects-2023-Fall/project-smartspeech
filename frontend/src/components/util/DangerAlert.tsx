import React from "react";

type DangerAlertProps = {
    children: React.ReactNode;
};

export default function DangerAlert(props: DangerAlertProps) {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            {props.children}
        </div>
    );
}
