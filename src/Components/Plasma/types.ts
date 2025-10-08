import { ReactNode } from "react";

export interface PlasmaProps {
  color?: string;
  speed?: number;
  direction?: "forward" | "reverse" | "pingpong";
  scale?: number;
  opacity?: number;
  mouseInteractive?: boolean;
  children?: ReactNode;
  className?: string;
}
