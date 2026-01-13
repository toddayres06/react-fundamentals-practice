function HeroList( {heroes, activeHero, setActiveHero} ) {
    return (
        <div>
            <ul>
                {heroes.map(hero => (
                    <li 
                        key={hero.id}
                        onClick={() => setActiveHero(hero)}
                        style={{
                            fontWeight: activeHero?.id === hero.id ? "bold" : "normal" 
                        }}
                        >{hero.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HeroList