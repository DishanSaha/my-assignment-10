import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { MapPin } from 'lucide-react';
import axios from 'axios';
import { motion } from "framer-motion";
import Swal from 'sweetalert2';

export default function ManageEvents() {
  const { user, loading } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios.get(`http://localhost:3000/create-event?email=${user.email}`)
        .then(res => {
          setEvents(res.data)
        })
        .catch(error => {
          console.log('Failed to fetch events', error)
        })
    }
  }, [user])

  if (!user) {
    return <p className="text-center mt-10">Please log in to view your joined events.</p>;
  }
  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-spinner text-success w-15 lg:w-30"></span>
    </div>
  }
  if (events.length === 0) {
    return <p className="text-center mt-10">You haven't joined any events yet.</p>;
  }


  const handleUpdate = async (id) => {
    const eventUpdate = events.find(e => e._id === id);

    const { value: formValues } = await Swal.fire({
      title: "Update Event",
      html:
        `<input id="swal-title" class="swal2-input" placeholder="Title" value="${eventUpdate.title}">` +
        `<input id="swal-description" class="swal2-input" placeholder="Description" value="${eventUpdate.description}">` +
        `<input id="swal-location" class="swal2-input" placeholder="Location" value="${eventUpdate.location}">` +
        `<input id="swal-image" class="swal2-input" placeholder="Image URL" value="${eventUpdate.image}">`,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        return {
          title: document.getElementById('swal-title').value,
          description: document.getElementById('swal-description').value,
          location: document.getElementById('swal-location').value,
          image: document.getElementById('swal-image').value,
        };
      }
    });

    if (formValues) {
      const { _id, ...evenData } = {
        ...eventUpdate,
        ...formValues,
        email: user.email
      };

      await axios.put(`http://localhost:3000/create-event/${id}`, evenData);

      Swal.fire("Updated!", "Your event has been updated.", "success");

      // Update UI instantly
      setEvents(events.map(e => e._id === id ? { ...e, ...evenData } : e));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="lg:max-w-[1400px] mx-auto lg:my-20 my-20 lg:p-6 p-3"
    >
      <h2 className="lg:text-4xl text-2xl text-center font-semibold mb-6 text-green-900">
        Your Joined Events
      </h2>

      <motion.ul
        className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:gap-5 gap-3 lg:w-[1350px] w-full mx-auto"
      >
        {events.map((event, index) => (
          <motion.li
            key={event._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="lg:w-80 h-full sm:w-55 w-43 py-3 space-y-4  bg-gray-100 rounded-md shadow-md"
          >
            <div className="relative flex justify-center items-center">
              <img
                src={event.image}
                alt=""
                className="lg:w-[90%] sm:h-35 w-[90%] lg:h-50 h-25 object-cover rounded-lg"
              />

              {/* Date Badge */}
              <div className="absolute top-2 lg:left-5 left-3 bg-white text-[#0fa47d] lg:px-3 lg:py-1 p-1 rounded-md lg:text-sm text-[10px] font-medium shadow-md">
                {new Date(event.date).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
            <div className="px-3 space-y-1">
              <p className="lg:text-sm lg:text-[12px] text-[9px] text-white badge badge-success">{event.type}</p>
              <h3 className="font-bold sm:text-lg lg:text-2xl pl-1">{event.title}</h3>
              <p className="text-gray-600 lg:text-[12px] text-[10px] pl-1 break-words">
                <span className='text-black'> Description :</span> {event.description}
              </p>
              <p className="lg:text-sm text-[12px] flex items-center gap-1"><MapPin /> {event.location}</p>
            </div>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => handleUpdate(event._id)}
                className="btn btn-sm btn-warning text-white"
              >
                Update
              </button>
              <button
                // onClick={() => handleDelete(event._id)}
                className="btn btn-sm btn-error text-white"
              >
                Delete
              </button>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}
