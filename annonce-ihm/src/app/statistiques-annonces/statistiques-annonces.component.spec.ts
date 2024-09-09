import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesAnnoncesComponent } from './statistiques-annonces.component';

describe('StatistiquesAnnoncesComponent', () => {
  let component: StatistiquesAnnoncesComponent;
  let fixture: ComponentFixture<StatistiquesAnnoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatistiquesAnnoncesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiquesAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
