import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from 'src/shared/services/signin.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  signinForm: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private signinService: SigninService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

    getSigninData(): void {
      const { username, password } = this.signinForm.value; // Store form data in a const variable
      this.signinService.getUserData(username, password).subscribe({ 
        next: data => { // Pass username and password to getUserData
        if(data) {
          sessionStorage.setItem('id', data.id);
          sessionStorage.setItem('roles', JSON.stringify(data.roles));

          // Navigate to the corresponding page based on roles
          console.log("this is data", data);
          this.router.navigate([`/${data.roles}`]);
        }
      }
    });
  }
}
