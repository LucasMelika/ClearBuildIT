import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaHome, FaSearch, FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 · Pagina niet gevonden | ClearBuildIT</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <FaExclamationTriangle className="text-green-200 text-9xl opacity-20 absolute -top-4 -left-4" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-12 border-4 border-green-100">
                <div className="text-green-600 text-8xl font-black mb-2">404</div>
                <FaSearch className="text-green-400 text-4xl mx-auto" />
              </div>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-4">
            Pagina niet gevonden
          </h1>
          <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
            Deze pagina bestaat niet (meer) of er is een typefout in de URL. Geen zorgen, we helpen je terug op het juiste pad!
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 hover:shadow-xl transition-all"
            >
              <FaHome /> Terug naar home
            </Link>
            <Link
              to="/diensten"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white border-2 border-green-600 text-green-700 font-semibold shadow hover:bg-green-50 transition-all"
            >
              Bekijk diensten
            </Link>
          </div>

          {/* Suggestions */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <p className="text-sm text-neutral-500 mb-3 font-semibold">Populaire pagina's:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/" className="text-sm text-green-600 hover:text-green-700 underline underline-offset-2">Home</Link>
              <span className="text-neutral-300">•</span>
              <Link to="/diensten" className="text-sm text-green-600 hover:text-green-700 underline underline-offset-2">Diensten</Link>
              <span className="text-neutral-300">•</span>
              <Link to="/demo/saas" className="text-sm text-green-600 hover:text-green-700 underline underline-offset-2">SaaS Demo</Link>
              <span className="text-neutral-300">•</span>
              <Link to="/demo/webapp" className="text-sm text-green-600 hover:text-green-700 underline underline-offset-2">WebApp Demo</Link>
              <span className="text-neutral-300">•</span>
              <Link to="/demo/mobile" className="text-sm text-green-600 hover:text-green-700 underline underline-offset-2">Mobile Demo</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
