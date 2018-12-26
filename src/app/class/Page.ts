export class Page<T> {
    content: T[];
    totalPages: Number;
    totalElements: Number;
    last: Boolean;
    numberOfElements: Number;
    first: Boolean;
    size: Number;
    number: Number;

    constructor(object: Object) {
        console.log(' ppp sp+++ssscontent:');
        this.content = object['content'];
        this.first = object['first'];
        this.last = object['last'];
        this.totalPages = object['totalPages'];
        this.totalElements = object['totalElements'];
        this.numberOfElements = object['numberOfElements'];
        this.size = object['size'];
        this.number = object['number'];
        console.log(this.numberOfElements);
        console.log(this.content[1]);
        //console.log(this.content);
    }

    /*
            constructor(object: any) {
        this.content = JSON.parse(object.content);
        console.log('+++ssscontent:' + this.content);
        this.totalPages = object.totalPages;
        this.totalElements = object.totalElements;
        this.last = object.last;
        this.numberOfElements = object.numberOfElements;
        this.first = object.first;
        this.size = object.size;
        this.number = object.number;
    }*/
}
