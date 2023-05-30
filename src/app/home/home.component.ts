import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from './post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient, private postService: PostService) { }
  @ViewChild('f') form1: NgForm;
  username = '';
  isSubmit = false;
  form2: FormGroup;
  posts: any[];
  error = null;

  ngOnInit(): void {
    this.form2 = new FormGroup({
      'title': new FormControl(null, [Validators.required])
    })

    this.getPosts();
  }

  onNavigate() {
    this.router.navigate(['/users'], { queryParams: { have_user: true } });
  }

  onSubmit() {
    // console.log(this.form1);
    this.isSubmit = true;
    this.username = this.form1.value.name;
    this.form1.reset();
  }

  onSubmitForm2() {
    // console.log(this.form2.value.title);
    const postData = {
      title: this.form2.value.title
    }
    
    this.postService.createPost(postData).subscribe(response => {
      console.log(response);
      this.getPosts();
    })
    this.form2.reset();
  }

  getPosts() {
    this.postService.fetchPost().subscribe(
      data => {
        console.log(data);
        this.posts = data
      }, 
      error => {
        console.log(error.message);
        this.error = error.message;
    });
  }

  onClear(){
    this.postService.deletePosts().subscribe((data) => {
      console.log(data);
      this.posts = []
    })
  }

  onSuggest() {
    // setValue for setting whole form value
    this.form1.form.patchValue({
      name: 'Mukit'
    })
  }
}
