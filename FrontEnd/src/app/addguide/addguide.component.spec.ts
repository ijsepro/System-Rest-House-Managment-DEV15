/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {AddguideComponent} from "./addguide.component";

describe('AddguideComponent', () => {
    let component: AddguideComponent;
    let fixture: ComponentFixture<AddguideComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddguideComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddguideComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
