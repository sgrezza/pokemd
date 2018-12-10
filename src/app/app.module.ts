import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './content/sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { RendererComponent } from './content/renderer/renderer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouteRoutingModule } from './app.router';
import { SquishPipe } from './content/sidebar/app.squish';
import { catResolver } from './app.resolver';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    RendererComponent,
    SquishPipe
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
