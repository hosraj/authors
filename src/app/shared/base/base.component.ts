import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {

  protected unsubscribe = new Subject();

  constructor(public service: AppService) { }
  ngOnInit() {
    console.log('BASE');
    this.service.subject$
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((value)=> {
      console.log('BASE' + value);
      this.process(value);
    })
  }

  process(data): void {
      // this method do some processing and set the data
      const newData = data; // assume newData is processed data
      this.setData(newData);
  }

  setData(newData) {}

  ngOnDestroy(): void {
      this.unsubscribe.next();
      this.unsubscribe.complete();
  }

}

}
