import { useState } from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import FormField from "./ui/FormField";

export default function ContactForm() {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.elements.email.validity.valid) {
            setStatus('Please enter a valid email address.');
            form.elements.email.focus();
            return;
        }
        const name = form.elements.fullname.value.trim();
        setStatus(`Thank you ${name ? `, ${name}` : ''}! Marci will be in touch soon.`);
        form.reset();
    };

    return (
        <Card as="form" className="contact-form" noValidate onSubmit={handleSubmit}>
            <h3>Send Message</h3>
            <FormField label="Name" id="cn" name="fullname" autoComplete="name"/>
            <FormField label="Email" id="ce" name="email" type="email" required autoComplete="email"/>
            <FormField label="Message" id="cm" name="message" as="textarea"/>
            <Button type="submit">Send</Button>
            <p className="contact-form__status" role="status">{status}</p>
            <p className="contact-form__note">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="#">Privacy Policy</a> and{' '}
                <a href="#">Terms of Service</a> apply.
            </p>
        </Card>
    );
}