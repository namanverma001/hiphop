import React from 'react';

const PopularRadioSection = () => {
  const radioStations = [
    {
      id: 1,
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: "/images/img_image_7.png"
    },
    {
      id: 2,
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: "/images/img_image_8.png"
    },
    {
      id: 3,
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: "/images/img_image_9.png"
    },
    {
      id: 4,
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: "/images/img_image_10.png"
    }
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col gap-6 lg:gap-5xl">
        {/* Section Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
            Popular radio
          </h2>
          <button className="text-base font-medium text-text-accent hover:opacity-80 transition-opacity">
            Show all
          </button>
        </div>

        {/* Radio Stations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8xl">
          {radioStations?.map((station) => (
            <div key={station?.id} className="flex flex-col gap-3.5 w-full max-w-[176px] mx-auto lg:mx-0">
              <div className="w-full aspect-square">
                <img 
                  src={station?.image}
                  alt="Radio Station"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <p className="text-base font-normal text-text-primary leading-base text-left">
                {station?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRadioSection;