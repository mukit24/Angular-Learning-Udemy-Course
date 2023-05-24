import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient){}
  @ViewChild('f') form1: NgForm;
  username = '';
  isSubmit = false;
  form2: FormGroup;
  

  ngOnInit(): void {
    this.form2 = new FormGroup({
      'title': new FormControl(null, [Validators.required])
    })

    this.getPosts();
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
    // console.log(this.form2.value.title);
    const postData = {
      title : this.form2.value.title
    }

    this.http.post('https://learn-angular-63c57-default-rtdb.firebaseio.com/posts.json', postData).subscribe( response => {
      console.log(response);
    })
  }

  getPosts(){
    this.http.get('https://learn-angular-63c57-default-rtdb.firebaseio.com/posts.json')
    .pipe(
      map(responseData => {
        const postArray = [];
        for (let key in responseData){
          // console.log(responseData[key]);
          postArray.push({...responseData[key], id: key})
        }
        return postArray;
      })
    )
    .subscribe(data => console.log(data));
  }

  onSuggest(){
    // setValue for setting whole form value
    this.form1.form.patchValue({
      name: 'Mukit'
    })
  }
}
