import { Injectable } from '@angular/core';
import { ToogleAction } from '../utils/dispach/actions/toogleAction';

import { ComponentEventHandler } from '../utils/dispach/component-event-handler';


@Injectable({
  providedIn: 'root'
})
export class ToogleService extends ComponentEventHandler<ToogleAction, any>  {

  constructor() {
    super();
  }
}