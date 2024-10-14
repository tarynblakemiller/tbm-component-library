// src/components/Button/Button.tsx
import React from 'react';
import { useTheme } from '../../theme/ThemeProvider';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  className,
  children,
  ...props
}) => {
  const { isDarkMode } = useTheme();

  const baseClasses =
    'font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: `bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 ${
      isDarkMode ? 'dark:bg-primary-500 dark:hover:bg-primary-600' : ''
    }`,
    secondary: `bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 ${
      isDarkMode ? 'dark:bg-secondary-500 dark:hover:bg-secondary-600' : ''
    }`,
    outline: `border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 ${
      isDarkMode
        ? 'dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800'
        : ''
    }`,
  };

  const sizeClasses = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${
    sizeClasses[size]
  } ${className || ''}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
