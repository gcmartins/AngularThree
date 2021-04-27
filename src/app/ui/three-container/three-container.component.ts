import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ThreeWorldService } from 'src/app/service/three-world.service';

@Component({
  selector: 'app-three-container',
  templateUrl: './three-container.component.html',
  styleUrls: ['./three-container.component.css']
})
export class ThreeContainerComponent implements AfterViewInit {
  @ViewChild('threeContainer') threeContainer: ElementRef;

  constructor(private threeService: ThreeWorldService) { }
  ngAfterViewInit(): void {
    const container = this.threeContainer.nativeElement;
  
    this.threeService.createWorld(container);
  }

}
