import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form !: FormGroup;
  constructor(public service:PhotosService) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        albumId:new FormControl('',[Validators.required,Validators.max(20),Validators.min(5)]),
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

    this.service.update(1,this.form.value).subscribe(
    );
    console.log("Added")
  }

}
