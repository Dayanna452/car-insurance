/* import LeftBlur from "../../../../assets/images/left-blur.svg";
import RightBlur from "../../../../assets/images/right-blur.svg"; */

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  blur?: boolean;
}

export const Wrapper = ({ children, ...props }: WrapperProps) => {
  return (
    <main className={`wrapper-container ${props.className}`} {...props}>
      {/*       {blur && <img className="left-blur" src={LeftBlur} alt="no hay blur" />}
       */}{" "}
      {children}
      {/*       {blur && <img className="right-blur" src={RightBlur} alt="no hay blur" />}
       */}{" "}
    </main>
  );
};
