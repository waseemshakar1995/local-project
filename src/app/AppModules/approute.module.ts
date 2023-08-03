import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthorizationPageComponent } from '../HRCM/authorization-page/authorization-page.component';
import { DepartmentsComponent } from '../HRCM/departments/departments.component';
import { EmployeesComponent } from '../HRCM/employees/employees.component';
import { GazettedHolidaysComponent } from '../HRCM/gazetted-holidays/gazetted-holidays.component';
import { ProjectsComponent } from '../HRCM/projects/projects.component';
import { LoginComponent } from '../login/login.component';
import { AcademicComponent } from '../Modules/academic/academic.component';
import { AdmissionComponent } from '../Modules/admission/admission.component';
import { ClassActivityComponent } from '../Modules/class-activity/class-activity.component';
import { FeeManagementComponent } from '../Modules/fee-management/fee-management.component';
import { HomeComponent } from '../Modules/home/home.component';
import { HostelComponent } from '../Modules/hostel/hostel.component';
import { RegistrarComponent } from '../Modules/registrar/registrar.component';
import { ReportComponent } from '../Modules/report/report.component';
import { SecurityComponent } from '../Modules/security/security.component';
import { SettingComponent } from '../Modules/setting/setting.component';
import { TimeTableComponent } from '../Modules/time-table/time-table.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { AuthGuardService } from '../Service/auth.guard.service';
import { AuthService} from '../Service/auth.service';
import { SignupComponent } from '../signup/signup.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../Service/auth-interceptors.service';
import { PatientVisitsKtpComponent } from '../KTP/patient-visits-ktp/patient-visits-ktp.component';
import { KtpFormComponent } from '../KTP/ktp-form/ktp-form.component';
import { KtpDetailComponent } from '../KTP/ktp-detail/ktp-detail.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'patient-visits-ktp', component:PatientVisitsKtpComponent, canActivate: [AuthGuardService]},
    { path: 'ktp-form', component:KtpFormComponent, canActivate: [AuthGuardService]},
    { path: 'patient-visits-ktp/ktp-detail', component: KtpDetailComponent, canActivate: [AuthGuardService]},
    { path: 'academic', component: AcademicComponent, canActivate: [AuthGuardService] },
    { path: 'admission', component: AdmissionComponent, canActivate: [AuthGuardService] },
    { path: 'hostel', component: HostelComponent, canActivate: [AuthGuardService] },
    { path: 'class-activity', component: ClassActivityComponent, canActivate: [AuthGuardService] },
    { path: 'fee-management', component: FeeManagementComponent, canActivate: [AuthGuardService] },
    { path: 'registrar', component: RegistrarComponent, canActivate: [AuthGuardService] },
    { path: 'report', component: ReportComponent, canActivate: [AuthGuardService] },
    { path: 'security', component: SecurityComponent, canActivate: [AuthGuardService] },
    { path: 'setting', component: SettingComponent, canActivate: [AuthGuardService] },
    { path: 'time-table', component: TimeTableComponent, canActivate: [AuthGuardService] },
    { path: 'departments', component: DepartmentsComponent, canActivate: [AuthGuardService] },
    { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuardService] },
    { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuardService] },
    { path: 'gazetted-holidays', component: GazettedHolidaysComponent, canActivate: [AuthGuardService] },
    { path: 'authorization-page', component: AuthorizationPageComponent, canActivate: [AuthGuardService] },
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: 'page-not-found' },
  ];
  
  

    @NgModule({
        
        declarations: [],
        imports: [
            RouterModule.forRoot(appRoutes)
        ],

        exports: [],
        providers: [
        AuthService,
        AuthGuardService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true
    }]

    })
    export class Approute {}