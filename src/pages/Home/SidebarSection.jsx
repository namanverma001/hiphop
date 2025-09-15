import React from 'react';
import Button from '../../components/ui/Button';

const SidebarSection = () => {
  return (
    <aside className="w-full bg-accent-background rounded-md p-5 lg:mr-2.5">
      <div className="flex flex-col gap-8 lg:gap-[1112px]">
        {/* Top Section */}
        <div className="flex flex-col gap-8 lg:gap-8xl">
          {/* Your Library Header */}
          <div className="flex justify-between items-center mt-2.5">
            <div className="flex items-center gap-2.5">
              <img 
                src="/images/img_book_4.svg" 
                alt="Library" 
                className="w-7 h-7 lg:w-[30px] lg:h-[30px]"
              />
              <h2 className="text-lg font-semibold text-text-primary ml-2.5">
                Your Library
              </h2>
            </div>
            <button className="p-1">
              <img 
                src="/images/img_add.svg" 
                alt="Add" 
                className="w-7 h-7 lg:w-[30px] lg:h-[30px]"
              />
            </button>
          </div>

          {/* Create Playlist Card */}
          <div className="bg-background-main rounded-lg p-6 lg:p-9xl">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-accent-dark">
                  Create your first playlist
                </h3>
                <p className="text-base font-medium text-text-primary">
                  It is easy, we will help you
                </p>
              </div>
              <Button 
                text="Create playlist"
                fill_background_color="#ee3483"
                text_color="#ffffff"
                className="w-auto px-6 py-2.5"
                layout_width="auto"
                padding="px-6 py-2.5"
                position="relative"
                layout_gap="0"
                variant="primary"
                size="medium"
                onClick={() => {}}
              />
            </div>
          </div>

          {/* Browse Podcasts Card */}
          <div className="bg-background-main rounded-lg p-6 lg:p-9xl">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 pr-1.5">
                <h3 className="text-xl font-semibold text-text-primary">
                  Let us find some podcasts to follow
                </h3>
                <p className="text-base font-medium text-text-primary">
                  We will keep you updated on new episodes
                </p>
              </div>
              <Button 
                text="Browse podcasts"
                fill_background_color="#ee3483"
                text_color="#ffffff"
                className="w-auto px-6 py-2.5"
                layout_width="auto"
                padding="px-6 py-2.5"
                position="relative"
                layout_gap="0"
                variant="primary"
                size="medium"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>

        {/* Bottom Section - Footer Links */}
        <div className="flex flex-col gap-5 mb-9">
          <div className="flex flex-col gap-3">
            {/* First Row of Links */}
            <div className="flex flex-wrap gap-5">
              <span className="text-sm font-medium text-text-primary">Legal</span>
              <span className="text-sm font-medium text-text-primary">Safety & Privacy Center</span>
              <span className="text-sm font-medium text-text-primary">Privacy Policy</span>
            </div>
            
            {/* Second Row of Links */}
            <div className="flex flex-wrap gap-5">
              <span className="text-sm font-medium text-text-primary">Cookies</span>
              <span className="text-sm font-medium text-text-primary">About Ads</span>
              <span className="text-sm font-medium text-text-primary">Accessibility</span>
            </div>
          </div>

          {/* Language Button */}
          <Button 
            text="English"
            fill_background_color="#ee3483"
            text_color="#ffffff"
            border_border_radius="26px"
            className="w-auto px-8 lg:px-[54px] py-2.5 flex items-center gap-3"
            layout_width="auto"
            padding="px-8 lg:px-[54px] py-2.5"
            position="relative"
            layout_gap="3"
            variant="primary"
            size="medium"
            onClick={() => {}}
          >
            <img 
              src="/images/img_language.svg" 
              alt="Language" 
              className="w-7 h-7 lg:w-[30px] lg:h-[30px]"
            />
            English
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default SidebarSection;