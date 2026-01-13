function HeroSearch( { searchText, setSearchText} ) {

    return (
        <div>
            <input 
                value={searchText} 
                placeholder="Search hero by name here..."
                onChange={(e) => setSearchText(e.target.value)}/>
        </div>
    )
}

export default HeroSearch