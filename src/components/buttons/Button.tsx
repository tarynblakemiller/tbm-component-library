import React from 'react';

//forwardRef with prop spreading
export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<'button'>
>(({ children, ...props }, ref) => {
  return (
    <button ref={ref} type="button" {...props}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

// export const Button: React.FC = ({ children }) => {
//   return <button>{children}</button>;
// };
