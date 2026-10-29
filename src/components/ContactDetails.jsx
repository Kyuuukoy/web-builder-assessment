import Card from "./ui/Card";
import Button from "./ui/Button";
import SocialLinks from "./ui/SocialLinks";
import { site } from "../data/content";

export default function ContactDetails() {
    return (
      <Card className="contact-details">
        <h3>
          {site.name} - {site.group}
        </h3>
        <dl>
          <dt>Address</dt>
          <dd>{site.address}</dd>
          <dt>Phone</dt>
          <dd>
            <a href="#">{site.phone}</a>
          </dd>
          <dt>Office Hours</dt>
          <dd>
            {site.hours}
            <br />
            {site.hoursNote}
          </dd>
        </dl>
        <Button href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
          Get Directions
        </Button>
        {/* <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25763.65289311723!2d-115.9738383!3d36.1797755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c639a25ba6af0f%3A0x5c7351dde0fbb39a!2sMarci%20Metzger%20-%20THE%20RIDGE%20REALTY%20GROUP%20-%20B1002787!5e0!3m2!1sen!2sph!4v1793247899993!5m2!1sen!2sph"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div> */}
        <SocialLinks />
      </Card>
    );
}