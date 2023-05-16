import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router){}
  @ViewChild('f') form1: NgForm;
  username = '';
  isSubmit = false;
  form2: FormGroup;

  ngOnInit(): void {
    this.form2 = new FormGroup({
      'title': new FormControl(null, [Validators.required])
    })
  }

  onNavigate(){
    this.router.navigate(['/users'], {queryParams: {have_user: true}});
  }

  onSubmit(){
    // console.log(this.form1);
    this.isSubmit = true;
    this.username = this.form1.value.name;
    this.form1.reset();
  }

  onSubmitForm2(){
    console.log(this.form2);
  }

  onSuggest(){
    // setValue for setting whole form value
    this.form1.form.patchValue({
      name: 'Mukit'
    })
  }
}
