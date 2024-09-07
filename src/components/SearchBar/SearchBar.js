import searchbar from './SearchBar.module.css';

function SearchBar(props) {
    return (
        <form >
            <input className={searchbar.searchbar} value={props.userSearch} onChange={e => props.setSearch(e.value)}></input>
            <button className={searchbar.searchbutton} >Search</button>
        </form>
    );
}

export default SearchBar;