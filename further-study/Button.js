/** Button Component
 * 
 * Further Study: Prompt One
 */

/** Button()
 * 
 * Creates a button element using prompts to modify it
 * 
 * Properties:
 * - text: string
 * - color: string
 * - size: string
 * 
 * Renders: A button element with the text, color, and size properties
 */
const Button = ({ text, color, size }) => {
    let classes = "";
    color ? classes += `btn-${color} ` : null;
    size ? classes += `btn-${size}` : null;

    return (
        <button className={classes}>{text}</button>
    )
};

ReactDOM.render(<Button text="Click Me" color="green" size="lg" />, document.getElementById('root'));