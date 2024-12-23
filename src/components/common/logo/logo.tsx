import Image from "next/image";

interface Properties {
  size: "big" | "small";
}

export const Logo = ({ size }: Properties) => {
  const isSmall = size === "small";
  return (
    <>
      {isSmall ? (
        <Image
          src="/images/logo/skicom.png"
          alt="small"
          width="40"
          height="38"
        />
      ) : (
        <Image
          src="/images/logo/skicom.png"
          alt="large"
          width="57"
          height="52"
        />
      )}
    </>
  );
};
