import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { CoursesModule } from './courses/courses.module';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { PageComponent } from './staticpages/page/page.component';
import { ContactUsComponent } from './staticpages/contact-us/contact-us.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path:'course',component: CourseListComponent},
{path:'course/:id',component: CourseDetailComponent},
{path:'page/:slug', component:PageComponent},
{path:'contact',component:ContactUsComponent},
{path:'registration',component: RegistrationComponent},
  {path:'login',component: LoginComponent},
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    StaticpagesModule,
    CoursesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
