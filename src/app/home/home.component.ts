import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router){}
  @ViewChild('f') form1: NgForm;
  username = '';
  isSubmit = false;

  onNavigate(){
    this.router.navigate(['/users'], {queryParams: {have_user: true}});
  }

  onSubmit(){
    // console.log(this.form1);
    this.isSubmit = true;
    this.username = this.form1.value.name;
    this.form1.reset();
  }

  onSuggest(){
    // setValue for setting whole form value
    this.form1.form.patchValue({
      name: 'Mukit'
    })
  }
}
