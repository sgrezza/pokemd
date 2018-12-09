import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RendererComponent } from './content/renderer/renderer.component';
// import { renderComponent } from '@angular/core/src/render3';
import { catResolver } from './app.resolver';
const routes: Routes = [{ path: '', component: RendererComponent,
resolve: {
  body: catResolver
} }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class RouteRoutingModule {}
