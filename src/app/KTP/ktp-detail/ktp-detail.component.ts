import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/Service/userdata.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { map } from 'rxjs';


@Component({
  selector: 'app-ktp-detail',
  templateUrl: './ktp-detail.component.html',
  styleUrls: ['./ktp-detail.component.scss'],
})
export class KtpDetailComponent implements OnInit {
  dataList: any;
  panelOpenState = false;
  selectedData:any = [];
  cHistory:any;

  constructor(private route: ActivatedRoute, 
    private userDataService:UserDataService,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    const requestData = {
      "fromdate": "2023-07-06T05:00:00.000Z",
      "todate": "2023-07-07T04:59:53.071Z",
      "visitnum": "23474",
      "regnum": "PMIC-245"
    };
    this.userDataService.getsingleLtpPatients(requestData)
      .pipe(map((response: any) => {
        return response.data[0];
      }))
      .subscribe(response => {
        this.selectedData = {...response,visitdate:this.formatDate(response.visitdate)}
      });
  }
  
  formatDate(date: string): string {
    const formattedDate = this.datePipe.transform(date, 'M/d/yyyy, h:mm:ss a');
    return formattedDate || '';
  }
  submit() {
    console.log(this.cHistory);
    
  }
  

  // data['hemotology']['Hemoglobin']
  hematologyData = [
    { name: 'Hemoglobin (g/dL)', result: '', normalValue: '' },
    { name: 'RBC Morphology', result: '', normalValue: '' },
    { name: 'RBCs', result: '', normalValue: '' },
    { name: 'HCT', result: '', normalValue: '' },
    { name: 'MCV', result: '', normalValue: '' },
    { name: 'MCH', result: '', normalValue: '' },
    { name: 'TLC', result: '', normalValue: '' },
    { name: 'Neut', result: '', normalValue: '' },
    { name: 'Lympho', result: '', normalValue: '' },
    { name: 'Mono', result: '', normalValue: '' },
    { name: 'Eos', result: '', normalValue: '' },
    { name: 'Platelets', result: '', normalValue: '' },
    { name: 'PT(Control:13)', result: '', normalValue: '' },
    { name: 'APTT(Control:30)', result: '', normalValue: '' },
    { name: 'INR', result: '', normalValue: '' },
    { name: 'Fibrinogen Level ', result: '', normalValue: '' },
  ];
  biochemistryData = [
    { name: 'ALT', result: '', normalValue: '' },
    { name: 'AST', result: '', normalValue: '' },
    { name: 'ALP', result: '', normalValue: '' },
    { name: 'Gamma GT', result: '', normalValue: '' },
    { name: 'T.Bilirubin', result: '', normalValue: '' },
    { name: 'D.Bilirubin', result: '', normalValue: '' },
    { name: 'Albumin', result: '', normalValue: '' },
    { name: 'Protein', result: '', normalValue: '' },
    { name: 'HbAlc / BSR', result: '', normalValue: '' },
    { name: 'Cholesterol', result: '', normalValue: '' },
    { name: 'Triglycerides', result: '', normalValue: '' },
    { name: 'LDL', result: '', normalValue: '' },
    { name: 'HDL', result: '', normalValue: '' },
    { name: 'BUN', result: '', normalValue: '' },
    { name: 'Creatinine', result: '', normalValue: '' },
    { name: 'Sodium', result: '', normalValue: '' },
    { name: 'Potassium', result: '', normalValue: '' },
    { name: 'Calcium', result: '', normalValue: '' },
    { name: 'Bicarbonate', result: '', normalValue: '' },
    { name: 'Phosphate', result: '', normalValue: '' },
    { name: 'Chloride', result: '', normalValue: '' },
    { name: 'Magnesium', result: '', normalValue: '' },
    { name: 'Ceruloplasmin', result: '', normalValue: '' },
    { name: 'Iron', result: '', normalValue: '' },
    { name: 'TIBC', result: '', normalValue: '' },
    { name: 'Vitamin D3', result: '', normalValue: '' },
    { name: 'Alpha-1-antitrypsin', result: '', normalValue: '' },
    { name: 'ANA', result: '', normalValue: '' },
    { name: 'Quantiferon TB Gold', result: '', normalValue: '' },
    { name: 'G-6 PD-Enzyme', result: '', normalValue: '' }
  ];
  viralSerologyData = [
    { name: 'HBsAg', result: '', normalValue: '' },
    { name: 'Anti HBc Total', result: '', normalValue: '' },
    { name: 'HBV-DNA-PCR', result: '', normalValue: '' },
    { name: 'Anti HBS antibody', result: '', normalValue: '' },
    { name: 'Anti HCV', result: '', normalValue: '' },
    { name: 'Hep C RNA-PCR', result: '', normalValue: '' },
    { name: 'HCV Genotype', result: '', normalValue: '' },
    { name: 'CMV 1gM', result: '', normalValue: '' },
    { name: 'CMV 1gG', result: '', normalValue: '' },
    { name: 'EBV 1gM', result: '', normalValue: '' },
    { name: 'EBV 1gG', result: '', normalValue: '' },
    { name: 'CMV-PCR-DNA-QL (cytomegalovirus)', result: '', normalValue: '' },
    { name: 'VDRL/Anti TP Ab', result: '', normalValue: '' },
    { name: 'HIV I & II', result: '', normalValue: '' },
    { name: 'Anti HDV if HbsAg positive', result: '', normalValue: '' },
    { name: 'G-6 PD-Enzyme', result: '', normalValue: '' },
  ];
  tumerMakersData = [
    { name: 'Alpha Fetoprotein', result: '', normalValue: '' },
    { name: 'HCG for female patient', result: '', normalValue: '' },
  ];
  urineAssayData = [
    { name: 'URINE R/E', result: '', normalValue: '' },
    { name: 'URINE R/E Colour', result: '', normalValue: '' },
    { name: 'URINE R/E pH', result: '', normalValue: '' },
    { name: 'URINE R/E Protein', result: '', normalValue: '' },
    { name: 'URINE R/E Sugar', result: '', normalValue: '' },
    { name: 'URINE R/E Pus Cells', result: '', normalValue: '' },
    { name: 'URINE R/E RBC', result: '', normalValue: '' },
    { name: 'URINE R/E Epithelial Cells', result: '', normalValue: '' },
    { name: 'URINE R/E Castes/Crystals', result: '', normalValue: '' },
    { name: 'URINE R/E Nitrites', result: '', normalValue: '' },
    { name: 'URINE R/E Ketones', result: '', normalValue: '' },
    { name: 'Spot urine Creatinine ', result: '', normalValue: '' },
    { name: 'Spot urine protein', result: '', normalValue: '' },
  ];
  urineCultureData = [
    {name: '24 HOUR URINE COLLECTION FOR CREATININE CLEARANCE', result: '', normalValue: ''},
    {name: '24 HRS Urine Volume', result: '', normalValue: ''},
    {name: 'Urine Creatinine', result: '', normalValue: ''},
    {name: 'Serum Creatinine', result: '', normalValue: ''},
    {name: 'Surface Area', result: '', normalValue: ''},
    {name: 'Creatinine Clearance', result: '', normalValue: ''},
  ];
  endocrineData = [
    {name: 'Thyroid TSH', result: '', normalValue: ''},
    {name: 'Thyroid F T3', result: '', normalValue: ''},
    {name: 'Thyroid F T4', result: '', normalValue: ''},
  ];
  bloodcultureData = [
    {name:'Blood Culture', result: '', normalValue: ''}
  ];
  asciticFluid = [
    {name: 'TLC',result: '', normalValue: ''},
    {name: 'RBCs',result: '', normalValue: ''},
    {name: 'DLC',result: '', normalValue: ''},
    {name: 'Lympho',result: '', normalValue: ''},
    {name: 'Polymorphs',result: '', normalValue: ''},
    {name: 'Malignant Cells',result: '', normalValue: ''},
    {name: 'Culture growth',result: '', normalValue: ''},
    {name: 'Gram Stain',result: '', normalValue: ''},
    {name: 'ZN Stain',result: '', normalValue: ''},
    {name: 'Total Protein',result: '', normalValue: ''},
    {name: 'Albumin',result: '', normalValue: ''},
    {name: 'Glucose',result: '', normalValue: ''},
    {name: 'LDH',result: '', normalValue: ''},
  ]

  // radiologysection
  


}
