import React from 'react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8 inline-block">
          <div className="text-8xl mb-4 animate-bounce">🧀</div>
          <h1 className="text-6xl font-bold text-gray-800 mb-4 font-baloo">
            CheesyApp
          </h1>
          <p className="text-2xl text-gray-600 mb-2">Share your cheese. Spread the smile.</p>
          <p className="text-lg text-gray-500">Platform sosial untuk momen lucu, jokes receh, dan pickup line norak! 😄</p>
        </div>

        <div className="flex gap-4 justify-center mb-16">
          <button
            onClick={onGetStarted}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Mulai Sekarang 🚀
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg border-2 border-gray-200">
            Lihat Demo
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all">
            <div className="text-5xl mb-4">😂</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Cheesy Feed</h3>
            <p className="text-gray-600">Timeline penuh jokes dan pickup line lucu dari komunitas</p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Leaderboard</h3>
            <p className="text-gray-600">Kompetisi friendly siapa yang paling cheesy minggu ini!</p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Daily Challenge</h3>
            <p className="text-gray-600">Challenge harian untuk asah kreativitas humor kamu</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 flex justify-center gap-12 text-center">
          <div>
            <div className="text-4xl font-bold text-yellow-600">10K+</div>
            <div className="text-gray-600">Cheesy Posts</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-600">5K+</div>
            <div className="text-gray-600">Happy Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-600">50K+</div>
            <div className="text-gray-600">Smiles Created</div>
          </div>
        </div>
      </div>
    </div>
  );
};