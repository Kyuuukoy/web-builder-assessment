import Section from "./Section";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import {features} from "../data/content";

export default function GetItSold() {
    return (
        <Section id="sold" flushTop>
            <SectionHeading eyebrow="Our Promise" title="Get It Sold"/>
            <div className="card-grid">
                {features.map(({figure, title, text}) => (
                    <Card as="article" key={title}>
                        <span className="feature__figure">{figure}</span>
                        <h3 className="feature__title">{title}</h3>
                        <p className="feature__text">{text}</p>
                    </Card>
                ))}
            </div>
        </Section>
    );
}