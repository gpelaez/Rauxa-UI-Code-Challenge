import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersSearchComponent } from './followers-search.component';

describe('FollowersSearchComponent', () => {
  let component: FollowersSearchComponent;
  let fixture: ComponentFixture<FollowersSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
