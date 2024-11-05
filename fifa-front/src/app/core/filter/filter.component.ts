import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  filterForm = new FormGroup({
    fifa_version: new FormControl('23'),
    long_name: new FormControl(''),
    player_positions: new FormControl(''),
    club_name: new FormControl(''),
    nationality_name: new FormControl(''),
  });
  optionVersion = ['23', '22', '21', '20', '19', '18', '17', '16', '15'];

  onSubmit() {
    console.log(this.filterForm.value);
  }
}
