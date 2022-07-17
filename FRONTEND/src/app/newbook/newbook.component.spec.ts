import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbooksComponent} from './newbook.component';

describe('NewbookComponent', () => {
  let component: NewbooksComponent;
  let fixture: ComponentFixture<NewbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
