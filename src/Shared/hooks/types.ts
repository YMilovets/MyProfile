import { MutableRefObject } from 'react';

export type OutsideClickProps = Partial<{
	excluded: Array<MutableRefObject<HTMLElement | null>>;
	onClick: () => void;
}>;
