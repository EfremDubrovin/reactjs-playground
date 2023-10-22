import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Alert({ children }: Props) {
  return (
    <>
      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
        {children}
      </div>
    </>
  );
}

export default Alert;
