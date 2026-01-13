function HeroDetail( {hero} ) {
    if(!hero) return (
        <p>No Hero Selected</p>
    )

    return (
        <div>
            <h4>{hero.name}'s Abilities</h4>
            <ul>
                {hero.abilities.map((ability, index) => (
                    <li key={index}>{ability}</li>
                ))}
            </ul>
        </div>
    )
}

export default HeroDetail
            

