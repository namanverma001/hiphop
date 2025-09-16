import React, { useState } from 'react';
import Button from '../ui/Button';
import SearchView from '../ui/SearchView';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-header-background">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 lg:py-[12px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/img_header_logo.png"
              alt="Hip Hop Boombox Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
            />
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button
            className="block lg:hidden p-2"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Search Section - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:flex items-center justify-center flex-1 max-w-md mx-8">
            <div className="flex items-center gap-[10px] w-full">
              {/* Link/Icon Button */}
              <button className="flex-shrink-0 w-11 h-11 bg-primary-background rounded-[22px] flex items-center justify-center hover:opacity-90 transition-opacity">
                <img
                  src="/images/img_frame_8032.svg"
                  alt="Menu"
                  className="w-5 h-5"
                />
              </button>

              {/* Search View */}
              <div className="flex-1">
                <SearchView
                  placeholder="What do you want to play?"
                  leftIcon={true}
                  rightIcon={true}
                  className="w-full"
                  layout_gap="md"
                  layout_width="full"
                  padding="md"
                  position="relative"
                  variant="default"
                  size="md"
                  value=""
                  onChange={() => { }}
                  onFocus={() => { }}
                  onBlur={() => { }}
                />
              </div>
            </div>
          </div>

          {/* Navigation Menu - Hidden on mobile, visible on larger screens */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-50 lg:z-auto`}>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 p-4 lg:p-0">
              {/* Sign Up Link */}
              <button className="text-base font-semibold text-text-primary hover:text-primary-foreground transition-colors">
                Sign Up
              </button>

              {/* Log In Button */}
              <Button
                text="Log In"
                className="w-full lg:w-auto"
                layout_width="auto"
                padding="md"
                position="relative"
                layout_gap="sm"
                variant="primary"
                size="md"
                onClick={() => { }}
              />
            </div>
          </nav>

          {/* Mobile Search - Visible only when menu is open */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg p-4 lg:hidden z-40">
              <div className="flex items-center gap-2 mb-4">
                <button className="flex-shrink-0 w-11 h-11 bg-primary-background rounded-[22px] flex items-center justify-center">
                  <img
                    src="/images/img_frame_8032.svg"
                    alt="Menu"
                    className="w-5 h-5"
                  />
                </button>
                <SearchView
                  placeholder="What do you want to play?"
                  leftIcon={true}
                  rightIcon={true}
                  className="flex-1"
                  layout_gap="md"
                  layout_width="full"
                  padding="md"
                  position="relative"
                  variant="default"
                  size="md"
                  value=""
                  onChange={() => { }}
                  onFocus={() => { }}
                  onBlur={() => { }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;