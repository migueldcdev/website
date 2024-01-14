import { Link } from 'react-router-dom'
import { ToggleThemeSwitch } from "./ToggleThemeSwitch"
import { MdApi} from 'react-icons/md'
import { useLocation } from 'react-router-dom' 


export const NavBar = () => {    

    const currentRoute = useLocation().pathname;
    
    

    return(
        <div className='flex justify-between'>
            <div>
                <MdApi className='text-4xl'/>
            </div>
            <div className='flex gap-6 mt-3'>
                <Link to="/" className={currentRoute === "/" ? "underline" : ""}>Home</Link>
                <Link to="/projects" className={currentRoute === "/projects" ? "underline" : ""}>Projects</Link>
                <Link to="/blog" className={currentRoute === "/blog" ? "underline" : ""}>Blog</Link>
            </div>
            <div>
                <ToggleThemeSwitch />
            </div>
            
        </div>
    )

}