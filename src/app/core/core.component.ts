import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  allLinks: Object;
  isEdit = false;
  linkObj= {
    title: '',
    link: '',
    desc: ''
  }
  linkForm: any;
  constructor(private router: Router,  private _commonService : CommonService) { }

  ngOnInit(): void {
    this.getLatestLink();
  }
  addLink(fromObj, clrForm: NgForm){
    this._commonService.createLink(fromObj).subscribe((response)=>{
        console.log("Link has been added", fromObj);
        this.getLatestLink();
    }) 
    clrForm.reset();
  }
  getLatestLink(){
    this._commonService.getAllLinks().subscribe((response)=>{
      this.allLinks = response;
    })
  }
  editLink(linkInfo){
    this.isEdit = true;
    this.linkObj = linkInfo;
  }
  deleteLink(linkInfo){
    this._commonService.deleteLink(linkInfo).subscribe(()=>{
      this.getLatestLink();
    })
  }
  updateLink(clrForm: NgForm){
    this.isEdit = !this.isEdit;
    this._commonService.updateLink(this.linkObj).subscribe(()=>{
      this.getLatestLink();
    })
    clrForm.reset();
  }
}
