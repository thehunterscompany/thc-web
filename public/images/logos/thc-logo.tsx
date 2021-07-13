import React, { FC } from "react";

interface imageProps {
  className: string;
  routing: boolean;
}

const Logo: FC<imageProps> = ({ className, routing }) =>
  routing ? (
    <a href="http://google.com">
      <img
        src="/images/logos/Logo.svg"
        alt="Logo de THC"
        className={className}
      />
    </a>
  ) : (
    <img src="/images/logos/Logo.svg" alt="Logo de THC" className={className} />
  );

export default Logo;
