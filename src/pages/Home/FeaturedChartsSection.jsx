import React from 'react';

const FeaturedChartsSection = () => {
  const charts = [
    {
      id: 1,
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: "/images/img_image_11.png"
    },
    {
      id: 2,
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: "/images/img_image_12.png"
    },
    {
      id: 3,
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: "/images/img_image_13.png"
    },
    {
      id: 4,
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: "/images/img_image_14.png"
    }
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col gap-6 lg:gap-5xl">
        {/* Section Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
            Featured Charts
          </h2>
          <button className="text-base font-medium text-text-accent hover:opacity-80 transition-opacity">
            Show all
          </button>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8xl">
          {charts?.map((chart) => (
            <div key={chart?.id} className="flex flex-col gap-3.5 w-full max-w-[176px] mx-auto lg:mx-0">
              <div className="w-full aspect-square">
                <img 
                  src={chart?.image}
                  alt="Featured Chart"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <p className="text-base font-normal text-text-primary leading-base text-left">
                {chart?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedChartsSection;