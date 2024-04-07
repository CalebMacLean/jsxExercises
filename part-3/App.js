/** App Component
 * 
 * Part Three: Prompt Two
 */

/** App()
 * 
 * Renders: Three Person components
 */
const App = () => {
    return (
        <div>
            <Person name="Alice" age={16} hobbies={['baseball', 'reading', 'painting']} />
            <Person name="Bob" age={22} hobbies={['swimming', 'running', 'biking']} />
            <Person name="Charlie" age={30} hobbies={['painting', 'drawing', 'writing']} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));