import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BackendReaderService } from '../backend-reader.service';
@Component({
  selector: 'app-list-browser',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './list-browser.component.html',
  styleUrl: './list-browser.component.css'
})

export class ListBrowserComponent {
  @Input('filterField')filterField : string;
  filteredValue:string;
  constructor(private backendReader: BackendReaderService) {}
  
  public filterEvent(){
    this.backendReader.setFilter(this.filterField,this.filteredValue);
    this.backendReader.filter().subscribe();
  }
}
