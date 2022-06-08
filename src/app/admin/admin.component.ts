import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  adminManage(){
    this.router.navigateByUrl('/admin/manage')
  }
  adminEdit(){
    this.router.navigateByUrl('/admin/edit')
  }
  adminDelete(){
    this.router.navigateByUrl('/admin/delete')
  }

}
