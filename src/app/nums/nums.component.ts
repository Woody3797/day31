import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-nums',
    templateUrl: './nums.component.html',
    styleUrls: ['./nums.component.css']
})
export class NumsComponent {

    @Input({required: true})
    value : number = 0;

    onPress() {
        console.info(`value is ${this.value}`);
    }

    incrementValue(v = 1) {
        this.value += v;
        if (this.value == 31) {
            this.value = 0;
        }
    }
}
