import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import SidebarSection from './SidebarSection';
import PopularArtistsSection from './PopularArtistsSection';
import PopularAlbumsSection from './PopularAlbumsSection';
import PopularRadioSection from './PopularRadioSection';
import FeaturedChartsSection from './FeaturedChartsSection';
import PlaylistsSection from './PlaylistsSection';
import FooterSection from './FooterSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hip Hop Boombox - Stream Music, Discover Artists & Create Playlists</title>
        <meta name="description" content="Discover hip hop music, trending artists, curated playlists, radio stations & podcasts. Stream your favorite tracks and explore the vibrant world of urban music culture." />
        <meta property="og:title" content="Hip Hop Boombox - Stream Music, Discover Artists & Create Playlists" />
        <meta property="og:description" content="Discover hip hop music, trending artists, curated playlists, radio stations & podcasts. Stream your favorite tracks and explore the vibrant world of urban music culture." />
      </Helmet>

      <main className="w-full bg-background-main">
        <Header />
        
        <div className="w-full">
          <div className="w-full max-w-[1440px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 px-4 sm:px-6 lg:px-0">
              {/* Sidebar */}
              <div className="w-full lg:w-large lg:pr-2.5">
                <SidebarSection />
              </div>
              
              {/* Main Content */}
              <div className="w-full lg:flex-1 lg:pl-10 lg:pr-7">
                <div className="flex flex-col gap-6 lg:gap-3xl py-5 lg:py-0">
                  <PopularArtistsSection />
                  <PopularAlbumsSection />
                  <PopularRadioSection />
                  <FeaturedChartsSection />
                  <PlaylistsSection />
                  <FooterSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;