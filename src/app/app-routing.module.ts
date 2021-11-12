import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TopHeadingComponent} from "./top-heading/top-heading.component";
import {TechnologyComponent} from "./technology/technology.component";
import {HealthComponent} from "./health/health.component";

const routes: Routes = [
  {path: "", component: TopHeadingComponent},
  {path: "technology", component: TechnologyComponent},
  {path: "health", component: HealthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
