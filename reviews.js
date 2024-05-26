const reviews = [
    {
        id: 1,
        name: "M.S.Dhoni",
        job: "Cricketer",
        img: "p3.jpeg",
        text: `MS Dhoni, often called 'Captain Cool,' is the epitome of composure and strategic brilliance in cricket. From his humble beginnings in Ranchi to becoming one of the most successful captains in the world, Dhoni's journey is nothing short of inspirational.`
    },
    {
        id: 2,
        name: "Prachi Desai",
        job: "Actress",
        img: "p4.jpg",
        text: `Her debut role as Bani Walia in the popular television series 'Kasamh Se.' Prachi's transition from television to Bollywood was marked by her impressive performance in the 2008 film 'Rock On!!,'. She has since appeared in various successful films such as 'Once Upon a Time in Mumbaai,' 'Bol Bachchan,' and 'Azhar.'`
    },
    {
        id: 3,
        name: "Cristiano Ronaldo",
        job: "Footballer",
        img: "p1.jpeg",
        text: `Widely regarded as one of the greatest players of all time, Ronaldo has won five Ballon d'Or awards, a record three UEFA Men's Player of the Year Awards, and four European Golden Shoes, the most by a European player.`
    },
    {
        id: 4,
        name: "Alison Ben",
        job: "Software Developer",
        img: "p2.jpg",
        text: `Alison Ben is a professional specializing in creating, testing, and maintaining software applications. He uses various programming languages and tools to design software that meets users' needs.`
    }
];

const img = document.querySelector(".info img");
const person = document.querySelector(".person");
const job = document.querySelector(".job");
const info = document.querySelector(".text");

const back = document.querySelector(".back");
const pre = document.querySelector(".pre");
const lastBtn = document.querySelector(".last-btn");

let currentitem = 0;

window.addEventListener('DOMContentLoaded', () => {
    showPerson();
});

function showPerson() {
    const item = reviews[currentitem];
    img.src = item.img;
    person.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

pre.addEventListener("click", () => {
    currentitem++;
    if (currentitem > reviews.length - 1) {
        currentitem = 0;
    }
    showPerson();
});

back.addEventListener("click", () => {
    currentitem--;
    if (currentitem < 0) {
        currentitem = reviews.length - 1;
    }
    showPerson();
});

lastBtn.addEventListener("click", () => {
    currentitem = Math.floor(Math.random() * reviews.length);
    showPerson();
    console.log(currentitem);
});
