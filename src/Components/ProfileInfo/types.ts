import { ReactNode } from "react";

export interface ProfileInfoProps
  extends Partial<{
    children: ReactNode;
    className: string;
  }> {}