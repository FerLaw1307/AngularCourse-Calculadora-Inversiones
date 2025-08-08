//=========================================================================
/*
Forma de inicializar una aplicacion angular con Modulo principal
*/
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);


//=========================================================================
/*
Forma de inicializar una aplicacion angular con StandAlone Components
*/
// import { AppComponent } from './app/app.component';
// bootstrapApplication(AppComponent).catch((err) => console.error(err));
// import { bootstrapApplication } from '@angular/platform-browser';