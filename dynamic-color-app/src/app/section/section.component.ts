import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Section } from './section.model';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  @Input() section!: Section;
  @Input() isActive: boolean = false;
  @Output() clickEvent = new EventEmitter<string>();

  emitClickEvent() {
    this.clickEvent.emit(this.section.color);
  }
}
