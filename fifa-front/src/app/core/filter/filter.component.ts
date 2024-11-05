import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
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

  onSubmit() {
    console.log(this.filterForm.value);
  }
}
