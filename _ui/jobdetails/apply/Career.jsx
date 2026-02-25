import Card from "@/_ui/jobdetails/job/utilies/Card";
import { careers } from "@/data/aboutus"
import Form from "./Form";

export default function Career() {

    return (
        <section className='bg-balance border-b border-b-b100'>
            <div className="max-w-[82.45vw] mx-auto pb-clamp-100">
                <div className='pt-[15.28vh] mb-clamp-28'>
                    <Card {...careers[0]} showBtn={false} />
                </div>
                <div>
                    <Form />
                </div>
            </div>
        </section>
    );
}
