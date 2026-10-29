import {socials} from "../../data/content";

export default function SocialLinks() {
    return (
        <ul className="social">
            {socials.map(({label, href}) => (
                <li key={label}>
                    <a href={href}>{label}</a>
                </li>
            ))}
        </ul>
    );
}