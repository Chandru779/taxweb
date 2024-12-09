// import Layout from "@/components/layout/Layout"

// import About from "@/components/homepages/home1/About"
// import About2 from "@/components/homepages/home1/About2"
// import Blog from "@/components/homepages/home1/Blog"
// import CaseStudy from "@/components/homepages/home1/CaseStudy"
// import Pricing from "@/components/homepages/home1/Pricing"
// import Subscribe from "@/components/homepages/home1/Subscribe"
// import TaxBusiness from "@/components/homepages/home1/TaxBusiness"
// import Testimonial from "@/components/homepages/home1/Testimonial"
// import Welcome from "@/components/homepages/home1/Welcome"
// export default function Page() {

//     return (
//         <>

//             <Layout headerStyle={1} footerStyle={1}>
//                 <Welcome />
//                 <TaxBusiness />
//                 <About />
//                 <About2 />
//                 <CaseStudy />
//                 <Pricing />
//                 <Testimonial />
//                 <Blog />
//                 <Subscribe />
//             </Layout>
//         </>
//     )
// }




// Instead of default page kept page6 as a default page

import About from "@/components/homepages/home6/About"
import Brand from "@/components/homepages/home6/Brand"
import Contact from "@/components/homepages/home6/Contact"
import Customers from "@/components/homepages/home6/Customers"
import Experience from "@/components/homepages/home6/Experience"
import HowItWork from "@/components/homepages/home6/HowItWork"
import Resive from "@/components/homepages/home6/Resive"
import Service from "@/components/homepages/home6/Service"
import Welcome from "@/components/homepages/home6/Welcome"
import Layout from "@/components/layout/Layout"
export default function Page() {
 
    return (
        <>

            <Layout >
                <Welcome />
                <Brand />
                <About />
                <HowItWork />
                <Resive />
                <Service />
                <Experience />
                <Customers />
                <Contact />
            </Layout>
        </>
    )
}