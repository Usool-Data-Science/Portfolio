import '../index.css';

const SearchBlog = ({ searchPost, setSearchPost }) => {
    return (
        <>
            <form>
                <label htmlFor="SearchPost"></label>
                <input id="SearchPost"
                    type="text"
                    autoFocus
                    placeholder="Type a keyword or chose from the options..."
                    value={searchPost}
                    onChange={e => setSearchPost(e.target.value)}
                />
            </form>
        </>
    )
}

export default SearchBlog