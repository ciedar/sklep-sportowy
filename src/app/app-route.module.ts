import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes  = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
]




@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRouteModule {

}