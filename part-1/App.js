/** App Component called App
 * 
 * Part One: Prompt Three
 */

/** App() 
 * 
 * renders a div that should contain both FirstComponent and NamedComponent
 */

const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Joe" />
    </div>
);
ReactDOM.render(<App />, document.getElementById('root'));