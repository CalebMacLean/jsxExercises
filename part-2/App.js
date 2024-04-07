/** App Component
 * 
 * Part Two: Prompt Two
 */

/** App()
 * 
 * Renders: three Tweet components
 * - Each with different props
*/

const App = () => {
    return (
        <div>
            <Tweet username="catperson" name="Cat Person" date="10/1/2021" message="I love cats!" />
            <Tweet username="dogperson" name="Dog Person" date="10/2/2021" message="I love dogs!" />
            <Tweet username="birdperson" name="Bird Person" date="10/3/2021" message="I love birds!" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));