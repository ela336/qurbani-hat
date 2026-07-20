

const Tips = () => {
  const tips = [
    "Choose a healthy, active animal with bright eyes.",
    "Check the age according to Islamic guidelines.",
    "Buy from trusted farms or verified sellers.",
    "Ensure the animal is free from visible defects.",
  ];

  const breeds = [
    {
      name: "Sahiwal Cow",
      description: "Premium dairy breed known for strength and excellent meat quality.",
      icon: "🐄",
    },
    {
      name: "Deshi Cow",
      description: "Popular local breed with natural feeding and affordable price.",
      icon: "🌿",
    },
    {
      name: "Black Bengal Goat",
      description: "Bangladesh's most famous goat breed with tender meat.",
      icon: "🐐",
    },
    {
      name: "Jamunapari Goat",
      description: "Large-sized premium goat suitable for family Qurbani.",
      icon: "⭐",
    },
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-5">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-green-700">
            Qurbani Tips & Top Breeds
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Make an informed choice with essential Qurbani tips and discover
            the most popular animal breeds in Bangladesh.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-green-700 mb-6">
              ✅ Qurbani Tips
            </h3>

            <div className="space-y-5">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 border-b pb-4 last:border-none"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <p className="text-gray-600">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-green-700 mb-6">
              🐄 Top Breeds
            </h3>

            <div className="space-y-5">
              {breeds.map((breed, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start border-b pb-4 last:border-none"
                >
                  <div className="text-4xl">{breed.icon}</div>

                  <div>
                    <h4 className="font-bold text-lg">{breed.name}</h4>
                    <p className="text-gray-600">{breed.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;