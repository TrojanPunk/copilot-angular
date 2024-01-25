import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignupService } from 'src/shared/services/signup.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private signupService: SignupService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: [''],
      password: [''],
      email: [''],
      roles: [''],
    });
  }

  postProperty(): void {
    const formData = this.signupForm.getRawValue();
    console.log(formData);
    formData.favorites = [];
    
    this.signupService.postPropertyData(formData).subscribe({
      next: res => {
        console.log(res);
        this.router.navigate(['/']); // Navigate to the root page
      },
      error: err => {
        console.log(err);
        this.router.navigate(['/']);
      }
    });
  }
}
