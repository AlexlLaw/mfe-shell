import { Observable, Subject } from "rxjs";
import { ComponentEvent } from "./component.event";

export class ComponentEventHandler<eventT, dataT> {

  private eventEmiter: Subject<ComponentEvent<eventT, dataT>> = new Subject();

  construct() {}

  public dispatchAction(action: ComponentEvent<eventT, dataT>): void {
    this.eventEmiter.next(action);
  }

  public onEvent(): Observable<any> {
    return this.eventEmiter.asObservable();
  }

}