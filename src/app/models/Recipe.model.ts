export class Recipe {
    photo: string;
    constructor(
        public title: string,
        public portions: string,
        public meal: string,
        public prepareTime: string,
        public globalTime: string,
        public ingredients: any[],
        public steps: any[],
        public toShop: boolean) {}
}