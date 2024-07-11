export interface SolutionCharObj {
  [key: number]: string;
}

export interface CharStateType {
  char: string;
  charMatch: boolean;
  position: boolean;
}

export interface InitialStateType {
  [key: number]: WordLineType;
  solution: SolutionCharObj;
}

export interface WordLineType {
  [key: number]: null | CharStateType;
}
