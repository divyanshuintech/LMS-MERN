import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section class="bg-white h-screen flex items-center">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500 text-red-600">
            404
          </h1>
          <p class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Page Not Found
          </p>
          <button
            onClick={() => navigate("/table")}
            class="text-white bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
