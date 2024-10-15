interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  blur?: boolean;
}

export const Wrapper = ({ children, ...props }: WrapperProps) => {
  return (
    <main className={`wrapper-container ${props.className}`} {...props}>
      {children}
    </main>
  );
};
