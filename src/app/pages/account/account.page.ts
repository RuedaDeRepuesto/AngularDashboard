import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { GolazoModule } from '../../golazo.module/golazo.module';
import { HelperService } from '../../_services/helper.service';
import { lastValueFrom, timer } from 'rxjs';
import { NzTableComponent, NzTableFilterFn, NzTableSortFn } from 'ng-zorro-antd/table';
import { SearchInputComponent } from '../../_components/search-input/search-input.component';
import { ArrayUtils } from '../../utils/extensions/ArrayExtenesions';
import { ComplexText, DatePickInput } from '../../_formTypes/form.types';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    CommonModule,
    GolazoModule,
    SearchInputComponent
  ],
  templateUrl: './account.page.html',
  styleUrl: './account.page.scss'
})
export class AccountPage implements OnInit,AfterViewInit {


  helper = inject(HelperService);
  searching = false;
  selected:any;


  @ViewChild('operations') 
  template:TemplateRef<any>|undefined;


  constructor(){
  }

  async ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    this.helper.operationsTemplateRef = this.template;
  }

  async search(e: string) {
    this.searching = true;
    if(e.length > 0){
      this.dataSet = ArrayUtils.search(this.realDataSet,e,['name','address']);
    }else{
      this.dataSet = this.realDataSet;
    }
    this.searching = false;
  }

  generateRandomDataSet(count: number){
    const dataSet: any[] = [];
    const cities = ['New York', 'London', 'Sidney', 'Paris', 'Tokyo', 'Los Angeles', 'Berlin', 'Rome', 'Moscow', 'Beijing'];
    const streetNames = ['Park', 'Main', 'Broadway', 'Elm', 'Maple', 'Oak', 'Pine', 'Cedar', 'Highland', 'Washington'];
  
    for (let i = 1; i <= count; i++) {
      const name = `Person ${i}`;
      const age = Math.floor(Math.random() * 80) + 20; // Random age between 20 and 99
      const city = cities[Math.floor(Math.random() * cities.length)];
      const street = `${streetNames[Math.floor(Math.random() * streetNames.length)]} St.`;
      const address = `${city} ${Math.floor(Math.random() * 100) + 1} ${street}`;
      dataSet.push({ key: i.toString(), name, age, address });
    }
  
    return dataSet;
  }

  async add(){
    this.helper.showFormModal({title:'Agregar usuario',ok:'Agregar',cancel:'Cancelar'},{
      nombre:'Test name',
      email: new ComplexText('','email'),
      numeroTelefono:new ComplexText('','tel'),
      fechaNacimiento:new DatePickInput(new Date()),
      rol:{
        id:null,
        text:'Seleccionr',
        getAll:()=> {
          return [{
            value:1,
            text:'Admin'
          },{
              value:2,
              text:'Alumno'
          }]
        }
      }
    });
  }


  async deleteRow() {
    await lastValueFrom(timer(500)); 
    return true;
  }

  confirm(): void {
    this.helper.showToast(JSON.stringify(this.selected));
  }


  dataSet:any[] = this.generateRandomDataSet(250);
  realDataSet = this.dataSet;
}
