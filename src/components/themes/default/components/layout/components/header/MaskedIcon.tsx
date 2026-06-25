type MaskedIconProps = {
  src: string;
  className?: string;
};

export default function MaskedIcon({ src, className }: MaskedIconProps) {
  return (
    <div
      className={className}
      style={{
        mask: `url(${src})`,
        WebkitMask: `url(${src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}
