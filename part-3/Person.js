/** Persone Component
 * 
 * Part Three: Prompt One
 */

/** Person() 
 * 
 * Properties:
 * - name: string
 * - age: number
 * - hobbies: array of strings
 * 
 * Renders:
 * - A p element which displays "Learn some information about this person".
*/
const Person = ({ name, age, hobbies }) => {
    // If the age >= 18, display h3 "please go vote"
    // Else display h3 "you must be 18"
    const voteMsg = age >= 18 ? <h3>Please go vote!</h3> : <h3>You must be 18!</h3>;

    // If the name is > 8 characters, display the first six characters
    // Else display the name
    const displayName = name.length > 8 ? name.slice(0, 6) : name;

    return (
        <div>
            <h2>{ displayName }</h2>
            <p>Learn some information about this person</p>
            { voteMsg }
            <h3>Hobbies:</h3>
            <ul>
                { hobbies.map(h => <li key={h}>{ h }</li>) }
            </ul>
        </div>
    );
};

// ReactDOM.render(<Person name="Alice" age={16} hobbies={['baseball', 'reading', 'painting']} />, document.getElementById('root'));