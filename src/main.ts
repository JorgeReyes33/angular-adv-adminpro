import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';

// Importa los elementos necesarios de chart.js
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js';

// Registra los controladores y elementos necesarios
Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

// bootstrapApplication(AppComponent, {
//   providers: [provideCharts(withDefaultRegisterables())],
// }).catch((err) => console.error(err));


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
