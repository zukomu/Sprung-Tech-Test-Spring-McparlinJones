import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTooltipComponent } from './inventory-tooltip.component';

describe('InventoryTooltipComponent', () => {
  let component: InventoryTooltipComponent;
  let fixture: ComponentFixture<InventoryTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
