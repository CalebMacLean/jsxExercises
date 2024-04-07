/** Tweet Component
 * 
 * Part Two: Prompt One
 */

/** Tweet(props) 
 * 
 * Takes props:
 * - username: of user who wrote the tweet
 * - name: of user who wrote the tweet
 * - date: when the tweet was written
 * - message: the tweet's message
 * 
 * Renders:
 * - A div with class "tweet"
*/

const Tweet = (props) => {
    const { username, name, date, message } = props;
    return (
        <div className="tweet">
            <p><strong>{name}</strong> <span>@{username}</span> - {date}</p>
            <p>{message}</p>
        </div>
    );
};

// ReactDOM.render(
//     <Tweet username="catperson" name="Cat Person" date="10/1/2021" message="I love cats!" />, 
//     document.getElementById('root')
// );
