import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { StringInterpolationComponent } from './components/bindings/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './components/bindings/property-binding/property-binding.component';
import { EventBindingComponent } from './components/bindings/event-binding/event-binding.component';
import { HelloComponentComponent } from './components/hello-component/hello-component.component';
import { CounterActionsComponentComponent } from './components/counter-actions-component/counter-actions-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    HelloComponentComponent,
    CounterActionsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
