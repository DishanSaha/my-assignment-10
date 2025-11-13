import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { format } from "date-fns";

export default function JoinedEvents() {
  const [joinedEvents, setJoinedEvents] = useState([]);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    const fetchJoinedEvents = async () => {
      try {
        const res = await axios.get(`https://my-assignment-10-sebajatra.vercel.app/joined-events?email=${user.email}`);
        setJoinedEvents(res.data);
      } catch (error) {
        console.error("Error fetching joined events:", error);
      }
    };

    fetchJoinedEvents();
  }, [user]);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-success w-15 lg:w-30"></span>
      </div>
    );
  }

  if (!user) {
    return <p className="text-center mt-20 text-red-500">Please log in to view your joined events.</p>;
  }

  if (joinedEvents.length === 0) {
    return <p className="text-center lg:text-4xl lg:p-50 p-10 mt-20 text-gray-500">You haven't joined any events yet.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-20 px-4 py-10">
      <h2 className="lg:text-4xl text-3xl font-bold text-center mb-8 text-teal-700">
        Joined Events
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {joinedEvents.map((event) => (
          <div key={event._id} className="bg-base-200 shadow-md space-y-2 rounded-lg p-4">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-teal-700">{event.title}</h3>
            <p className="text-gray-600 text-sm">Location: {event.location}</p>
            <p className="text-gray-600 text-sm">Type: {event.type}</p>
            <p className="text-gray-600 text-sm">
              Date: {format(new Date(event.date), "PPP")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
