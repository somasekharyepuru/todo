import React, { PropsWithChildren } from "react";
interface MSComingSoonProps {
  title?: string;
}
export const MSComingSoon = ({
  title,
}: PropsWithChildren<MSComingSoonProps>) => {
  return (
    <div className="coming-soon-wrap flex items-center justify-center h-[calc(80vh-1rem)]">
      <div className="text-3xl capitalize text-blue font-bold">
        {"  "} {title} {"   "} Coming{" "}
        <b className="text-black font-semibold">Soon.</b>
      </div>
    </div>
  );
};
