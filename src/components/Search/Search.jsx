import css from "./Search.module.css"

function Search () {
    return(
        <div className={css.wrapper}>
                <input type="text" placeholder="Search" autoFocus />
                <button><img src="https://icon-library.com/images/svg-search-icon/svg-search-icon-9.jpg" alt="" /></button>
        </div>
    )
}

export default Search