import { compileClassDebugInfo } from '@angular/compiler';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { SelfServicePortalComponent } from './components/employee/self-service-portal/self-service-portal.component';
import { LeaverequestComponent } from './components/employee/leaverequest/leaverequest.component';
import { PersonalInformationComponent } from './components/employee/personal-information/personal-information.component';
import { ComplaincereportComponent } from './components/admin/complaincereport/complaincereport.component';
import { ComplianceReportComponent } from './components/employee/compliance-report/compliance-report.component';
import { ManageemployeeComponent } from './components/admin/manageemployee/manageemployee.component';
import { ManageuserComponent } from './components/admin/manageuser/manageuser.component';
import { PayrollconfigComponent } from './components/admin/payrollconfig/payrollconfig.component';
import { provideHttpClient } from '@angular/common/http';

// import { routes } from './app.routes';

const routes : Routes =[
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'app-login',
    component: LoginComponent
  },
  {
    path: 'app-register',
    component: RegisterComponent
  },
  {
    path: 'app-admin-dashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'app-self-service-portal',
    component: SelfServicePortalComponent
  },
  {
    path: 'app-leaverequest',
    component: LeaverequestComponent
  },
  {
    path: 'app-personal-information',
    component: PersonalInformationComponent
  },
  {
    path: 'app-compliance-report',
    component: ComplianceReportComponent
  },
  {
    path: 'app-complaincereport',
    component: ComplaincereportComponent
  },
  {
    path: 'app-manageemployee',
    component: ManageemployeeComponent
  },
  {
    path: 'app-manageuser',
    component: ManageuserComponent
  },
  {
    path: 'app-payrollconfig',
    component: PayrollconfigComponent
  }
 
]

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
