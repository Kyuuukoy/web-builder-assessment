//header for SECTION
export default function SectionHeading({eyebrow, title}) {
    return (
        <div className="section-heading">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2>{title}</h2>
        </div>
    );
}