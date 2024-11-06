import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register/register/register.component";

const appRoutes: Routes  = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'sign-up', component: RegisterComponent}
]




@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRouteModule {

}