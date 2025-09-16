import React from 'react';

const PopularAlbumsSection = () => {
  const albums = [
    {
      id: 1,
      name: "Album Name",
      artist: "Artist Name",
      image: "/images/img_image_3.png"
    },
    {
      id: 2,
      name: "Album Name",
      artist: "Artist Name",
      image: "/images/img_image_4.png"
    },
    {
      id: 3,
      name: "Album Name",
      artist: "Artist Name",
      image: "/images/img_image_5.png"
    },
    {
      id: 4,
      name: "Album Name",
      artist: "Artist Name",
      image: "/images/img_image_6.png"
    }
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col gap-6 lg:gap-5xl">
        {/* Section Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
            Popular albums and singles
          </h2>
          <button className="text-base font-medium text-text-accent hover:opacity-80 transition-opacity">
            Show all
          </button>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8xl">
          {albums?.map((album) => (
            <div key={album?.id} className="flex flex-col items-center gap-3.5">
              <div className="w-full max-w-[140px] aspect-square">
                <img
                  src={album?.image}
                  alt={album?.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="text-center">
                <h3 className="text-base font-semibold text-text-primary leading-normal">
                  {album?.name}
                </h3>
                <p className="text-sm font-normal text-text-primary leading-normal">
                  {album?.artist}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularAlbumsSection;