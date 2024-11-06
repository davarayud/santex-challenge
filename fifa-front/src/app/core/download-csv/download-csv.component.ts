import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterOptionsInterface } from '../../interfaces/filterOptions.interface';
import { CsvDownloadService } from '../../service/csv-players.service';

@Component({
  selector: 'app-download-csv',
  standalone: true,
  imports: [],
  templateUrl: './download-csv.component.html',
  styleUrl: './download-csv.component.scss',
})
export class DownloadCsvComponent {
  constructor(
    private route: ActivatedRoute,
    private csvDownloadService: CsvDownloadService
  ) {}

  onClick() {
    let query: FilterOptionsInterface = {
      limit: 12,
      offset: 0,
      fifa_version: '23',
    };
    this.route.queryParams.subscribe((params) => {
      if (params['limit']) query.limit = params['limit'];
      if (params['offset']) query.offset = params['offset'];
      if (params['fifa_version']) query.fifa_version = params['fifa_version'];
      if (params['long_name']) query.long_name = params['long_name'];
      if (params['player_positions'])
        query.player_positions = params['player_positions'];
      if (params['club_name']) query.club_name = params['club_name'];
      if (params['nationality_name'])
        query.nationality_name = params['nationality_name'];
    });
    this.csvDownloadService.getPlayers(query).subscribe((res) => {
      const url = window.URL.createObjectURL(res);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'players.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }
}
