import Section from "./Section";
import Card from "./ui/Card";
import Button from "./ui/Button";
import {site, about} from "../data/content";

export default function About() {
    return (
        <Section id="about" flushTop className="about">
            <Card className="profile">
                {site.photo ? (
                    <img className="profile__photo" src={site.photo} alt={site.name}/>
                ) : (
                    <div className="profile__photo profile__photo--monogram" role="img" aria-label={site.name}>
                        MM
                    </div>
                )}
                <div>
                    <h2>{site.name}</h2>
                    <h3 className="profile__tagline">{about.tagline}</h3>
                    <div className="profile__links">
                        <a className="profile__phone" href="#">{site.phoneDashed}</a>
                        <Button href="#">Meet Marci</Button>
                    </div>
                </div>
            </Card>
        </Section>
    );
}