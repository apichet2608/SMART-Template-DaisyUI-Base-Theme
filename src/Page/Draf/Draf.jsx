import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-lg font-bold">Dashboard</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <div className="grid grid-cols-1 gap-4">
          {/* Card Example */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-bold text-xl">Card Title 1</h2>
            <p className="text-gray-700">Some description for card 1.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-bold text-xl">Card Title 2</h2>
            <p className="text-gray-700">Some description for card 2.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-bold text-xl">Card Title 3</h2>
            <p className="text-gray-700">Some description for card 3.</p>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-blue-600 text-white p-4">
        <nav className="flex justify-around">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            Profile
          </a>
          <a href="#" className="hover:text-gray-300">
            Settings
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Dashboard;
