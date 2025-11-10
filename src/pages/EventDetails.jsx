import { useLoaderData, useParams } from "react-router";
import { format } from "date-fns";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function EventDetails() {

  const event = useLoaderData();
  const { id } = useParams();
  const eventDetail = parseInt(id);
  const singleData = event.find(event => event.id === eventDetail)



  const containerRef = useRef(null);

  useEffect(() => {

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    );
  }, []);


  return (
    <div ref={containerRef} className="max-w-4xl mt-20 mb-8 shadow-lg mx-auto bg-base-200 py-10 px-6 sm:px-4">
      <img
        src={singleData.image}
        alt={singleData.title}
        className="w-full h-full object-cover rounded-lg mb-6"
      />

      <h2 className="text-3xl text-green-900 font-bold mb-2">{singleData.title}</h2>
      <p className="text-gray-600 mb-1">Location: {singleData.location}</p>
      <p className="text-gray-600 mb-1">Type: {singleData.type}</p>
      <p className="text-gray-600 mb-1">
        Date: {format(new Date(singleData.date), "PPP")}
      </p>

      <p className="mt-4 text-gray-700 leading-relaxed">{singleData.description}</p>

      <div className="mt-6">
        <button className="px-6 py-2 w-full font-medium bg-[#0fa47d] text-white rounded hover:bg-green-700">
          Join Event
        </button>
      </div>
    </div>
  );
}
