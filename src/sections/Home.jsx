// Ana sayfa section'ı
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Contact from '../components/Contact'
import { Header } from '../components'

const Home = () => {
    return (
        <>
            
            <Hero />
            <About />
            <Services />
            <Projects />
            <Contact />
        </>
    )
}

export default Home

