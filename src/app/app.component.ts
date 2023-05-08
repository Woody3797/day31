import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    pics: string[] = [
        'https://s.yimg.com/ny/api/res/1.2/JcWWjXw1wUQ.YZXXcZslqg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MA--/https://o.aolcdn.com/images/dar/5845cadfecd996e0372f/60c4c1b299b946b9c1f3ed043dcd4b76d991ecf9/aHR0cDovL28uYW9sY2RuLmNvbS9kaW1zLXNoYXJlZC9kaW1zMy9HTE9CL2Nyb3AvMzYwMHgyMzk2KzArMTE5NS9yZXNpemUvNTkweDM5MyEvZm9ybWF0L2pwZy9xdWFsaXR5Lzg1L2h0dHA6Ly9vLmFvbGNkbi5jb20vaHNzL3N0b3JhZ2UvbWlkYXMvMjA5OTYxYjkzMDc0OTViZWFiNjU0NjUzOTU1NmEwMGUvMjAwNjgzNjAxL3JleGZlYXR1cmVzXzQwODI0OThjLmpwZw==',
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F06%2F26%2Ftiny-white-kitten-873941684-2000.jpg',
        'https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B900%2C533%5D&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F12%2Fpomeranian-white-puppy-921029690-2000.jpg',
    ]

    values: number[] = [];

    constructor() {
        this.generateNums();
    }

    generateNums() {
        this.values = [];
        // generate 5 random numbers between 1 and 30 (inclusive)
        for (let i = 0; i < 5; i++) {
            const n = Math.floor(Math.random() * 30) + 1;
            this.values.push(n);
        }

        console.info(this.values);
    }
}
