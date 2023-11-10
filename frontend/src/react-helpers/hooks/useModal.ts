import React, { useState } from "react";

export type useModalReturnType = [boolean, () => void];

export default function useModal(): useModalReturnType {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen((prev) => !prev);

    return [isOpen, toggleModal];
}
