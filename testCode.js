const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function showSlide(i) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 3000); // প্রতি ৩ সেকেন্ডে পরিবর্তন

const like = document.querySelectorAll(".react");
const hideIMgs = document.querySelectorAll(".hide_img");
const siralNumber = document.querySelectorAll(".number");
const btn_box = document.querySelectorAll(".btn_box");
const circale = document.querySelectorAll(".circale");
const cards = document.querySelectorAll(".card"); // plural name

cards.forEach((card, index) => {
  card.addEventListener("mouseenter", () => {
    like[index].style.visibility = "visible";
    like[index].style.opacity = 1;

    siralNumber[index].style.visibility = "visible";
    siralNumber[index].style.opacity = 1;

    btn_box[index].style.visibility = "visible";
    btn_box[index].style.opacity = 1;

    circale[index].style.visibility = "visible";
    circale[index].style.opacity = 1;

    card.style.boxShadow = "0px 0px 4px var(--box-show-clr)";
  });

  card.addEventListener("mouseleave", () => {
    like[index].style.visibility = "hidden";
    like[index].style.opacity = 0;

    siralNumber[index].style.visibility = "hidden";
    siralNumber[index].style.opacity = 0;

    btn_box[index].style.visibility = "hidden";
    btn_box[index].style.opacity = 0;

    circale[index].style.visibility = "hidden";
    circale[index].style.opacity = 0;

    card.style.boxShadow = "none";
  });
});

hideIMgs.forEach((hideIMg) => {
  hideIMg.addEventListener("mouseenter", () => {
    hideIMg.src = hideIMg.dataset.hover;
  });
  hideIMg.addEventListener("mouseleave", () => {
    hideIMg.src = hideIMg.dataset.orginal;
  });
});

// !=============

const building = {
  floor: 10,
  address: {
    street: "Main Rood",
    city: "Dhaka",
  },
  type: "Commercial",
};

for (const key in building) {
  const value = building[key];

  console.log(key, value);
}
for (const key2 in building.address) {
  const value2 = building.address[key2];
  console.log(key2, value2);
}

// বিজোড় নাম্বার এর গড়

function oddAvg(numbers) {
  const odds = [];
  for (const num of numbers) {
    if (num % 2 !== 0) {
      odds.push(num);
    }
  }

  if (odds.length === 0) {
    return 0;
  }
  let sum = 0;
  for (const oddsNum of odds) {
    sum += oddsNum;
  }
  const count = odds.length;
  const avg = sum / count;
  return avg;
}
const nums = [4, 2, 8];
const result = parseFloat(oddAvg(nums).toFixed(2));
console.log(result);

//  বিজোড় সংখ্যাকে দুই দিয়ে গুন

const arrayNums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 15];
function oddsNumMultipule(numbers) {
  const odds = [];
  for (const num of numbers) {
    if (num % 2 !== 0) {
      odds.push(num);
    }
  }
  const newArray = [];
  for (const num of odds) {
    const mulp = num * 2;
    newArray.push(mulp);
  }
  return newArray;
}
const output = oddsNumMultipule(arrayNums);
console.log(output);

// বিজোড় সংখ্যা খুজা

const numbersOfAarry = [2, 34, 8, 3, 10, 18, 6];
function oddNumsFuond(numbers) {
  for (const num of numbers) {
    if (num % 2 !== 0) {
      return "NO odd Numbers found";
    } else {
      return "Odd Numbers found";
    }
  }
}
const checkArray = [3, 5, 7];
console.log(oddNumsFuond(numbersOfAarry));
console.log(oddNumsFuond(checkArray));

// দশমিকের পর  দুই ঘর

const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9.15, 15];
function avgToDeciTwoPoinF(numbers) {
  const odds = [];
  for (const num of numbers) {
    if (num % 2 !== 0) {
      odds.push(num);
    }
  }
  let sum = 0;
  for (const num of odds) {
    sum += num;
  }
  const count = odds.length;
  const avg = sum / count;
  const result = parseFloat(avg.toFixed(2));
  return result;
}
console.log(avgToDeciTwoPoinF(nums1));

// বিজোড় সংখ্যা থেকে ১ বিয়োগ

const nums2 = [2, 3, 4, 5, 6, 7, 8, 9];
const oddNumToDecre = (numbers) => {
  const odds = [];
  for (let num of numbers) {
    if (num % 2 !== 0) {
      num--;
      odds.push(num);
    }
  }
  return odds;
};
console.log(oddNumToDecre(nums2));

let a = 5;
let b = 7;
console.log(a, b);
const temp = a;
a = b;
b = temp;
console.log(a, b);

const car = {
  name: "volvo",
  speed: 12000,
  price: 200000,
};
Object.freeze(car);
Object.seal(car);
car.price = 2500000;
delete car.speed;
console.log(car);

const sutent = {
  name: "loser",
  age: 19,
  hobby: "coding",
};
Object.seal(sutent);
sutent.favColor = "green";
sutent.hobby = "Will be Progmmer";
console.log(sutent);

const numbers2 = [1, 3, 4];

const firstArray = (numbers) => numbers2[1];
console.log(firstArray(numbers2));

const c = 100;
const d = 20;
const results = `The difference between ${c} and ${d} is ${c - d}`;
console.log(results);

const employee = {
  name: "loser",
  age: 15,
  salary: 1000,
};

const tempString = `MY name is ${employee.name} and my age is ${employee.age} finally My salary is ${employee.salary}`;
console.log(tempString);

const fruits = ["apple", "bananna", "pianapple", "lichi"];
const tirdFruit = `My favourite fruits name ${fruits[2]}`;
console.log(tirdFruit);

const x = 50;
const y = 10;

const divition = `The division of ${x} and ${y} is ${x / y}`;
console.log(divition);

const person = {
  firstName: "Amit",
  lastName: "Kumar",
};
const fullName = `Fullname is ${person.firstName} ${person.lastName}`;
console.log(fullName);

const animals = ["Cat", "Dog", "Elephant"];
const myFavAni = `My favorite animals are ${animals.join(",")}`;
console.log(myFavAni);

// const student = {
//   name: "loser",
//   age: 19,
//   result: [5, 5, 5, 5],
// };
// const statement = `His name is ${student.name} sum ${
//   (student.result[0] +
//     student.result[1] +
//     student.result[2] +
//     student.result[3]) /
//   4
// } `;
// console.log(statement);

const student = {
  name: "loser",
  age: 19,
  result: [70, 80, 90],
};
const total = student.result.reduce((sum, mark) => sum + mark, 0);
const avg = total / student.result.length;
const outp = `His name ${student.name} and avarege number ${avg}`;
console.log(outp);

function multiply(a, b) {
  return [a * 3, b * 3];
}

const [first, second] = multiply(2, 4);
console.log(first, second);
console.log(second);

const person2 = {
  name: "Rahim",
  city: "Dhaka",
};
const { name, city, phone = "N/A" } = person2;
console.log(name, city, phone);

const teacher = {
  name: "Maria",
  profession: "teacher",
};
const { name: nam, profession: job } = teacher;
console.log(nam, job);

const product = {
  name: "Laptop",
  price: 20000,
  brand: "Dell",
};

const { brand } = product;
console.log(brand);

const item = {
  name: "Mobile",
  price: 20000,
  phone: "Samsung",
};

const { phone: phoneN, price } = item;
console.log(phoneN, price);

const colors = ["red", "blue", "green", "yellow"];
const [firstClr, secondClr] = colors;
console.log(firstClr, secondClr);
const digit = [1, 3, 5];
const [, secondN] = digit;
console.log(secondN);
const digits = [2, 4, 6, 8];
const [two, , , eight] = digits;
console.log(two, eight);
function multiply(a, b) {
  return [a * 3, b * 3];
}
const [fast, sec] = multiply(2, 3);
console.log(fast, sec);

const product1 = {
  name1: "Laptop",
  price: 50000,
  brand: "Dell",
};

const { name1: hello, ...rest } = product1;
console.log(rest);
console.log(hello);

const project = {
  id: 101,
  title: "Web App",
  budget: 3000,
  client: "Tech Crop",
};

const { title, ...items } = project;
console.log(items);
console.log(title);

const programmer = {
  nam: "Sophia",
  language: "Javascript",
  experience: 5,
  specialty: "Fontend",
  tools: "React",
};

const { language, specialty, ...details } = programmer;
console.log(details);
console.log(language, specialty);

const rendomNum = [10, 20, 3, 30, 300, 3000];
const [fastNum, secnd, ...sliceArray] = rendomNum;
console.log(sliceArray);
console.log(fastNum, secnd);

const sayHello = (first, secnd, ...rest) => first + secnd;
const ans = sayHello(1, 39, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(ans);

const helloFuction = (fist, secnd, thrid, ...rest) => {
  let sum = 0;
  for (const num of rest) {
    sum += num;
  }

  const count = rest.length;
  const avg = sum / count;
  const result = parseFloat(avg.toFixed(2));
  return result;
};
console.log(helloFuction(1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 12, 34, 56));

const technologies = ["Condition", "array", "loop"];
const jsElement = ["Variable", ...technologies, "Dom"];
console.log(technologies);
console.log(jsElement);

const ফলগুলো = ["Apple", "Banana", "Mango"];
const myFruits = [...ফলগুলো, "Papaya", "Orange"];
console.log(myFruits);
console.log(ফলগুলো);

const fontEnd = ["JavaScript"];
const backEnd = ["Node.js"];
const database = ["MongoDB"];
const fullStackDev = [
  {
    hello: "loser",
  },
  ...fontEnd,
  ...backEnd,
  ...database,
];
console.log(fullStackDev);
console.log(typeof fullStackDev[1]);

const website = {
  name: "Mysite",
  type: "e-commerce",
  status: "active",
};

const newObej = {
  ...website,
  theme: "dark",
};
console.log(newObej);
const young = {
  namePerson: "Arif",
  age: 30,
  country: "B Baria",
};
const { country, ...ok } = young;
console.log(ok);
const newOb = { ...ok };
console.log(newOb);

const car1 = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
console.log(car1);
const newO = {
  ...car1,
};

newO.year = 2032;

const newAdd = { ...newO };
console.log(newAdd);
