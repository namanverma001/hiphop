import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const searchClasses = cva(
  'relative flex items-center transition-all duration-200 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500',
  {
    variants: {
      variant: {
        default: 'border border-solid',
        filled: 'bg-gray-100',
        outline: 'border-2 bg-transparent',
      },
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const SearchView = ({
  // Required parameters with defaults
  placeholder = "What do you want to play?",
  text_font_size = "text-xl",
  text_font_family = "Outfit",
  text_font_weight = "font-normal",
  text_line_height = "leading-md",
  text_text_align = "left",
  text_color = "text-text-secondary",
  border_border = "1px solid #c8c8c8",
  border_border_radius = "rounded-sm",
  
  // Optional parameters (no defaults)
  layout_gap,
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  value,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  className,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // Safe validation for optional parameters
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build container styles
  const containerStyles = {
    borderRadius: border_border_radius === "rounded-sm" ? '6px' : border_border_radius,
    border: border_border || '1px solid #c8c8c8',
  };

  // Build input styles
  const inputStyles = {
    fontSize: text_font_size === "text-xl" ? '20px' : text_font_size,
    fontFamily: text_font_family || 'Outfit',
    fontWeight: text_font_weight === "font-normal" ? '400' : text_font_weight,
    lineHeight: text_line_height === "leading-md" ? '26px' : text_line_height,
    textAlign: text_text_align || 'left',
    color: text_color === "text-text-secondary" ? '#6a6a6a' : text_color,
  };

  const handleFocus = (event) => {
    setIsFocused(true);
    if (typeof onFocus === 'function') {
      onFocus(event);
    }
  };

  const handleBlur = (event) => {
    setIsFocused(false);
    if (typeof onBlur === 'function') {
      onBlur(event);
    }
  };

  const handleChange = (event) => {
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  return (
    <div
      style={containerStyles}
      className={twMerge(
        searchClasses({ variant, size }),
        optionalClasses,
        className
      )}
    >
      {leftIcon && (
        <div className="absolute left-3 flex items-center pointer-events-none">
          <img src="/images/img_search.svg" alt="Search" className="w-6 h-7" />
        </div>
      )}
      
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        style={inputStyles}
        className={twMerge(
          'flex-1 bg-transparent outline-none placeholder-current',
          leftIcon ? 'pl-11' : 'pl-4',
          rightIcon ? 'pr-14' : 'pr-4',
          'py-3.5'
        )}
        {...props}
      />
      
      {rightIcon && (
        <div className="absolute right-3 flex items-center pointer-events-none">
          <img src="/images/img_frame_8036.svg" alt="Filter" className="w-10 h-7" />
        </div>
      )}
    </div>
  );
};

export default SearchView;