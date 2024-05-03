import { Component, Input, inject } from '@angular/core';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { GolazoModule } from '../../golazo.module/golazo.module';

@Component({
  selector: 'app-form-modal',
  standalone: true,
  imports: [GolazoModule],
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.scss'
})
export class FormModalComponent {



  readonly #modal = inject(NzModalRef);
  readonly modalData = inject(NZ_MODAL_DATA).formData;

  formEntries:{name:string,type:string,value:any,options:any[],obj?:any}[] = [];

  constructor(){
    this.generateForm();
  }

  generateForm(){
    console.log(this.modalData);
    for (const i of Object.getOwnPropertyNames(this.modalData)) {
      const p = this.modalData[i];
      console.log(this.modalData[i]);
      let entry:any = undefined;
      if(p.getAll){
        entry = {
          name:this.getText(i),
          value:p.value,
          type:'select',
          options: p.getAll()
        };
      }else if(p.constructor.name == 'String'){
        entry = {
          name:this.getText(i),
          value:p,
          type:'text',
        }
      }else if(p.constructor.name == 'ComplexText'){
        entry = {
          name:this.getText(i),
          value:p.get(),
          type:'ComplexText',
          obj:p
        }
      }else if(p.constructor.name == 'DatePickInput'){
        entry = {
          name:this.getText(i),
          value:p.date,
          type:'date',
          obj:p
        }
      }
      

      this.formEntries.push(entry);
    }
    console.log(this.formEntries);
  }


  blurInput(event:any,t:string){
    let fixed:string = event.target.value;
    if(t == 'tel'){
      fixed = fixed.replace(/[^0-9+]/g, '');
      event.target.value = fixed;
    }
    
    event.target.reportValidity()
  }

  
  getText(texto:string){
    const palabras = texto.split(/(?=[A-Z])/);
    
    // Unir las palabras con un espacio
    const nombreFormateado = palabras.join(' ');

    // Convertir la primera letra a mayúscula
    return nombreFormateado.charAt(0).toUpperCase() + nombreFormateado.slice(1);

  }
}
