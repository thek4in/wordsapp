export interface SolutionCharObj {
  [key: number]: string;
}

export interface CharStateType {
  char: string;
  charMatch: boolean;
  position: boolean;
}

export interface InitialStateType {
  guesses: { [key: number]: WordLineType };
  solution: string;
  solutionChars: SolutionCharObj;
}

export interface WordLineType {
  [key: number]: null | CharStateType;
}

export interface BoardContextType {
  guessesAmount: number;
  state: InitialStateType;
  resetState: () => void;
}

export interface ActionType {
  type: string;
  payload?: string | number | Record<string, unknown>;
}
