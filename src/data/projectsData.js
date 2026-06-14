import projectDanau from "../assets/project-danau.webp"
import projectEcommerce from "../assets/project-eccomerce.webp"
import sertifikat1 from "../assets/sertifikat-1.webp"
import sertifikat2 from "../assets/sertifikat-2.webp"
import sertifikat3 from "../assets/sertifikat-3.webp"

export const projectsData = [
  {
    id: "project-1",
    title: "Danau Toba Tourism Landing Page",
    shortDesc: 'A beautiful, immersive landing page dedicated to showcasing the stunning landscapes and cultural heritage of Lake Toba.',
    fullDesc: 'This project is a visually responsive landing page designed to promote Lake Toba as a premier travel destination. Built with a focus on clean typography and high-quality imagery, the website features a hero section with a dark overlay to ensure text readability against scenic backgrounds. It includes smooth navigation to dedicated sections like About, Pictures, Blog, and Contact, alongside a prominent call-to-action button ("Cari Tau") to drive user engagement. Fully optimized for a seamless browsing experience across multiple device screen sizes.',
    tech: ["HTML", "CSS", "Javascript"],
    image: projectDanau,
    liveLink: "https://danau-toba.vercel.app",
    githubLink: "https://github.com/AFDAlKURNIAWAN/Danau-toba"
  },
  {
    id: "project-2",
    title: "Afdal Web Development Services Landing Page",
    shortDesc: "A modern, sleek, and high-converting landing page built with Tailwind CSS for freelance web development and digital agency services.",
    fullDesc: "A clean and professional freelance agency landing page designed to market affordable website creation services. Leveraging the power of Tailwind CSS and Preline UI components, this project features a minimalist aesthetic dominated by a vibrant, modern light-blue gradient background. Key features include an integrated GitHub redirection pill badge, bold persuasive copywriting ('Ayo Buat Website, Harga Terjangkau'), clear navigation mapping, and an eye-catching 'Get Started' call-to-action button to streamline user acquisition and client onboarding.",
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
    image: projectEcommerce,
    liveLink: "https://ecommerce-self-kappa.vercel.app/",
    githubLink: "https://github.com/AFDAlKURNIAWAN/Ecommerce"
  },
];

export const sertifData = [
  {
    id: "sertif-1",
    title: "Participant of LKS SMK North Sumatra Province 2024 - Web Technology",
    shortDesc: "Official certificate of participation in the prestigious regional student competence competition (LKS SMK) in Web Technology representing SMKN 1 Lumut.",
    image: sertifikat1,
  },
  {
    id: "sertif-2",
    title: "Belajar Dasar Cloud dan Gen AI di AWS – Dicoding Indonesia",
    shortDesc: "A certified foundational course completion covering core AWS Cloud Infrastructure and Generative AI concepts verified by Dicoding.",
    image: sertifikat2,
  },
  {
    id: "sertif-3",
    title: "Belajar Dasar AI – Dicoding Indonesia",
    shortDesc: "A certified foundational course completion focusing on Artificial Intelligence, Machine Learning concepts, and data-driven solutions.",
    image: sertifikat3,
  },
]