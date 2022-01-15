export class Calculator {

    #result : number = 0;

    constructor() {
        console.log('계산기 생성!');
    }

    /*TODO
        - subtract
        - divide
        - multiply
     */

    add(b: number) : this {
        this.result += b;
        return this;
    }

    get result(): number {
        return this.#result;
    }

    set result(value: number) {
        this.#result = value;
    }
}