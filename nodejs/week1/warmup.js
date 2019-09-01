class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getDiameter() {
        return this.radius* 2;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
};

const smallCircle = new Circle(4);
console.log(smallCircle)
console.log(smallCircle.getArea());

const mediumCircle = new Circle(10);
console.log(mediumCircle.getCircumference());

const bigCircle = new Circle(20);
console.log(bigCircle.getDiameter());
