import { TestBed, inject } from '@angular/core/testing';

import { AddlocationtypeService } from './addlocationtype.service';

describe('AddlocationtypeService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AddlocationtypeService]
        });
    });

    it('should be created', inject([AddlocationtypeService], (service: AddlocationtypeService) => {
        expect(service).toBeTruthy();
    }));
});
