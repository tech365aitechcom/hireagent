import Link from "next/link";
import React from "react";
import { Calendar, Eye } from "lucide-react";

const AssistantCard = ({ assistant, setScheduleModalOpen }) => {
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={assistant.image || "/api/placeholder/400/320"}
          alt={assistant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
            FREE
          </span>
        </div>
      </div>

      <div className="p-6 flex-grow">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 truncate">
            {assistant.name}
          </h2>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2 h-12">
          {assistant.description}
        </p>

        <div className="space-y-4">
          {assistant.category && (
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-sm text-blue-600 bg-blue-50 rounded-full border border-blue-200">
                {assistant.category}
              </span>
            </div>
          )}

          {assistant.integrations && assistant.integrations.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {assistant.integrations.map((integration, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-blue-600 bg-blue-50 rounded-full"
                >
                  {integration}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>By</span>
            <span className="font-medium text-gray-700">
              {assistant.creator?.name}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 flex gap-4 mt-auto">
        <Link
          href={`/all-agents/${generateSlug(assistant.name)}?id=${
            assistant._id
          }`}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors duration-200 flex-1"
        >
          <Eye className="w-4 h-4" />
          <span>View Details</span>
        </Link>

        <button
          onClick={setScheduleModalOpen}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 flex-1"
        >
          <Calendar className="w-4 h-4" />
          <span>Schedule Demo</span>
        </button>
      </div>
    </div>
  );
};

export default AssistantCard;
