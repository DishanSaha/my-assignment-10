import { Link, useLoaderData, useNavigate } from "react-router";
import { format } from "date-fns";
import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";


export default function EventDetails() {

  const event = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const containerRef = useRef(null);

  // Animation----
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    );
  }, []);

  const handleJoin = async () => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Please log in first to join the event!",
      });
      return;
    }


    const joinedEvent = {
      // ...event,
      // email: user.email,
      // joinedAt: new Date(),
      eventId: event._id,   // reference the event
      title: event.title,
      type: event.type,
      date: event.date,
      email: user.email,
      joinedAt: new Date(),
    };


    try {
      await axios.post("https://my-assignment-10-sebajatra.vercel.app/joined-events", joinedEvent);
      Swal.fire({
        icon: "success",
        title: "You've successfully joined this event!",
        timer: 2000,
        showConfirmButton: false,
      });
      navigate("/joined-events");
    } catch (error) {
      console.error("Error joining event:", error);
      Swal.fire({
        icon: "warning",
        title: "You have already joined this event!",
        text: "You cannot join the same event twice.",
        confirmButtonColor: "#0fa47d",
      });
    }
  }

  return (
    <div ref={containerRef} className="max-w-4xl mt-20 mb-8 shadow-lg mx-auto bg-base-200 py-10 px-6 sm:px-4">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover rounded-lg mb-6"
      />

      <h2 className="text-3xl text-teal-700 font-bold mb-2">{event.title}</h2>
      <p className="text-gray-600 mb-1">Location: {event.location}</p>
      <p className="text-gray-600 mb-1">Type: {event.type}</p>
      <p className="text-gray-600 mb-1">
        Date: {event.date ? format(new Date(event.date), "PPP") : "Date not available"}
      </p>

      <p className="mt-4 text-gray-700 leading-relaxed">{event.description}</p>
      <Link to='/joined-events'>
        <button onClick={handleJoin} className="mt-6 px-6 py-2 w-full font-medium bg-[#0fa47d] text-white rounded hover:bg-green-700">
          Join Event
        </button >
      </Link>
    </div >
  );
}
