import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Importa los elementos necesarios de chart.js
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js';

// Registra los controladores y elementos necesarios
Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
