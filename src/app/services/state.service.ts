import {Injectable} from '@angular/core';
import {State} from '../models/state';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private states: State[] = [
    new State('mode-selection', 1),
    new State('challenge', 2),
    new State('brainstorm', 3),
    new State('results', 4),
    new State('sorting', 5),
    new State('cost/impact', 6),
    new State('matrix', 7)
  ];
  public currentState = new BehaviorSubject<State>(this.states[0]);
  private currentStateSync: State = this.states[0];

  constructor() {
  }

  public getStates(): State[] {
    return this.states;
  }

  public nextState(): State {
    const nextState = this.states.find((state: State, index: number) => {
      return this.currentStateSync.number === index;
    });
    if (typeof nextState === 'undefined') {
      return null;
    } else {
     this.currentState.next(nextState);
     return nextState;
    }
  }
}
