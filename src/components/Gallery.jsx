import Section from "./Section";
import SectionHeading from "./ui/SectionHeading";
import { gallery } from "../data/content";

export default function Gallery() {
    return (
        <Section id="gallery">
            <SectionHeading eyebrow="Life in Pahrump" title="Photo Gallery" />
            <div className="gallery">
                {gallery.map(({id, label, image}) => (
                    <figure key={id} className={`tile tile--${id}`} style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover'} : undefined}>
                        <figcaption>{label}</figcaption>
                    </figure>
                ))}
            </div>
        </Section>
    );
}