import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackBar : MatSnackBar) { }
  public showNotification(message :string , ButtonMessage : string, style : string){
    this.snackBar.open(message,ButtonMessage,{duration: 3000, horizontalPosition : 'left', verticalPosition:'top',panelClass :[style]});
  }
}
