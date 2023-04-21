import { Component } from '@angular/core';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent {
  public Name="Marvellous";

  public Display():String
  {
    return "Infosystem";
  }


}
