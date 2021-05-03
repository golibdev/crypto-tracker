import { Component, OnInit, enableProdMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  cryptoStatistics: any;
  cryptoStatistics_org: any;
  keyword: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').subscribe((data: any) => {
      this.cryptoStatistics = data;
      this.cryptoStatistics_org = data;
    });
  }

  onCryptoNameFilter() {
    this.cryptoStatistics = this.cryptoStatistics_org.filter(
      (result: any) => {
        return result.name.toLowerCase().includes(this.keyword.toLowerCase());
      }
    )
  }

}
