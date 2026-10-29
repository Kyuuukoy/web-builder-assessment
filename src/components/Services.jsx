import Section from "./Section";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import SocialLinks from "./ui/SocialLinks";
import {services} from "../data/content";

export default function Services() {
    return (
        <Section id="services" tone="band">
            <SectionHeading eyebrow="What You Want Is What You Get" title="Our Services"/>
            <div className="card-grid">
                {services.map(({title, text}, i) => (
                    <Card as="article" key={i}>
                        <h3 className="feature__title">{title}</h3>
                        <p className="feature__text">{text}</p>
                    </Card>
                ))}
            </div>
            <SocialLinks />
        </Section>
    );
}