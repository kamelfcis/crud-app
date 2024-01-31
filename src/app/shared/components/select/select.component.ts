import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor() {

  }
  @Input() title: string = ""
  @Input() data: any[] = [];
  @Output() selectedValue = new EventEmitter();

  detectChanges(event: any) {
    this.selectedValue.emit(event)
  }
}
