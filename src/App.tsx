function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-pink-100 p-6">
      
      {/* Glow effects */}
      <div className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>

      {/* Card wrapper with slight top offset */}
      <div className="relative -mt-10 backdrop-blur-xl bg-white/70 shadow-2xl border border-white/40 rounded-3xl p-10 max-w-xl w-full text-center">
        
        <div className="inline-block mb-4 px-4 py-1 bg-black text-white text-xs rounded-full tracking-wide">
          🚀 DEPLOYED ON AWS EC2
        </div>

        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
          React + DevOps Pipeline
        </h1>

        <p className="text-gray-600 mb-6">
          Built with React, automated with GitHub Actions, and deployed on AWS EC2 using Nginx.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            ⚛️ React
          </span>
          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            ☁️ AWS EC2
          </span>
          <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
            ⚡ GitHub Actions
          </span>
          <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
            🌐 Nginx
          </span>
        </div>

        <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
          View Deployment
        </button>

        <p className="text-xs text-gray-400 mt-6">
          CI/CD Pipeline Demo Project
        </p>
      </div>
    </div>
  );
}

export default App;