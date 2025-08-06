import React from "react"

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-lg shadow p-6 text-center flex flex-col items-center">
    {Icon && <Icon className="h-12 w-12 text-indigo-600 mb-4" />}
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
)

export default ServiceCard
