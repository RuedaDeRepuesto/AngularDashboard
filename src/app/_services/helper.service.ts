import { ContentChild, Injectable, TemplateRef, Type, ViewChild, inject } from '@angular/core';
import { EventType, NavigationEnd, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormModalComponent } from '../_components/form-modal/form-modal.component';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  
  private goingBack = false;
  private navStack:string[] = [];
  private messageSrv = inject(NzMessageService);
  private router = inject(Router);

  private _operationsTemplateRef: TemplateRef<any> | undefined;


  public get operationsTemplateRef(): TemplateRef<any> | undefined {
    return this._operationsTemplateRef;
  }
  public set operationsTemplateRef(value: TemplateRef<any> | undefined) {
    this._operationsTemplateRef = value;
  }
  
  constructor(private modalSrv:NzModalService) {
    this.router.events.subscribe(e =>{
      if(e.type == EventType.NavigationEnd){
        if(!this.goingBack){
          const eventInfo = e as NavigationEnd;
          this.navStack.push(eventInfo.urlAfterRedirects);
        }
        this.goingBack = false;
        this.operationsTemplateRef = undefined;
      }

    });
  }


  public get canGoBack(){
    if(this.navStack.length > 1){
      return true;
    }
    return false;
  }

  async goBack() {
    this.navStack.pop();
    console.log(this.navStack);
    this.goingBack = true;
    let backUrl = this.navStack[this.navStack.length-1];
    await this.router.navigateByUrl(backUrl);
  }
  
  async showToast(message:string,type='success',duration = 5000){
    const toast = this.messageSrv.create(type,message,{
      nzDuration:duration,
      nzAnimate:true,
      nzPauseOnHover:true
    })

    return toast;
  }

  async showFormModal(modal:{title:string,ok:string,cancel:string},formData:any){
    const modalResult = this.modalSrv.create({
      nzTitle: modal.title,
      nzContent: FormModalComponent,
      nzClosable: true,
      nzOkText:modal.ok,
      nzCancelText:modal.cancel,
      nzData:{
        formData:formData
      },
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000))
    });
  }
  
}
