import React from 'react';

const PopularArtistsSection = () => {
  const artists = [
    {
      id: 1,
      name: "Artist Name",
      role: "Artist",
      image: "/images/img_image.png"
    },
    {
      id: 2,
      name: "Artist Name",
      role: "Artist",
      image: "/images/img_image_176x176.png"
    },
    {
      id: 3,
      name: "Artist Name",
      role: "Artist",
      image: "/images/img_image_1.png"
    },
    {
      id: 4,
      name: "Artist Name",
      role: "Artist",
      image: "/images/img_image_2.png"
    }
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col gap-6 lg:gap-5xl">
        {/* Section Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
            Popular artists
          </h2>
          <button className="text-base font-medium text-text-accent hover:opacity-80 transition-opacity">
            Show all
          </button>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8xl">
          {artists?.map((artist) => (
            <div key={artist?.id} className="flex flex-col items-center gap-3.5">
              <div className="w-full max-w-[120px] aspect-square">
                <img
                  src={artist?.image}
                  alt={artist?.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-base font-semibold text-text-primary leading-normal">
                  {artist?.name}
                </h3>
                <p className="text-sm font-normal text-text-primary leading-normal">
                  {artist?.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularArtistsSection;