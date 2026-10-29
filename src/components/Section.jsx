// Establishing a standard page section
export default function Section({id, tone, flushTop, className = '', children}) {
    const cls = ['section', tone && `section--${tone}`, flushTop && 'section--flush-top', className].filter(Boolean).join(' ');

    return (
        <section id={id} className={cls}>
            <div className="container">
                {children}
            </div>
        </section>
    );
}