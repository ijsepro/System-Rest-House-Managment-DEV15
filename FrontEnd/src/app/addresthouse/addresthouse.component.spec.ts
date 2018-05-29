/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddresthouseComponent } from './addresthouse.component';

describe('AddresthouseComponent', () => {
    let component: AddresthouseComponent;
    let fixture: ComponentFixture<AddresthouseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddresthouseComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddresthouseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
