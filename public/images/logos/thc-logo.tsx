import Link from "next/link";
import React, { FC } from "react";

interface imageProps {
  className: string;
  routing: boolean;
}

const Logo: FC<imageProps> = ({ className, routing }) =>
  routing ? (
    <Link href="/">
      <a>
        <img
          src="/images/logos/Logo.svg"
          alt="Logo de THC"
          className={className}
        />
      </a>
    </Link>
  ) : (
    <img src="/images/logos/Logo.svg" alt="Logo de THC" className={className} />
  );

export default Logo;
