import Button from "./ui/Button";
import {hero, site} from "../data/content";

// establishing Hero or Primary content
export default function Hero() {
    return (
        <div className="hero">
            <svg viewBox="0 0 1440 300" preserveAspectRatio="none" aria-hidden="true">
                <path fill="#3a3550" opacity=".6" d="M0 300V170l180-80 160 90 220-120 200 110 240-130 220 120 220-70v210z" />
                <path fill="#1a2230" d="M0 300V230l240-70 200 60 260-100 240 90 280-70 220 60v100z" />
            </svg>
            <div className="container hero__content">
                <p className="eyebrow">{hero.eyebrow}</p>
                <h1>{hero.title}</h1>
                <p className="hero__text">{hero.text}</p>
                <Button href="#" variant="light">Call Now</Button>
            </div>
        </div>
    );
}