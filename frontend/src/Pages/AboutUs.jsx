import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[65vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="relative text-center text-white px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-200 mb-4">
            About Me
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Yash Kotra</h1>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto">
            A full-stack engineer building elegant e-commerce experiences with
            modern frontend design and robust backend architecture.
          </p>
        </div>
      </div>

      {/* Contact Bar */}
      <section className="bg-white shadow-sm py-8">
        <div className="container mx-auto max-w-6xl px-6 grid gap-4 md:grid-cols-4 text-center md:text-left items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-gray-500 mb-2">
              Phone
            </p>
            <p className="text-base font-semibold text-gray-900">
              +91 7056008838
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-gray-500 mb-2">
              Email
            </p>
            <a
              href="mailto:yash2019kotra@gmail.com"
              className="text-base font-semibold text-gray-900 hover:text-red-600"
            >
              yash2019kotra@gmail.com
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-gray-500 mb-2">
              LinkedIn
            </p>
            <a
              href="https://in.linkedin.com/in/yash-kotra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold text-gray-900 hover:text-red-600"
            >
              linkedin.com/in/yash-kotra
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-gray-500 mb-2">
              GitHub
            </p>
            <a
              href="https://github.com/YashKotra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold text-gray-900 hover:text-red-600"
            >
              github.com/YashKotra
            </a>
          </div>
        </div>
      </section>

      {/* Biography + Education */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I am passionate about crafting scalable, user-friendly web
            applications with thoughtful UI and resilient backend systems. My
            work combines React, Node.js, and database-driven architecture to
            deliver polished e-commerce experiences.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-gray-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-gray-700 leading-relaxed">
                Chandigarh University Mohali, Punjab
                <br />
                Bachelor of Engineering in Computer Science
                <br />
                CGPA: 8.66 / 10
                <br />
                Aug 2023 – July 2027
              </p>
            </div>
            <div className="rounded-3xl bg-gray-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Schooling</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kendriya Vidyalaya No.II Ambala Cantt
                <br />
                Senior Secondary Education (Class 12) — 86.67%
                <br />
                Apr 2022 – March 2023
              </p>
              <p className="text-gray-700 leading-relaxed">
                Kendriya Vidyalaya No.II Ambala Cantt
                <br />
                Secondary Education (Class 10) — 93%
                <br />
                Apr 2019 – March 2020
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-gray-100 p-8 shadow-sm">
          <h3 className="text-3xl font-bold mb-6">Highlights</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="leading-relaxed">
              Skilled in full-stack development, data modeling, and responsive
              UI design.
            </li>
            <li className="leading-relaxed">
              Experienced with e-commerce workflows, payment gateway
              integration, and admin dashboards.
            </li>
            <li className="leading-relaxed">
              Strong foundation in OOP, algorithms, and problem solving.
            </li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Technical Skills
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <p className="text-gray-700">Java, JavaScript, SQL, HTML5, CSS</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Technologies</h3>
              <p className="text-gray-700">
                React.js, Node.js, Express.js, Redux, REST APIs, Tailwind,
                Bootstrap, EJS
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Databases</h3>
              <p className="text-gray-700">MongoDB, MySQL</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Concepts</h3>
              <p className="text-gray-700">
                OOP, Data Structures & Algorithms, Problem Solving, Project
                Management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="space-y-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-200">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">
                  Car Rental Booking Website
                </h3>
                <p className="text-sm uppercase tracking-[0.24em] text-gray-500">
                  Sept 2025 – Dec 2025
                </p>
              </div>
              <div className="text-sm text-red-600 font-semibold">Live</div>
            </div>
            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>
                Built a scalable car rental platform with secure JWT
                authentication and protected routes.
              </li>
              <li>
                Designed end-to-end booking workflow with availability and
                reservation lifecycle management.
              </li>
              <li>
                Developed role-based admin dashboard for inventory, bookings,
                and user management.
              </li>
              <li>
                Integrated Mapbox APIs for precise pickup selection and dynamic
                token handling.
              </li>
              <li>
                Implemented Razorpay payment gateway and optimized media
                delivery via Cloudinary.
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Technologies: React.js, Node.js, Express.js, MongoDB, Redux
              Toolkit, JWT, Razorpay, Vercel.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-200">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">
                  Clothing E-Commerce Website
                </h3>
                <p className="text-sm uppercase tracking-[0.24em] text-gray-500">
                  Aug 2025 – Sept 2025
                </p>
              </div>
              <div className="text-sm text-red-600 font-semibold">Live</div>
            </div>
            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>
                Built a full-stack MERN application with secure JWT and
                role-based access control.
              </li>
              <li>
                Implemented product catalog, cart, wishlist, and order tracking
                features.
              </li>
              <li>
                Integrated Razorpay for secure checkout and optimized media with
                Cloudinary.
              </li>
              <li>
                Developed admin panel for product, order, and user management.
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Technologies: React.js, Node.js, Express.js, MongoDB, Redux
              Toolkit, JWT, Razorpay, Vercel.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-200">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">
                  WanderLust – Hotel Booking Website
                </h3>
                <p className="text-sm uppercase tracking-[0.24em] text-gray-500">
                  June 2025 – July 2025
                </p>
              </div>
              <div className="text-sm text-red-600 font-semibold">Live</div>
            </div>
            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>
                Engineered a hotel booking platform with OAuth authentication
                and secure session management.
              </li>
              <li>
                Enabled location-aware property listings using Mapbox
                geolocation.
              </li>
              <li>Implemented multi-image uploads using Cloudinary.</li>
              <li>
                Designed scalable MVC architecture with middleware and modular
                routing.
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Technologies: Node.js, Express, MongoDB, EJS, Cloudinary, Mapbox,
              Bootstrap, Vercel, OAuth.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Achievements & Roles
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Performance</h3>
              <ul className="space-y-3 text-gray-700 list-disc list-inside">
                <li>
                  Attained 1818 contest rating on LeetCode with 800+ problems
                  solved.
                </li>
                <li>Rated Pupil on Codeforces with a max rating of 1317.</li>
                <li>NPTEL Cloud Computing - Silver Medal (Top 5%).</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">
                Leadership & Honors
              </h3>
              <ul className="space-y-3 text-gray-700 list-disc list-inside">
                <li>NCC ‘A’ Certificate Holder.</li>
                <li>
                  DCPD Class Representative and Academic Class Representative.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Summary CTA */}
      <section className="py-20 px-6 bg-red-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <Sparkles className="mx-auto mb-6 w-14 h-14" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s build something great together.
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            I deliver polished digital products by blending design, development,
            and scalable engineering practices.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-red-600 hover:bg-gray-100 transition"
          >
            Explore the store
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
