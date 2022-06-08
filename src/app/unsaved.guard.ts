import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PaymentComponent } from './payment/payment.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<PaymentComponent> {
  canDeactivate(component: PaymentComponent){
    if(component.isLeave)
    {
      return window.confirm("Are you sure")
    }
    return true;
  }
  
}
