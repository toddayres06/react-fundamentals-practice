import { useState } from 'react'
import { heroes } from './data/heroes.js'

import HeroSearch from './components/HeroSearch'
import HeroFilter from './components/HeroFilter'
import HeroList from './components/HeroList'
import HeroDetail from './components/HeroDetail'


function App() {
  const [activeHero, setActiveHero] = useState(null)
  const [roleFilter, setRoleFilter] = useState("all")
  const [searchText, setSearchText] = useState("")

  //   OLDWAY
  // const filteredHeroes =
  //   roleFilter === 'all'
  //   ? heroes
  //   : heroes.filter(hero => hero.role === roleFilter)

  const filteredHeroes = heroes
  .filter(hero => {
    if (roleFilter === "all") return true
    return hero.role === roleFilter
  })
  .filter(hero => {
    if (searchText === "") return true
    return hero.name.toLowerCase().includes(searchText.toLowerCase())
  })

  return (
    <div>
      <h4>Heroes of the Storm</h4>

      <HeroSearch setSearchText={setSearchText} searchText={searchText} />

      <HeroFilter 
        roleFilter={roleFilter}
        setRoleFilter={setRoleFilter}
      />

      <HeroList
        heroes={filteredHeroes}
        activeHero={activeHero}
        setActiveHero={setActiveHero}
      />

      <HeroDetail hero={activeHero} />
    </div>
  )
}

export default App