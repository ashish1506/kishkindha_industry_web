export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-amber-800 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold tracking-wide">Kishkindha Foods</h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-amber-900 mb-6">
            Welcome to Kishkindha Foods
          </h2>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto mb-8">
            Bringing you authentic, traditional flavors crafted with love and
            the finest ingredients. Experience the taste of heritage in every
            bite.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 px-8 rounded-full transition-colors">
              Explore Our Products
            </button>
            <button className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white font-semibold py-3 px-8 rounded-full transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-semibold text-amber-900 mb-3">
              Natural Ingredients
            </h3>
            <p className="text-amber-700">
              We use only the freshest, naturally sourced ingredients in all our
              products.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-4xl mb-4">👨‍🍳</div>
            <h3 className="text-xl font-semibold text-amber-900 mb-3">
              Traditional Recipes
            </h3>
            <p className="text-amber-700">
              Time-honored recipes passed down through generations for authentic
              taste.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold text-amber-900 mb-3">
              Made with Love
            </h3>
            <p className="text-amber-700">
              Every product is crafted with care and passion for quality.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Kishkindha Foods. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
