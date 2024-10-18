import searchbar from './SearchBar.module.css';

function SearchBar(props) {

    // implement searching with get requests when user clicks button 






    return (
        <form >
            <input className={searchbar.searchbar} value={props.userSearch} onChange={e => props.setSearch(e.value)}></input>
            <button className={searchbar.searchbutton} >Search</button>
        </form>
    );
}

export default SearchBar;