import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

export default function CreateEvent() {

  const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !type || !image || !location || !date) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill out all required fields.",
      });
      return;
    }

    if (date < new Date()) {
      Swal.fire({
        icon: "error",
        title: "Invalid Date",
        text: "Event date must be in the future.",
      });
      return;
    }


    Swal.fire({
      icon: "success",
      title: "Event Created!",
      text: "Redirecting to Upcoming Events...",
      timer: 2000,
      showConfirmButton: false,
    });
    setTimeout(() => navigate("/upcoming-events"), 2000);
  };




  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-20 max-w-xl mx-auto p-6 bg-base-200 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-900">Create New Event</h2>

        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />

        <textarea
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        >
          <option value="">Select Event Type</option>
          <option value="Cleanup">Cleanup</option>
          <option value="Plantation">Plantation</option>
          <option value="Donation">Donation</option>
        </select>

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />

        <DatePicker
          selected={date}
          onChange={(d) => setDate(d)}
          className="w-full border p-2 rounded mb-4"
          placeholderText="Select Event Date"
        />

        <button
          type="submit"
          className="w-full font-medium bg-[#0fa47d] text-white py-2 rounded hover:bg-green-700"
        >
          Create Event
        </button>
      </form>
    </div>
  )
}
