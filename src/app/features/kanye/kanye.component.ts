import { Component, OnInit } from '@angular/core';
import { YeService } from 'src/app/core/ye.service';

@Component({
  selector: 'app-kanye',
  templateUrl: './kanye.component.html',
  styleUrls: ['./kanye.component.css']
})
export class KanyeComponent implements OnInit {

  quote: string = '';

  constructor(
    private yeService: YeService
  ) {}

  ngOnInit() {
    this.getNewQuote();
  }

  getNewQuote() {
    this.yeService.getQuote().subscribe(data => {
      if(data) {
        this.quote = data.quote;
      }
    })
  }

}
