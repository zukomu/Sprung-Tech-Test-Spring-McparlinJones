import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MousePositionService {

  constructor() {
    window.addEventListener("mousemove", (event) =>{
      this.mousePosition = {x: event.x, y: event.y};
    });
   }

  mousePosition: {x: number, y: number}

}
