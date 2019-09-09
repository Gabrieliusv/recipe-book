import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapse = true;
  @Output() selected = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onClick(feature: string) {
    this.selected.emit(feature);
  }
}
