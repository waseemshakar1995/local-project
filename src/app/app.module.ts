import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './AppModules/mat.module';
import { Approute } from './AppModules/approute.module';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { AdmissionComponent } from './Modules/admission/admission.component';
import { AcademicComponent } from './Modules/academic/academic.component';
import { FeeManagementComponent } from './Modules/fee-management/fee-management.component';
import { TimeTableComponent } from './Modules/time-table/time-table.component';
import { ClassActivityComponent } from './Modules/class-activity/class-activity.component';
import { RegistrarComponent } from './Modules/registrar/registrar.component';
import { ReportComponent } from './Modules/report/report.component';
import { SecurityComponent } from './Modules/security/security.component';
import { SettingComponent } from './Modules/setting/setting.component';
import { HomeComponent } from './Modules/home/home.component';
import { HostelComponent } from './Modules/hostel/hostel.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { StudentTableComponent } from './pages/student-table/student-table.component';
import { FormsModule } from '@angular/forms';
import {CustomDirectives} from '../app/Directives/customdirectives.directives';
import { RenderercustomdirectivesDirective } from './directives/renderercustomdirectives.directive';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentsComponent } from './HRCM/departments/departments.component';
import { EmployeesComponent } from './HRCM/employees/employees.component';
import { ProjectsComponent } from './HRCM/projects/projects.component';
import { AuthorizationPageComponent } from './HRCM/authorization-page/authorization-page.component';
import { GazettedHolidaysComponent } from './HRCM/gazetted-holidays/gazetted-holidays.component';
import { AuthInterceptorService } from './Service/auth-interceptors.service';
import { LoggingInterceptorService } from './Service/logging.interceptors.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddKtpPatientComponent } from './KTP/add-ktp-patient/add-ktp-patient.component';
import { PatientVisitsKtpComponent } from './KTP/patient-visits-ktp/patient-visits-ktp.component';
import { KtpFormComponent } from './KTP/ktp-form/ktp-form.component';
import { KtpDetailComponent } from './KTP/ktp-detail/ktp-detail.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AdmissionComponent,
    AcademicComponent,
    FeeManagementComponent,
    TimeTableComponent,
    ClassActivityComponent,
    RegistrarComponent,
    ReportComponent,
    SecurityComponent,
    SettingComponent,
    HomeComponent,
    HostelComponent,
    UserRegistrationComponent,
    UserFormComponent,
    StudentTableComponent,
    CustomDirectives,
    RenderercustomdirectivesDirective,
    PageNotFoundComponent,
    DepartmentsComponent,
    EmployeesComponent,
    ProjectsComponent,
    AuthorizationPageComponent,
    GazettedHolidaysComponent,
    LoginComponent,
    SignupComponent,
    AddKtpPatientComponent,
    PatientVisitsKtpComponent,
    KtpFormComponent,
    KtpDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    Approute,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService,
       multi: true
      },
      {
        provide: HTTP_INTERCEPTORS, 
        useClass: LoggingInterceptorService,
         multi: true
        },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
