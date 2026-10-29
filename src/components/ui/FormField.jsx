//creating default Form Field
export default function FormField({label, id, as: Control = "input", className = '', children, ...props}) {
    return (
        <div className={`field ${className}`.trim()}>
            <label htmlFor={id}>{label}</label>
            <Control id={id} name={props.name || id} {...props}>{children}</Control>
        </div>
    );
}