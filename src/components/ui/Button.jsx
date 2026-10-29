// Making the default button
export default function Button({href, variant = "primary", size = "md", className = '', children, ...rest}) {
    const cls = `btn btn--${variant} btn--${size} ${className}`.trim();
    if (href) {
        return <a className={cls} href={href} {...rest}>{children}</a>;
    }
    return <button className={cls} type="button">{children}</button>;
}