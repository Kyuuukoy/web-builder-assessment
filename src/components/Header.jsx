import { useState } from "react";
import Icon from "./Icons";
import Button from "./ui/Button";
import {site, navLinks} from "../data/content";

// making the header of the page
export default function Header() {
    const [open, setOpen] = useState(false);
    
    return (
        <header className="site-header">
            <div className="container site-header__bar">
                <a className="logo" href="#home">
                    {site.name}
                    <small>{site.group}</small>
                </a>

                <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-nave" area-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
                    <Icon name="hamburger"/>
                </button>

                <nav id="main-nav" className={`nav${open ? ' nav--open' : ''}`} aria-label="Main">
                    <ul className="nav__list" onClick={(e) => e.target.closest('a') && setOpen(false)}>
                        {navLinks.map(({label, href}) => (
                            <li key={label}>
                                <a className="nav__link" href={href}>{label}</a>
                            </li>
                        ))}
                        <li>
                            <Button href="#" size="sm" className="nav__cta">Call Now</Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}