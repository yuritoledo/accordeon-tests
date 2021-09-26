import { ChevronRight, ChevronDown } from 'react-feather';

interface Props {
  isShowing: boolean;
}

export const Chevron = ({ isShowing }: Props) =>
  isShowing
    ? <ChevronDown />
    : <ChevronRight />
