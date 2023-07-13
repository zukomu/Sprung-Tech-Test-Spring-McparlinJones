import { Component, OnInit } from '@angular/core';
import { IItemType } from 'src/app/model/interfaces/IItemType';
import { CharacterStatusService } from 'src/app/services/character-status/character-status.service';
import { InventoryService, inventorySlot } from 'src/app/services/inventory/inventory.service';
import { MousePositionService } from 'src/app/services/mouse-position/mouse-position.service';

@Component({
  selector: 'app-inventory-screen',
  templateUrl: './inventory-screen.component.html',
  styleUrls: ['./inventory-screen.component.scss']
})
export class InventoryScreenComponent implements OnInit {

  constructor(public inventoryService: InventoryService, private mousePositionService: MousePositionService) { }

  ngOnInit(): void {
    this.inventoryService.populateInventory();
  }
  relativeImageUrl: string = "../../../assets/TechTestComponents/Images/Icons/";
  get rows(): inventorySlot[][]{
    return this.inventoryService.inventoryScreenRows;
  }
  useItem(index: number){
    this.inventoryService.useItem(index);
    this.endHover();
  }
  endDrag(fromIndex: number){
    const hoverElements = document.querySelectorAll(":hover");
    let toIndex: number;
    hoverElements.forEach(a => {
      if (a.classList.contains("item")){
        toIndex = +a.id;
      }
    })
    if (toIndex != null && fromIndex != null && toIndex != fromIndex){
      if (this.inventoryService.inventory[fromIndex].item.name === this.inventoryService.inventory[toIndex].item.name){
        this.inventoryService.mergeStacks(fromIndex, toIndex);
      }
      else {
        this.inventoryService.swapPlaces(fromIndex, toIndex);
      }
    }
  }
  hovering: boolean = false
  showTooltip: IItemType = null
  tooltipCoords: {x: number, y: number} = null
  upToDateHoverIndex: number
  startHover(index: number, event: MouseEvent){
    this.hovering = true;
    this.showTooltip = null;
    this.upToDateHoverIndex = index;
    setTimeout(() => {
      if (this.hovering && this.upToDateHoverIndex === index){
        this.showTooltip = this.inventoryService.inventory[index].item;
        this.tooltipCoords = {x: event.x, y: event.y};
      }
    }, 750);
  }
  endHover(){
    this.hovering = false;
    this.showTooltip = null;
    this.tooltipCoords = null;
  }
}
