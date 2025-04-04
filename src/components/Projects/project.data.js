import chatify from "../../Assets/Projects/chatify.png";
import vietgoalErp from "../../Assets/Projects/vietgoal-erp.webp";
import vietgoalClient from "../../Assets/Projects/vietgoal-client.webp";
import ivivuHotel from "../../Assets/Projects/ivivu-hotel.webp";
import ivivuBespoke from "../../Assets/Projects/ivivu-bespoke.webp";
import ivivuXperience from "../../Assets/Projects/ivivu-xperience.webp";
import testBank from "../../Assets/Projects/test-bank.webp";

const PROJECT_DATA = [
    {
        timeLine: "07/2023 - Now",
        name: "Vietgoal Erp",
        imgPath: vietgoalErp,
        tandTs: ["Angular", "C#", "MongoDB", "Ngzorro", "Tailwind", "D3.js"],
        description: "A comprehensive admin panel for managing children's football training programs. Features include order management, payment link generation, real-time statistics, and field scheduling. Streamlines operations for training centers by automating bookings, tracking revenue, and managing customer data efficiently. Built with a user-friendly interface for seamless backend control.",
        demoLink: "https://erp.vietgoal.com/"
    },
    {
        timeLine: "09/2023 - 06/2024",
        name: "Vietgoal Client",
        imgPath: vietgoalClient,
        tandTs: ["Angular", "C#", "MongoDB", "SSR", "Ngzorro", "Tailwind"],
        description: "This project provides an online platform for selling children's football training packages, allowing customers to request consultations or book sessions directly. The system simplifies enrollment for parents while optimizing management and customer support processes for training centers.",
        demoLink: "https://vietgoal.com/"
    },
    {
        timeLine: "08/2024 - 11/2024",
        name: "iVIVU Hotel",
        imgPath: ivivuHotel,
        tandTs: ["Angular", "C#", "SQL Server", "Monorepo", "SSR", "Prerender", "TaigaUI", "Tailwind"],
        description: "Successfully migrated a decade-old MVC-based hotel room booking system to Angular 18, leveraging modern features like reactive forms, lazy loading, and state management. Enhanced performance, UX, and maintainability while adding real-time availability checks and seamless payment integration. The upgrade delivers a faster, scalable, and more interactive platform for hotel reservations.",
        demoLink: "https://www.ivivu.com/"
    },
    {
        timeLine: "02/2024 - 07/2024",
        name: "iVIVU Bespoke",
        imgPath: ivivuBespoke,
        tandTs: ["Angular", "C#", "SQL Server", "SSR", "Ngzorro", "Tailwind", "i18n"],
        description: "A user-friendly platform enabling tour guides to quickly create and customize trip schedules using pre-designed templates. Simplifies sharing detailed itineraries with customers via links. Enhances communication by providing clear, visually appealing tour plans with key highlights, timelines, and activities. Ideal for travel professionals seeking efficiency and professionalism in tour planning and client engagement.",
        demoLink: "https://www.ivivu.com/bespoke/vi/vn/home"
    },
    {
        timeLine: "03/2023 - 12/2023",
        name: "iVIVU Xperience",
        imgPath: ivivuXperience,
        tandTs: ["Angular", "C#", "SQL Server", "Ngx Boostrap", "SSR"],
        description: "A seamless ticketing solution connecting partners with customers to book and pay for entertainment activities instantly. Features include real-time availability checks, secure payments, and e-ticket delivery. Optimized for speed and convenience, it enhances customer experience while boosting sales for partners. Ideal for theme parks, events, and leisure venues seeking a modern, efficient booking system.",
        demoLink: "https://www.ivivu.com/ve-vui-choi/"
    },
    {
        timeLine: "11/2023 - 01/2023",
        name: "Bot Discord Ticket",
        imgPath: chatify,
        tandTs: ["Nextjs", "MySQL", "Discord.js", "Semantic UI"],
        description: "A smart Discord bot solution designed to automate request handling and information processing. Features include automated data collection, request categorization, and response generation. Streamlines team communication by instantly processing inquiries and routing them appropriately. Ideal for communities or businesses needing efficient, automated interaction management within Discord channels.",
        demoLink: ""
    },
    {
        timeLine: "06/2022 - 01/2023",
        name: "Test Bank",
        imgPath: testBank,
        tandTs: ["Nextjs", "MySQL", "React Suite"],
        description: "An interactive exam system allowing teachers to create tests from templates and students to complete them with auto-grading based on pre-set answers. Supports multiple question types, performance analytics, and exports to Word/PDF formats. Streamlines the testing process from creation to evaluation while ensuring flexibility in test design and convenient result sharing for educators.",
        demoLink: "https://i-test.vn/"
    },
];

export default PROJECT_DATA;