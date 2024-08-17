import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface IHandleClickOutside {
  ref: MutableRefObject<HTMLDivElement | null>;
  setter: Dispatch<SetStateAction<boolean>>;
  event: MouseEvent;
}

export const useClickOutSide = ({ ref, setter, event }: IHandleClickOutside) => {
  if (ref.current && !ref.current.contains(event.target as Node)) {
    setter(false);
  }
};
