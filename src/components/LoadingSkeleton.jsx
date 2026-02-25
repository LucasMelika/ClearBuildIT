import React, { useState, useEffect } from 'react';
import { FaBell, FaFileInvoice, FaChartBar, FaExchangeAlt, FaUsers, FaCog, FaFileAlt } from 'react-icons/fa';

// Loading Skeleton Component
function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Sidebar skeleton */}
        <div className="flex gap-6">
          <div className="hidden lg:block w-64 space-y-2">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-12 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
          {/* Main content skeleton */}
          <div className="flex-1 space-y-6">
            <div className="h-10 bg-gray-200 rounded w-1/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-32 bg-gray-200 rounded-2xl"></div>
              ))}
            </div>
            <div className="h-64 bg-gray-200 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingSkeleton;
