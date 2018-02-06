import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  name="mohammadAyaj";
  number=8.567;
  curr="88";

  constructor() { }

  ngOnInit() {
  }

}
