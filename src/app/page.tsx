import Navbar from '@/components/Navbar'
import Herosection from '@/components/Herosection'
import Brandlogos from '@/components/Brandlogos'
import Services from '@/components/Services'
import ContactCTA from '@/components/ContactCTA'
import CTAProve from '@/components/CTAProve'
import WorkflowSection from '@/components/WorkflowSection'
import Teams from '@/components/Teams'
import Testimonials from '@/components/Testimonials'
import Contactus from '@/components/Contactus'
import Footer from '@/components/Footer'


const page = () => {
  return (
    <div className='px-4 lg:px-24'>
       <Navbar />
       <Herosection />
       <Brandlogos />
       <Services/>
       <ContactCTA />
       <CTAProve />
       <WorkflowSection />
       <Teams />
       <Testimonials />
       <Contactus />
       <Footer />
    </div>
  )
}

export default page
