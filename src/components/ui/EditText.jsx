import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const editTextClasses = cva(
  'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
  {
    variants: {
      variant: {
        default: 'border-0',
        outlined: 'border border-solid',
        filled: 'bg-gray-100',
      },
      size: {
        small: 'text-sm px-2 py-1',
        medium: 'text-base px-3 py-2',
        large: 'text-lg px-4 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const EditText = ({
  // Required parameters with defaults
  placeholder = "© 2024 Hiphopboombox",
  text_font_size = "text-base",
  text_font_family = "Poppins",
  text_font_weight = "font-normal",
  text_line_height = "leading-base",
  text_text_align = "left",
  text_color = "text-text-primary",
  border_border_top = "1px solid #b1b1b1",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  value,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  readOnly = false,
  className,
  type = "text",
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build input styles
  const inputStyles = {
    fontSize: text_font_size === "text-base" ? '16px' : text_font_size,
    fontFamily: text_font_family || 'Poppins',
    fontWeight: text_font_weight === "font-normal" ? '400' : text_font_weight,
    lineHeight: text_line_height === "leading-base" ? '24px' : text_line_height,
    textAlign: text_text_align || 'left',
    color: text_color === "text-text-primary" ? '#262626' : text_color,
    borderTop: border_border_top || '1px solid #b1b1b1',
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
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled}
      readOnly={readOnly}
      style={inputStyles}
      className={twMerge(
        editTextClasses({ variant, size }),
        optionalClasses,
        className
      )}
      {...props}
    />
  );
};

export default EditText;