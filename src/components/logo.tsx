import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className, size = 32 }: LogoProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logos/logo.svg"
        alt="盘搜索 Logo"
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
}
