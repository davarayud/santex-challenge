import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FilterOptionsInterface } from '../../interfaces/filterOptions.interface';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  filter: FilterOptionsInterface = {
    limit: 12,
    offset: 0,
    fifa_version: '23',
  };
  filterForm = new FormGroup({
    fifa_version: new FormControl('23'),
    long_name: new FormControl(''),
    player_positions: new FormControl(''),
    club_name: new FormControl(''),
    nationality_name: new FormControl(''),
  });
  optionVersion = ['23', '22', '21', '20', '19', '18', '17', '16', '15', 'All'];

  constructor(private router: Router) {}

  onSubmit() {
    const objFilterForm = this.filterForm.value;
    this.filter = {
      limit: 12,
      offset: 0,
      fifa_version: '23',
    };
    if (objFilterForm.fifa_version)
      this.filter.fifa_version = String(objFilterForm.fifa_version);
    if (objFilterForm.long_name)
      this.filter.long_name = String(objFilterForm.long_name);
    if (objFilterForm.player_positions)
      this.filter.player_positions = String(objFilterForm.player_positions);
    if (objFilterForm.club_name)
      this.filter.club_name = String(objFilterForm.club_name);
    if (objFilterForm.nationality_name)
      this.filter.nationality_name = String(objFilterForm.nationality_name);
    this.router.navigate(['/players'], { queryParams: this.filter });
  }

  onReset() {
    this.filter = { limit: 12, offset: 0, fifa_version: '23' };
    this.router.navigate(['/players'], { queryParams: this.filter });
    this.filterForm.reset({
      fifa_version: '23',
      long_name: '',
      player_positions: '',
      club_name: '',
      nationality_name: '',
    });
  }
}
