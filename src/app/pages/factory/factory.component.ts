import { Component } from '@angular/core';
import { MainService } from '../../shared/services/main.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-factory',
  imports: [AsyncPipe],
  templateUrl: './factory.component.html',
  styleUrl: './factory.component.css',
})
export class FactoryComponent {
  constructor(
    public mainService: MainService
  ) { }
}
