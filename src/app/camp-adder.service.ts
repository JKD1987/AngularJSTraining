import { Injectable, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ComponentFactory } from '../../node_modules/@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class CampAdderService {
  rootViewContainer: ViewContainerRef;
  //factory: ComponentFactory<{}>;

  constructor(private factoryResolver: ComponentFactoryResolver ) { }
  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }
  addDynamicComponent(compToAdd: any) {
    this.rootViewContainer.detach(0);
    const factory = this.factoryResolver.resolveComponentFactory(compToAdd);
    const component = factory.create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);
    } 
}
