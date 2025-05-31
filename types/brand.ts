export type Brand = {
  id: string;
  src: string;
  alt: string;
  baseWidth: number; // Base width for desktop
  baseHeight: number; // Base height for desktop
  objectFit?: "cover" | "contain" | "fill";
  animationDelay?: number;
};
