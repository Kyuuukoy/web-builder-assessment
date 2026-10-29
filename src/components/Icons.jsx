import Hamburger from "../assets/burger-menu-svgrepo-com.svg?react";

const icons = {
    hamburger: Hamburger,
};

export default function Icon({name, size}) {
    const SelectedIcon = icons[name];

    if (!SelectedIcon) return null;

    return <SelectedIcon width = {size} height = {size} stroke="currentColor"/>;
}