import Photo from "../assets/rs=w_730,h_730,cg_true.webp";
import Gal1 from "../assets/001.webp";
import Gal2 from "../assets/002.webp";
import Gal3 from "../assets/003.webp";
import Gal4 from "../assets/004.webp";
import Gal5 from "../assets/005.webp";
import Gal6 from "../assets/006.webp";

// data contents for website
export const site = {
    name: 'Marci Metzger',
    group: 'The Ridge Realty Group',
    phone: '(206) 919-6886',
    phoneDashed: '206-919-6886',
    photo: Photo,
    address: '3190 NV-160 Ste F, Pahrump, NV 89048, United States',
    mapsUrl: 'https://maps.app.goo.gl/6Abiknp4QPiv7Q9h8',
    hours: 'Open daily 8:00 am - 7:00 pm',
    hoursNote: 'Appointments outside office hourse available upon request. Just call!',
    year: 2026,
};

export const navLinks = [
    {label: 'Home', href: '#home'},
    {label: 'Listings', href: '#listings'},
    {label: "Let's Move", href: '#'},
    {label: 'About Us', href: '#about'},
    {label: 'Services', href: '#services'},
    {label: 'Contact', href: '#contact'},
];

export const hero = {
    eyebrow: 'Marci Metzger - The Ridge Realty Group',
    title: 'Pahrump Realtor',
    text: "Over two decades in real estate. Licensed Broker in Seattle, now serving Southern Nevada as Pahrump's top real estate agent.",
};

export const about = {
    tagline: 'REALTOR FOR NEARLY 3 DECADES'
};

export const features = [
    {
        figure: '$28.5M',
        title: 'Top Residential Sales Last 5 Years',
        text: 'We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.',
    },
    {
        figure: '01',
        title: "Don't Just List it...",
        text: 'Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.',
    },
    {
        figure: '02',
        title: 'Guide to Buyers',
        text: 'Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!',
    },
];

export const searchOptions = {
    types: ['Any Type', 'House', 'Condo / Townhome', 'Land', 'Commercial'],
    beds: ['Any Number', 'Studio', '1+', '2+', '3+', '4+', '5+', '6+'],
    baths: ['Any Number', '1+', '2+', '3+', '4+', '5+', '6+'],
    sort: [
        'Newest',
        'Oldest',
        'Least Expensive to Most',
        'Most Expensive to Least',
        'Bedrooms (Low to High)',
        'Bedrooms (High to Low)',
        'Bathrooms (Low to High)',
        'Bathrooms (High to Low)'
    ],
};

export const gallery = [
    {id: 1, label: 'Mountain Falls Golf Course Community', image: Gal1 },
    {id: 2, label: 'A living area featuring a large red leather recliner', image: Gal2 },
    {id: 3, label: 'A single-family residential home located at 5570 E Ailanto Ave, Pahrump, NV 89061', image: Gal3 },
    {id: 4, label: 'A property located at 7300 Afternoon St, Las Vegas, NV 89131', image: Gal4 },
    {id: 5, label: 'Ovation at Mountain Falls', image: Gal5 },
    {id: 6, label: 'Pickleball/tennis courts of Ovation at Mountain Falls', image: Gal6 },
];

export const services = [
    {
        title: 'Real Estate Done Right',
        text: "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    },
    {
        title: 'Commercial & Residential',
        text: "Large or small, condo or mansion, we can find it and get it at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.",
    },
    {
        title: 'Rely on Expertise',
        text: 'If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.',
    },
];

export const socials = [
    {label: 'Facebook', href: '#'},
    {label: 'Instagram', href: '#'},
    {label: 'LinkedIn', href: '#'},
    {label: 'Yelp', href: '#'},
];