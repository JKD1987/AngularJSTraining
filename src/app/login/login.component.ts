import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '../../../node_modules/@angular/forms';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  logoutFlag:string;
  name:string;
  private sub:any;
  formConfig=[
    {type:'text', name:'userName', label:'User Name', initValue:'', constraint:Validators.required},
    {type:'passWord', name:'passWord', label:'Password', initValue:'', constraint:Validators.required}
  ];
  constructor(private builder:FormBuilder, private route: ActivatedRoute,private router:Router) { 
    this.sub=this.route.params.subscribe(params => {
      this.logoutFlag = params['true'];
      });
  }

  ngOnInit() {
    this.initForm();
    if(this.logoutFlag == 'true')
      sessionStorage.removeItem('login');
  }
  initForm():FormGroup{
    this.loginForm=new FormGroup({});
    this.formConfig.forEach(eachControl => {
      this.loginForm.addControl(eachControl.name, new FormControl(eachControl.initValue, eachControl.constraint));
    });
    return this.loginForm;
  }
  submit(){
    console.log(this.loginForm.value);
    if(this.loginForm.value.userName === 'Jit' && this.loginForm.value.passWord === 'Jit'){
      sessionStorage.setItem('login', 'true');
      const message='Hello ' + this.loginForm.value.userName + '!!';
      this.router.navigate(['/donorDetails', message]);
    }
  }
}
