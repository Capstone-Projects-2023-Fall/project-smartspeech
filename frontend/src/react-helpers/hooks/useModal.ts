import { useState } from "react";

export type useModalReturnType = [boolean, () => void];

export default function useModal(start: boolean): useModalReturnType {
    const [isOpen, setIsOpen] = useState(start);

    const toggleModal = () => setIsOpen((prev) => !prev);

    return [isOpen, toggleModal];
}
