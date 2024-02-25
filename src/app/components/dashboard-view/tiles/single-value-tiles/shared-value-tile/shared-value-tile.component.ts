import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-shared-value-tile',
  templateUrl: './shared-value-tile.component.html',
  styleUrls: ['./shared-value-tile.component.css']
})

export class SharedValueTileComponent  {
  
  
  @Input() title:string = 'Title';
  @Input() value:any = 0;
  @Input() isLoading: boolean = true;
  @Input() valueClass:string = '';
  @Input() fontSize:'fs-1' | 'fs-2' | 'fs-3' | 'fs-4' | 'fs-5' | 'fs-6' = 'fs-1';



  
}
