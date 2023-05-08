import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-nums',
    templateUrl: './nums.component.html',
    styleUrls: ['./nums.component.css']
})
export class NumsComponent {

    @Input({required: true})
    value : number = 0;

    @Output()
    onSelected = new Subject<number>();

    onPress(e: any) {
        console.info(`value is ${this.value}`);
        // console.info(e)
        this.onSelected.next(this.value);
    }

    incrementValue(v = 1) {
        this.value += v;
        if (this.value == 31) {
            this.value = 0;
        }
    }
}
