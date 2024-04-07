/** Named Component called NamedComponent
 * 
 * Part One: Prompt Two
 */

/** NamedComponent({ name }) 
 * 
 * renders a p that should accept a name prop and display 'My name is {name}'
*/

const NamedComponent = ({ name }) => ( <p>My name is {name}</p> );
// ReactDOM.render(<NamedComponent name="Joe" />, document.getElementById('root'));