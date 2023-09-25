const users = [
    {
      id: 1,
      name: "John Doe",
      job: "Software Engineer",
      imageLink: "https://picsum.photos/200/200?random=1",
      jobDescription: "As a software engineer, I develop and maintain software applications, write clean and efficient code, and collaborate with cross-functional teams to deliver high-quality software solutions."
    },
    {
      id: 2,
      name: "Alice Smith",
      job: "Graphic Designer",
      imageLink: "https://picsum.photos/200/200?random=2",
      jobDescription: "I'm a graphic designer with a passion for creating visually appealing designs. I work on branding, illustrations, and user interface design to make products and brands stand out."
    },
    {
      id: 3,
      name: "Ethan Johnson",
      job: "Data Analyst",
      imageLink: "https://picsum.photos/200/200?random=3",
      jobDescription: "In my role as a data analyst, I analyze large datasets to derive meaningful insights. I use various data analysis tools and techniques to help businesses make data-driven decisions."
    },
    {
      id: 4,
      name: "Sarah Brown",
      job: "Marketing Manager",
      imageLink: "https://picsum.photos/200/200?random=4",
      jobDescription: "As a marketing manager, I develop and execute marketing strategies to promote products and services. I also lead a team of marketers to achieve our marketing goals."
    },
    {
      id: 5,
      name: "Michael Wilson",
      job: "Financial Analyst",
      imageLink: "https://picsum.photos/200/200?random=5",
      jobDescription: "I'm a financial analyst with expertise in financial modeling and forecasting. I provide financial insights and recommendations to support business decision-making."
    },
    {
      id: 6,
      name: "Emily Davis",
      job: "UX/UI Designer",
      imageLink: "https://picsum.photos/200/200?random=6",
      jobDescription: "I design user-friendly and visually appealing interfaces. My goal is to create seamless user experiences through thoughtful design and user research."
    },
    {
      id: 7,
      name: "Daniel Martinez",
      job: "Product Manager",
      imageLink: "https://picsum.photos/200/200?random=7",
      jobDescription: "As a product manager, I oversee the development and launch of new products. I collaborate with cross-functional teams to ensure successful product releases."
    },
    {
      id: 8,
      name: "Olivia Adams",
      job: "HR Manager",
      imageLink: "https://picsum.photos/200/200?random=8",
      jobDescription: "I manage human resources operations, including recruitment, onboarding, and employee relations. My role is to create a positive work environment."
    },
    {
      id: 9,
      name: "Liam Turner",
      job: "Sales Representative",
      imageLink: "https://picsum.photos/200/200?random=9",
      jobDescription: "I'm a sales representative focused on building client relationships and achieving sales targets. I work closely with clients to understand their needs."
    },
    {
      id: 10,
      name: "Ava White",
      job: "Content Writer",
      imageLink: "https://picsum.photos/200/200?random=10",
      jobDescription: "I'm a content writer who creates engaging and informative content for websites and marketing materials. I have a passion for storytelling and communication."
    }
];

// initialization
const image_user = document.getElementById('image-user');
const name_user = document.getElementById('name-user');
const job_user = document.getElementById('job-user');
const description_user = document.getElementById('description-user');
const increase_btn = document.getElementById('increase-btn');
const decrease_btn = document.getElementById('decrease-btn');
const random_btn = document.getElementById('random-btn');

let counter = 0;

image_user.setAttribute('src', users[0].imageLink)
name_user.textContent = users[0].name;
job_user.textContent = users[0].job;
description_user.textContent = `"${users[0].jobDescription}"`;

const increase_counter = () => {
    if(counter == users.length - 1) {
        counter = 0;
        return users[counter];
    }

    counter++;

    return users[counter];
}

const decrease_counter = () => {
    if(counter == 0) {
        counter = users.length - 1;
        return users[counter];
    }

    counter--;

    return users[counter];
}

const random_counter = () => {
    let random_counter = Math.floor(Math.random() * users.length);

    counter = random_counter;
    
    return users[random_counter];
}

increase_btn.addEventListener('click', () => {
    let user = increase_counter();

    
    image_user.setAttribute('src', user.imageLink)
    name_user.textContent = user.name;
    job_user.textContent = user.job;
    description_user.textContent = `"${user.jobDescription}"`;
});

decrease_btn.addEventListener('click', () => {
    let user = decrease_counter();

    image_user.setAttribute('src', user.imageLink)
    name_user.textContent = user.name;
    job_user.textContent = user.job;
    description_user.textContent = `"${user.jobDescription}"`;
});

random_btn.addEventListener('click', () => {
    let user = random_counter();

    image_user.setAttribute('src', user.imageLink)
    name_user.textContent = user.name;
    job_user.textContent = user.job;
    description_user.textContent = `"${user.jobDescription}"`;
})
