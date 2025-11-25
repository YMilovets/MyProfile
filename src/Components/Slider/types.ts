export interface SliderProps {
  images: Array<{
    source: string;
    description?: string;
    onClick?: () => void;
  }>;
  onClick?: (source: string) => void;
  selectedId: number;
  onSelect?: (selectedId: number) => void;
}
