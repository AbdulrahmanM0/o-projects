import Card from "./utilies/Card"
import { careers } from "@/data/aboutus"
import JobDetails from "./utilies/JobDetails"

function Job() {
        return (
            <section className='bg-balance border-b border-b-b100'>
                <div className='pt-[15.28vh]'>
                    <Card {...careers[0]}/>
                </div>
                <div>
                    <JobDetails />
                </div>
            </section>
        )
    }

export default Job