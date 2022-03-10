import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-tophead-lines',
  templateUrl: './tophead-lines.component.html',
  styleUrls: ['./tophead-lines.component.css']
})
export class TopheadLinesComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
  topheadlinesData:any=[];
  ngOnInit(): void {
    this.api.tcheadlines().subscribe((result)=>{
      console.log(result.articles);
      this.topheadlinesData = result.articles;
    })
  }

}
