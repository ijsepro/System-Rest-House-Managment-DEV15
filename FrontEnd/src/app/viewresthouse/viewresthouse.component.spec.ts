/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViewresthouseComponent } from './viewresthouse.component';

describe('ViewresthouseComponent', () => {
    let component: ViewresthouseComponent;
    let fixture: ComponentFixture<ViewresthouseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ViewresthouseComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewresthouseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
