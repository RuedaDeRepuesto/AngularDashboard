import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { SortFnPipe } from '../utils/pipes/sort-fn.pipe';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SearchInputComponent } from '../_components/search-input/search-input.component';
import { NzButtonTextDirective } from '../utils/directives/nz-button-text.directive';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzPageHeaderModule,
    NzButtonModule,
    FormsModule,
    RouterModule,
    NzDropDownModule,
    NzSpaceModule,
    NzTagModule,
    NzBreadCrumbModule,
    NzAvatarModule,
    NzDividerModule,
    NzTableModule,
    NzPopconfirmModule,
    NzMessageModule,
    SortFnPipe,
    NzInputModule,
    NzButtonTextDirective,
    NzToolTipModule,
    NzModalModule,
    NzSelectModule,
    NzDatePickerModule
  ],
  exports:[
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzPageHeaderModule,
    NzButtonModule,
    FormsModule,
    RouterModule,
    NzDropDownModule,
    NzSpaceModule,
    NzTagModule,
    NzBreadCrumbModule,
    NzAvatarModule,
    NzDividerModule,
    NzTableModule,
    NzPopconfirmModule,
    NzMessageModule,
    SortFnPipe,
    NzInputModule,
    NzButtonTextDirective,
    NzToolTipModule,
    NzSelectModule,
    NzDatePickerModule
  ]
})
export class GolazoModule { }
