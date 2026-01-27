class Student {
    constructor(name, family, age, scores, birth) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.scores = scores;
        this.birth = birth;
    }

    getFullName() {
        return this.family + " " + this.name;
    }

    getBirthDay() {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`;
    }

    getAVGScore() {
        return (this.scores.reduce((sum, e) => sum + e, 0) / this.scores.length).toFixed(2);
    }
}


const student2 = new Student("An", "Lê", 19, [8, 7, 9], { year: 2007, month: 5, day: 15 });
const jsons2 = '{"name":"An","family":"Lê","age":19,"scores":[8,7,9],"birth":{"year":2007,"month":5,"day":15}}';

const student3 = new Student("Hoa", "Trần", 20, [10, 9, 10], { year: 2006, month: 1, day: 20 });
const jsons3 = '{"name":"Hoa","family":"Trần","age":20,"scores":[10,9,10],"birth":{"year":2006,"month":1,"day":20}}';



const displayInfo = (id, std, json) => {
    console.log(`%c SINH VIÊN ${id} `, 'background: #222; color: #bada55');
    console.log("Họ tên:", std.getFullName());
    console.log("Ngày sinh:", std.getBirthDay());
    console.log("Điểm TB:", std.getAVGScore());
    console.log("Dữ liệu JSON gốc:", JSON.parse(json));
    console.log("\n");
};

displayInfo(2, student2, jsons2);
displayInfo(3, student3, jsons3);