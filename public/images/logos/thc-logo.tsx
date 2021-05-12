import React, { FC } from "react";

interface imageProps {
  className: string;
}

const Logo: FC<imageProps> = ({ className }) => (
  <img src="/images/logos/Logo.webp" alt="Logo de THC" className={className} />
);

export default Logo;
