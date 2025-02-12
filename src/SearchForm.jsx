function SearchForm () {

 const handleSubmit = (e) =>{
    e.prevenyDefault();
    const searchValue = e.target.elements.search.value
    if(!searchValue) return
 };

    return(
        <section>
           <h1 className="titile">Unsplash Images</h1> 
           <form className="search-form" onSubmit={handleSubmit}>
            <input type="text" className="form-input search-input" 
            name="search" placeholder="cat" />
            <button type="submit" className="btn">
                search
            </button>

           </form>
        </section>
    );
}

export default SearchForm