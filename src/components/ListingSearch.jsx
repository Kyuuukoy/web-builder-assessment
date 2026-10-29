import Section from "./Section";
import SectionHeading from "./ui/SectionHeading";
import FormField from "./ui/FormField";
import Button from "./ui/Button";
import {searchOptions as opts} from "../data/content";

const Options = ({items}) => items.map((item) => <option key={item}>{item}</option>);

export default function ListingSearch() {
    return (
        <Section id="listings" tone="band">
            <SectionHeading eyebrow="Search Listings" title="Find Your Dream Home"/>
            <form className="search" action="" method="">
                <FormField label="Location" id="loc" name="location" placeholder="City, zip or address"/>
                <FormField label="Type" id="type" as="select"><Options items={opts.types} /></FormField>
                <FormField label="Bedrooms" id="beds" as="select"><Options items={opts.beds} /></FormField>
                <FormField label="Baths" id="baths" as="select"><Options items={opts.baths} /></FormField>
                <FormField label="Min Price" id="min" type="number" min="0" step="1000" inputMode="numeric" placeholder="$"/>
                <FormField label="Max Price" id="max" type="number" min="0" step="1000" inputMode="numeric" placeholder="$"/>
                <FormField label="Sort By" id="sort" as="select" className="search__wide"><Options items={opts.sort}/></FormField>
                <Button type="submit" className="search__submit">Search Now</Button>
            </form>
        </Section>
    );
}