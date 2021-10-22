import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { PhotosService } from '../photos.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form !: FormGroup;
  constructor(public service:PhotosService) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        albumId:new FormControl('',[Validators.required,Validators.min(5)]),
        id:new FormControl('',[Validators.required,Validators.max(5),Validators.min(5)]),
        title:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(5)]),
        url:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(5)]),
        thumbnailUrl:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(5)])
      }
    );

  }
  get formControlls(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.service.create(this.form.value).subscribe(
    );
    console.log("Added")
  }

}
