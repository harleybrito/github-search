import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() isHomeScreen: boolean = true;
  @Input() fieldValue: string;
  @Output() searchFieldEmitter: EventEmitter<string> = new EventEmitter();

  public searchField: FormControl = new FormControl();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fieldValue ? this.searchField.setValue(this.fieldValue) : this.searchField.setValue(null);
  }

  public onSearchClicked(): void{
    this.searchFieldEmitter.emit(this.searchField.value);
  }
}
