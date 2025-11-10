import { useLoaderData } from 'react-router'
import UpComingEvents from "../pages/UpcomingEvents";
export default function UpEvents() {
    const data = useLoaderData();
    console.log(data);
    return (
        <>
            <h2 className="lg:text-3xl text-2xl text-green-900 font-semibold mb-8 text-center mt-20">
                Upcoming Event
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1440px] mx-auto px-4">
                {
                    data.map(event => <UpComingEvents key={event.id} event={event} />)
                }
            </div>
        </>
    )
}
