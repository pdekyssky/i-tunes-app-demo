import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const PageContainer = ({ children, className = "" }: Props) => (
  <div className={`mx-auto max-w-2xl px-4 py-8 ${className}`.trim()}>
    {children}
  </div>
);

export default PageContainer;
