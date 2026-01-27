// Đối tượng 1 (Mẫu của bạn)
let student1 = {
    name: "Tung",
    family: "Nguyen",
    age: 18,
    scores: [9, 10, 8],
    birth: { year: 2008, month: 11, day: 1 },
    getFullName: function () { return this.family + " " + this.name; },
    getBirthDay: function () { return `${this.birth.day}/${this.birth.month}/${this.birth.year}`; },
    getAVGScore: function () {
        return this.scores.reduce(function (sum, e) { return sum += e; }) / this.scores.length;
    }
}

// --- TẠO THÊM 2 ĐỐI TƯỢNG THEO ĐÚNG CẤU TRÚC TRÊN ---

// Đối tượng 2
let student2 = {
    name: "An",
    family: "Le",
    age: 19,
    scores: [8, 7, 9],
    birth: { year: 2007, month: 5, day: 15 },
    getFullName: function () { return this.family + " " + this.name; },
    getBirthDay: function () { return `${this.birth.day}/${this.birth.month}/${this.birth.year}`; },
    getAVGScore: function () {
        return this.scores.reduce(function (sum, e) { return sum += e; }) / this.scores.length;
    }
}

// Đối tượng 3
let student3 = {
    name: "Hoa",
    family: "Tran",
    age: 20,
    scores: [10, 9, 10],
    birth: { year: 2006, month: 1, day: 20 },
    getFullName: function () { return this.family + " " + this.name; },
    getBirthDay: function () { return `${this.birth.day}/${this.birth.month}/${this.birth.year}`; },
    getAVGScore: function () {
        return this.scores.reduce(function (sum, e) { return sum += e; }) / this.scores.length;
    }
}

// Dữ liệu JSON tương ứng
let jsons1 = '{"name":"Tung","family":"Nguyen","age":18,"scores":[9,10,8],"birth":{"year":2008,"month":11,"day":1}}';
let jsons2 = '{"name":"An","family":"Le","age":19,"scores":[8,7,9],"birth":{"year":2007,"month":5,"day":15}}';
let jsons3 = '{"name":"Hoa","family":"Tran","age":20,"scores":[10,9,10],"birth":{"year":2006,"month":1,"day":20}}';

// Kiểm tra kết quả
console.log("Parse JSON 1:", JSON.parse(jsons1));
console.log("Parse JSON 2:", JSON.parse(jsons2));
console.log("Parse JSON 3:", JSON.parse(jsons3));

// Gọi thử phương thức của đối tượng mới
console.log("Full Name SV2:", student2.getFullName());
console.log("Điểm TB SV3:", student3.getAVGScore());