import { format } from 'date-fns';
import { Link } from 'react-router';

export default function UpcomingEvents({ event }) {

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-8 lg:h-[500px] w-full lg:w-[350px] hover:bg-[#dffcf4]  bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Image Section */}
        <img
          src={event.image}
          alt={event.title}
          className="w-[350px]  h-[120px] md:h-full p-5"
        />

        {/* Content Section */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-green-900">
              {event.title}
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Type: <span className="font-medium">{event.type}</span>
            </p>

            <p className="text-sm text-gray-600 mt-1">
              Date: {format(new Date(event.date), "PPP")}
            </p>
          </div>
          <Link className="mt-6 w-full font-medium bg-[#0fa47d] text-white py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300 text-center" to={`/events/${event.id}`}>View Event</Link>
        </div>
      </div>
    </div>
  )
}
