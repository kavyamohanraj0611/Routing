import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing-demo';
  constructor(private router:Router){
  }
  OnClick(){
    // this.router.navigate(['/roles'])
    this.router.navigateByUrl('/roles')
  }

  adminAccess(){
    this.router.navigateByUrl('/admin')
  }

}
