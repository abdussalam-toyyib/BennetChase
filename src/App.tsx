import { Layout } from "./components/Layout"
import { About } from "./components/sections/About"
import Contact from "./components/sections/Contact"
import { Hero } from "./components/sections/Hero"
import { Industries } from "./components/sections/Industries"
import Services from "./components/sections/Services"
import Testimonials from "./components/sections/Testimonial"


function App() {

  return (
    <Layout title="Bennet & Chase">
      <Hero />
      <About />
      <Services />
      <Industries />
      <Testimonials />
      <Contact />
    </Layout>
)
  
}

export default App
