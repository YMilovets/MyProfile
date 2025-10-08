import { ReactNode } from "react";

export interface PanelProps {
  id?: string;
  className?: string;
  header?: ReactNode;
  children: ReactNode;
}