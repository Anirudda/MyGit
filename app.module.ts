import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './others/PageNotFound.component';

const appRoute: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: '', redirectTo: '/home',pathMatch:'full' },
    { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoute)],
    declarations: [AppComponent, EmployeeComponent, HomeComponent, PageNotFoundComponent],
    bootstrap: [AppComponent]
    
})
export class AppModule { }
