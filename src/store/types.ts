export interface IPayload {
    session: string;
}
  
export interface IAction {
    type: string;
    payload: IPayload;
}

export interface IState {
    session?: string | null;
}
