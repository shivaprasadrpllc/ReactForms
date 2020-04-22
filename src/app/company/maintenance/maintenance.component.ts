import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {

  maintanceInfo: any = [
    { fullName: 'katie Oliver', customer: 1, country: 1, priority: 3, carrier: 'Y', regOffice: 'Y', POP: 'Y', Agency: 'Y', selected: true },
    { fullName: 'John Dee', customer: 2, country: 2, priority: 1, carrier: 'N', regOffice: 'N', POP: 'N', Agency: 'N', selected: false },
    { fullName: 'Michel Geet', customer: 3, country: 3, priority: 2, carrier: 'Y', regOffice: 'Y', POP: 'Y', Agency: 'Y', selected: false },
    { fullName: 'Gleen Scoot', customer: 4, country: 4, priority: 3, carrier: 'N', regOffice: 'N', POP: 'N', Agency: 'N', selected: false },
    { fullName: 'Ann McKeown', customer: 5, country: 5, priority: 1, carrier: 'Y', regOffice: 'Y', POP: 'Y', Agency: 'Y', selected: false },
    { fullName: 'Steefen Scoot', customer: 6, country: 6, priority: 2, carrier: 'Y', regOffice: 'Y', POP: 'Y', Agency: 'Y', selected: false },
    { fullName: 'katie Oliver', customer: 1, country: 1, priority: 3, carrier: 'Y', regOffice: 'Y', POP: 'Y', Agency: 'Y', selected: false },
    { fullName: 'John Dee', customer: 2, country: 2, priority: 1, carrier: 'N', regOffice: 'N', POP: 'N', Agency: 'N', selected: false },
    { fullName: 'Michel Geet', customer: 3, country: 3, priority: 2, carrier: 'Y', regOffice: 'Y', POP: 'Y', Agency: 'Y', selected: false },
    { fullName: 'Gleen Scoot', customer: 4, country: 4, priority: 3, carrier: 'N', regOffice: 'N', POP: 'N', Agency: 'N', selected: false },
    { fullName: 'Ann McKeown', customer: 5, country: 5, priority: 1, carrier: 'Y', regOffice: 'Y', POP: 'Y', Agency: 'Y', selected: false },
    { fullName: 'Steefen Scoot', customer: 6, country: 6, priority: 2, carrier: 'Y', regOffice: 'Y', POP: 'Y', Agency: 'Y', selected: false },
    { fullName: 'Ann McKeown', customer: 5, country: 5, priority: 1, carrier: 'Y', regOffice: 'Y', POP: 'Y', Agency: 'Y', selected: false },
    { fullName: 'Steefen Scoot', customer: 6, country: 6, priority: 2, carrier: 'Y', regOffice: 'Y', POP: 'Y', Agency: 'Y', selected: false },
    { fullName: 'Steefen Scoot', customer: 6, country: 6, priority: 2, carrier: 'Y', regOffice: 'Y', POP: 'Y', Agency: 'Y', selected: false }
  ];
  customerInfo: any = [
    { custNum: 1, custName: 'Katie', custId: '94225094' },
    { custNum: 2, custName: 'John', custId: '54225094' },
    { custNum: 3, custName: 'Geet', custId: '95225094' },
    { custNum: 4, custName: 'Smith', custId: '65225094' },
    { custNum: 5, custName: 'Darius', custId: '35225094' },
    { custNum: 6, custName: 'Mark', custId: '95225094' },
  ];
  countryInfo: any = [
    { cId: 1, Name: 'USA' },
    { cId: 2, Name: 'UAE' },
    { cId: 3, Name: 'West Indies' },
    { cId: 4, Name: 'UK' },
    { cId: 5, Name: 'Austrakia' },
    { cId: 6, Name: 'Germany' },
  ];
  priorityInfo: any = [
    { id: 1, type: 'Low' },
    { id: 2, type: 'Medium' },
    { id: 3, type: 'High' },
  ];
  companyDetailOptions: any = [
    { id: 1, name: 'Carrier', value: 'I' },
    { id: 2, name: 'Regional Office', value: 'Y' },
    { id: 3, name: 'POP', value: 'Y' },
    { id: 4, name: 'Agency', value: 'Y' },
    { id: 5, name: 'Active', value: 'Y' },
    { id: 6, name: 'Site', value: 'Y' },
    { id: 7, name: 'NS', value: 'Y' },
    { id: 8, name: 'Customer', value: 'Y' },
    { id: 9, name: 'Exchange', value: 'Y' },
  ];
  isChecked: boolean = false;
  openAddCity: boolean = false;
  showBtn: any = 'SA';
  totallength: any = this.maintanceInfo.length;
  actionMaintenanceInfo: FormGroup;

  constructor(
    private formBuildrr: FormBuilder
  ) { }

  ngOnInit(): void {
    this.actionMaintenanceInfo = this.formBuildrr.group({
      fName: ['New '],
      country: [1],
      cnxvid: [''],
      address: [''],
      region: [0],
      osref: [''],
      city: [0],
      bCode: [''],
      customer: [''],
      state: [''],
      priority: [''],
      custId: [''],
      companyDetailOptionInfo: this.formBuildrr.group({
        carries: ['I'],
        regOffice: ['I'],
        pop: ['I'],
        agency: ['I'],
        active: ['I'],
        site: ['I'],
        ns: ['I'],
        customer: ['I'],
        exchange: ['I'],
      }),
      serviceOnly: ['N'],
      all: ['Y'],
      contactInR8: ['Y'],
      contactCriteria: this.formBuildrr.group({
        fullName: [''],
        lastName: [''],
        email: [''],
      })
    });
    console.log(this.actionMaintenanceInfo);
  }

  getCustInfo(custNum: any, colName: any): any {
    return this.customerInfo.filter(
      // tslint:disable-next-line:variable-name
      (_c: any) => (+_c.custNum === +custNum)
    )[0][`${colName}`];
  }
  getCountry(cId: any): any {
    return this.countryInfo.filter((c) => +c.cId === +cId)[0].Name;
  }
  getPriority(pId: any): any {
    return this.priorityInfo.filter((p) => +p.id === +pId)[0].type;
  }
  changeType(event: any, info: any) {
    const _isCheked: boolean = event.target.checked;
    let CheckCOnd: boolean = true;
    this.maintanceInfo.forEach((mInfo: any) => {
      if (mInfo === info) {
        mInfo.selected = _isCheked;
      }
      if (!mInfo.selected) {
        CheckCOnd = false;
      }
    });
    this.isChecked = CheckCOnd;
  }
  changeBtnStatus(type: any) {
    this.openAddCity = false;
    this.showBtn = type;
  }

}
