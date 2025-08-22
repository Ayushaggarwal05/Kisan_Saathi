import WeatherCard from "../components/WeatherCard";
import PlantUploader from "../components/PlantUploader";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { UserContext } from "../context/UserProvider";

// Testing Git push - Ayush

const HomePage = () => {
  const { user } = useContext(UserContext);

  // Mock data for overview cards
  const overviewData = {
    farmStatus: {
      title: "Farm Status",
      value: "Healthy",
      status: "good",
      icon: "🌱",
      description: "All crops are growing well",
    },
    pestAlerts: {
      title: "Pest Alerts",
      value: "2 Active",
      status: "warning",
      icon: "🚨",
      description: "Brown spot detected in rice field",
    },
    weatherSnapshot: {
      title: "Weather Snapshot",
      value: "28°C",
      status: "info",
      icon: "☀️",
      description: "Sunny with 60% humidity",
    },
  };

  const getStatusColor = (status) => {
    const colors = {
      good: "bg-green-100 text-green-800 border-green-200",
      warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
      danger: "bg-red-100 text-red-800 border-red-200",
      info: "bg-blue-100 text-blue-800 border-blue-200",
    };
    return colors[status] || colors.info;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-lg">
              Welcome to Kisan Saathi
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-green-100 drop-shadow-md max-w-4xl mx-auto">
              Har Kisan ka Digital Saathi
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {user ? (
                <Link
                  to="/farmer"
                  className="bg-white text-farm-dark-green font-bold py-4 px-10 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                  Get Started
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="bg-white text-farm-dark-green font-bold py-4 px-10 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                  Get Started
                </Link>
              )}

              <Link
                to="/learn-more"
                className="border-2 border-white text-white font-bold py-4 px-10 rounded-xl hover:bg-white hover:text-farm-dark-green transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Cards Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Farm Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {Object.entries(overviewData).map(([key, data]) => (
              <div
                key={key}
                className="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{data.icon}</div>
                  <span
                    className={`px-3 py-2 rounded-full text-sm font-medium border ${getStatusColor(
                      data.status
                    )}`}>
                    {data.value}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {data.title}
                </h3>
                <p className="text-gray-600 text-lg">{data.description}</p>
              </div>
            ))}
          </div>
          {/* Main card area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column → Weather + Recommendations */}
            <div className="grid gap-6">
              <WeatherCard />

              <div className="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  🌱 Recommended Crops
                </h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-center gap-2">
                    <span>🌾</span> Rice – Good for current season
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🌿</span> Wheat – Suitable for dry weather
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🍅</span> Tomato – Best for humid regions
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column → Plant Uploader */}
            <div className="flex items-start justify-center">
              <div className="w-full max-w-xl">
                <PlantUploader />
              </div>
            </div>
          </div>

          {/* Market Prices */}

          {/* <div className="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                📊 Market Price Trends
              </h3>
              <table className="w-full text-left border-collapse text-lg">
                <thead>
                  <tr className="border-b text-gray-600">
                    <th className="py-2">Crop</th>
                    <th className="py-2">Price (₹/kg)</th>
                    <th className="py-2">Market</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Rice</td>
                    <td className="py-2">₹35</td>
                    <td className="py-2">Delhi</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Wheat</td>
                    <td className="py-2">₹28</td>
                    <td className="py-2">Lucknow</td>
                  </tr>
                  <tr>
                    <td className="py-2">Tomato</td>
                    <td className="py-2">₹50</td>
                    <td className="py-2">Kanpur</td>
                  </tr>
                </tbody>
              </table>
            </div> */}

          {/* Features Section */}
          <div className="section-gradient rounded-3xl p-12 mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
              Why Choose Kisan Saathi?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-6xl mb-6">🤖</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  AI-Powered Analysis
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Advanced machine learning algorithms detect diseases and pests
                  with high accuracy
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-6">📱</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Easy to Use
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Simple photo upload and instant results. No technical
                  knowledge required
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-6">🌱</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Sustainable Solutions
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Eco-friendly recommendations that protect your crops and the
                  environment
                </p>
              </div>
            </div>
          </div>
          {/* Quick Stats */}
          <div className="card mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
              Platform Statistics
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-farm-green mb-3">
                  10,000+
                </div>
                <div className="text-gray-600 text-lg">Farmers Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-farm-green mb-3">
                  50,000+
                </div>
                <div className="text-gray-600 text-lg">Photos Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-farm-green mb-3">
                  95%
                </div>
                <div className="text-gray-600 text-lg">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-farm-green mb-3">
                  24/7
                </div>
                <div className="text-gray-600 text-lg">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
