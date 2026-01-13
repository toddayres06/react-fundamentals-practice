import Button from './Button'
import { heroes} from '../data/heroes.js'

function HeroFilter( { roleFilter, setRoleFilter} ) {

    const roles = ["all", "tank", "healer", "bruiser", "ranged assassin"]

    console.log(heroes)
    return (
        <section>
            {roles.map(role => (
                <Button
                    isActive={roleFilter === role}
                    key={role}
                    onClick={() => setRoleFilter(role)}
                    >
                    {role}
                </Button>
            ))}
        </section>
    )
}

export default HeroFilter