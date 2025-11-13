import { motion } from "framer-motion";
import { Users, Calendar, MapPin, Mail } from "lucide-react";
import ReactiveButton from "reactive-button";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-20 mt-15" >
        <section className="relative bg-[linear-gradient(270deg,rgba(147,248,211,0.5),rgba(15,164,125,0.6),rgba(147,248,211,0.5))]
            bg-200
            animate-gradient-x text-white lg:h-full h-[1350px] flex lg:flex-row flex-col items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-4 grid lg:grid-cols-2 p-5 gap-5">


            {/* Card 1 */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://i.ibb.co.com/8TFfcpB/10-organisations-that-support-childrens-education-1725785828-Ntanh-K4-Zw.jpg"
                alt="Education and Schoolership programme"
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
                <p className="text-white text-[18px] font-medium mb-2">Education and Schoolership programme</p>
                <ReactiveButton color="teal" idleText="Donate" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://i.ibb.co.com/HD07htWp/1803356-1311120718.jpg"
                alt="Sponsor an orphan - Make their dreams come true"
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
                <p className="text-white text-[18px]font-medium mb-2">Sponsor an orphan - Make their dreams come true</p>
                <ReactiveButton color="teal" idleText="Donate" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://i.ibb.co.com/fdzhgtzm/Food.jpg"
                alt="Dry Food Family Package"
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
                <p className="text-white text-[18px] font-medium mb-2">Dry Food Family Package</p>
                <ReactiveButton color="teal" idleText="Donate" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://i.ibb.co.com/VYBGhMgC/ph-53171-206517.jpg"
                alt="Ten taka meal"
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
                <p className="text-white text-[18px] font-medium mb-2">Ten taka meal</p>
                <ReactiveButton color="teal" idleText="Donate" />
              </div>
            </div>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-4 lg:w-1/2"
          >
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
              Team Sebajatra
            </h1>
            <p className="mb-6 text-black/70 text-sm font-light sm:text-lg">A mad passionate group of people working to inspire one nation at a time Sebajatra (Learn for Fun) is an educational voluntary organization originating from Bangladesh.</p>
            <ReactiveButton color="teal" size="large" idleText=" Explore Projects" />

          </motion.div>
        </section>

        {/* ================= Feature Section ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-10 text-teal-700">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users size={36} />,
                title: "Community Building",
                desc: "Connect with local volunteers and social projects.",
              },
              {
                icon: <Calendar size={36} />,
                title: "Event Management",
                desc: "Organize and track upcoming social events easily.",
              },
              {
                icon: <MapPin size={36} />,
                title: "Local Outreach",
                desc: "Find events happening near you and get involved.",
              },
              {
                icon: <Mail size={36} />,
                title: "Stay Informed",
                desc: "Subscribe to newsletters and notifications.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center gap-4 hover:bg-[#d0ffee]"

              >
                <div className="text-[#0fa47d]">{feature.icon}</div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= Gallery Section ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-10  text-teal-700">Event Gallery</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <motion.img
              src="https://i.ibb.co.com/8kM4pjG/second-chance-education-back.jpg"
              alt="Event 1"
              className="rounded-lg object-cover w-full h-48"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="https://i.ibb.co.com/sp1mkjxJ/DSC00257-copy-1-scaled.jpg"
              alt="Event 2"
              className="rounded-lg object-cover w-full h-48"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="https://i.ibb.co.com/nNfC9TbP/bd-dis-4.jpg"
              alt="Event 3"
              className="rounded-lg object-cover w-full h-48"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="https://i.ibb.co.com/NdyV5STt/CBO-CSO-conference-2019-4.jpg"
              alt="Event 4"
              className="rounded-lg object-cover w-full h-48"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="https://i.ibb.co.com/9kLM6qkp/131196-photos-adb-2012-ban-aa-img-8775.jpg"
              alt="Event 5"
              className="rounded-lg object-cover w-full h-48"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="https://i.ibb.co.com/j9QX5sFG/education-in-bangladesh-opt.jpg"
              alt="Event 6"
              className="rounded-lg object-cover w-full h-48"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="https://i.ibb.co.com/wrLZFnBs/istockphoto-870402320-612x612.jpg"
              alt="Event 7"
              className="rounded-lg object-cover w-full h-48"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="https://i.ibb.co.com/4RjdJ5CH/img-9977-1.jpg"
              alt="Event 8"
              className="rounded-lg object-cover w-full h-48"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </section>


        <section className="py-16 bg-[#b2fadf]/20">
          <div className="max-w-6xl mx-auto text-center px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-teal-700 mb-6"
            >
              OUR MISSION
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-700 max-w-2xl mx-auto mb-12"
            >
              Provide support to underprivileged section of the society specially extreme poor, homeless
              and orphan children through quality education, nourishment & shelter to make them
              resources for the nation.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* FOOD */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                  alt="Food icon"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-xl font-semibold text-[#0fa47d] mb-2">FOOD</h3>
                <p className="text-gray-600">
                  We want to inspire a nation with food. Best relation can be created through sharing
                  food.
                </p>
              </motion.div>

              {/* EDUCATION */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
                  alt="Education icon"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-xl font-semibold text-[#0fa47d] mb-2">EDUCATION</h3>
                <p className="text-gray-600">
                  To become a national treasure by offering free education to children and orphans.
                </p>
              </motion.div>

              {/* TREATMENT */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png"
                  alt="Treatment icon"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-xl font-semibold text-[#0fa47d] mb-2">TREATMENT</h3>
                <p className="text-gray-600">
                  To deliver free medicines and health care to underprivileged people.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= Newsletter Section ================= */}
        <section className="bg-[#b2fadf] py-12 flex flex-col items-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl w-full text-center"
          >
            <h2 className="text-2xl text-teal-700 font-bold mb-4">Subscribe to our Newsletter</h2>
            <p className="mb-6 text-sm text-gray-600">Get updates about upcoming events and initiatives directly to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg flex-1 border border-gray-300 bg-white focus:outline-none"
              />
              <button className="bg-[#0fa47d] text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
