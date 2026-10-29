import Section from "./Section";
import SectionHeading from "./ui/SectionHeading";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

export default function Contact() {
    return (
      <Section id="contact">
        <SectionHeading
          eyebrow="Call or Visit"
          title="Let's talk Real Estate"
        />
        <div className="contact">
          <ContactForm />
          <ContactDetails />
        </div>
      </Section>
    );
}