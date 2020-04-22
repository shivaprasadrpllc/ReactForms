import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-from-contols',
  templateUrl: './from-contols.component.html',
  styleUrls: ['./from-contols.component.scss']
})
export class FromContolsComponent implements OnInit {

  actionFormgroup: FormGroup;
  skillSet: any = [
    { name: 'C#', value: 'cLang' },
    { name: 'DOT.Net', value: 'dotnet' },
    { name: 'Angular', value: 'angular' },
  ];
  showDiv: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.actionFormgroup = this.formBuilder.group({
      fName: new FormControl('Shiva', []),
      lName: new FormControl('Prasad', []),
      email: new FormControl('abc@gmail.com', []),
      gender: new FormControl('female', []),
      isActive: new FormControl(false, []),
      companyInfo: new FormGroup({
        fName: new FormControl('PLLC'),
        compCode: new FormControl('PHD110')
      }),
      skills: new FormArray([
        this.formBuilder.group({
          cLang: new FormControl(true),
          dotnet: new FormControl(true),
          angular: new FormControl(true),
        })
      ])
    });
    setTimeout(() => {
      this.addNewArray();
      this.showDiv = true;
      console.log(this.actionFormgroup);
    }, 3000);
  }

  addNewArray(): void {
    console.log(this.getFormControls());
    (this.actionFormgroup.get('skills') as FormArray).push(
      this.getFormControls()
    );
  }

  getFormControls(): FormGroup {
    const group = {};
    this.skillSet.forEach(skill => {
      group[skill.value] = new FormControl(true);
    });
    console.log(group);
    return new FormGroup(group);
  }

}
