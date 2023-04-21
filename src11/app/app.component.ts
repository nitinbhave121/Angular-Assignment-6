import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Marvellous Infosystem</h1>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque perferendis dolorem maxime esse nihil ipsam repudiandae cumque, molestiae ab velit tenetur, culpa provident ea. Ipsam quasi blanditiis repellat vero neque!</p>
  `,
  styles: [`
  h1{
    color:red;
  }
  p{
    color:blue;
  }
  `]
})
export class AppComponent {
  title = 'Assign6';
}
