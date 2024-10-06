import '../index.css';

const SearchProject = ({ searchProject, setSearchProject }) => {
    return (
        <>
            <form>
                <label htmlFor="SearchProject"></label>
                <input id="SearchProject"
                    type="text"
                    autoFocus
                    placeholder="Type a keyword or chose from the options..."
                    value={searchProject}
                    onChange={e => setSearchProject(e.target.value)}
                />
            </form>
        </>
    )
}

export default SearchProject