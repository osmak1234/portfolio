import atom from "nanostores";

export const selected = atom(0);

export function select(index) {
  selected.set(index);
}
