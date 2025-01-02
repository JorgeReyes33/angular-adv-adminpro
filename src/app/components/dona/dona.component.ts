import { Component, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js'; // Importa solo ChartConfiguration
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

  @Input() title: string = 'Sin titulo';

  //@Input() labels: string[] = [];
  @Input('labels') doughnutChartLabels: string[] = ['label1', 'label2', 'label3'];

  //@Input() data: any[] = [];
  @Input('data') doughnutChartData = [
    {
      data: [350, 450, 100],
      backgroundColor: ['#6857E6', '#009FEE', '#F02059']
    },
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
  };

}
