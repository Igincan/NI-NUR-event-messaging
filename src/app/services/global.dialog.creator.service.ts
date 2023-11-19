import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDialogCreator {

  private static subscribers: (() => void)[] = [];
  public static showGroupDialogBoolen: boolean = true ;

  public static subscribe(subscriber: () => void): void {
    this.subscribers.push(subscriber);
  }

  public static notifyAll(): void {
    this.subscribers.forEach(subscriber => subscriber());
  }

  static showGroupDialogCallback: (() => void) = () => {
  };
  static showAddPersonDialogCallback: (() => void) = () => {
  };


  constructor() {
  }

  public static setShowGroupDialogCallback(f: (() => void)): void {
    // this.showGroupDialogCallback =  () => {
    //   showGroupDialogBoolen = true;
    //   f.call();
    //   showGroupDialogBoolen = false;
    // } ;
  }

  public static setShowPersonDialogCallback(f: (() => void)): void {
    this.showAddPersonDialogCallback = f;
  }

}

