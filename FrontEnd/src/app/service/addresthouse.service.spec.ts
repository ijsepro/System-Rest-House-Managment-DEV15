import { TestBed, inject } from '@angular/core/testing';

import { AddresthouseService } from './addresthouse.service';

describe('AddresthouseService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AddresthouseService]
        });
    });

    it('should be created', inject([AddresthouseService], (service: AddresthouseService) => {
        expect(service).toBeTruthy();
    }));
});
