import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LayoutService {
    public openDrawer: Subject<void> = new Subject<void>();
}
