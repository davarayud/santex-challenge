import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';

@Component({
  selector: 'app-skills-chart',
  standalone: true,
  imports: [],
  templateUrl: './skills-chart.component.html',
  styleUrl: './skills-chart.component.scss',
})
export class SkillsChartComponent implements OnInit, OnChanges {
  @Input() dataPlayer: number[] = [0, 0, 0, 0, 0, 0];
  @Input() NamePlayer: string = '';

  radarChart: Chart | undefined;

  constructor() {
    // Registrar los componentes de Chart.js
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    console.log('algo', this.NamePlayer);
    this.createRadarChart();
  }

  createRadarChart(): void {
    const ctx = document.getElementById('radarChart') as HTMLCanvasElement;

    this.radarChart = new Chart(ctx, {
      type: 'radar' as ChartType,
      data: {
        labels: [
          'Ritmo de juego',
          'Tiro al arco',
          'Pase',
          'Regate',
          'Defensa',
          'Físico',
        ],
        datasets: [
          {
            label: this.NamePlayer,
            data: [20, 30, 40, 50, 60, 70],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          r: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateInput();
  }

  updateInput() {
    if (this.radarChart) {
      this.radarChart.data.datasets[0].data = this.dataPlayer;
      this.radarChart.data.datasets[0].label = this.NamePlayer;
      this.radarChart.update();
    }
  }
}
