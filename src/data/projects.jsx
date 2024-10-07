import { FaAws, FaC, FaDocker, FaNodeJs, FaPython, FaReact } from 'react-icons/fa6'
import { SiAwselasticloadbalancing, SiCss3, SiD3Dotjs, SiDjango, SiFlask, SiGooglecloud, SiHtml5, SiJquery, SiKubernetes, SiMongodb, SiMysql, SiPuppet, SiTensorflow, SiTypescript } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io5'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiDigitalOcean, DiRedis } from 'react-icons/di'
import { FcLinux } from 'react-icons/fc'
import.meta.env

const python = < FaPython size={40} />
const javaScript = <IoLogoJavascript size={40} />
const flask = <SiFlask />
const react = <FaReact />
const linux = <FcLinux />
const typeScript = <SiTypescript size={40} />
const C = <FaC size={40} />
const django = <SiDjango />
const tensorFlow = <SiTensorflow />
const nodeJs = <FaNodeJs />
const jQuery = <SiJquery />
const d3Js = <SiD3Dotjs />
const mySql = <SiMysql />
const mongoDb = <SiMongodb />
const postgreSql = <BiLogoPostgresql />
const redis = <DiRedis />
const aws = <FaAws />
const gcp = <SiGooglecloud />
const docker = <FaDocker />
const kubernetes = <SiKubernetes />
const puppet = <SiPuppet />
const digitalOcean = <DiDigitalOcean />
const html = <SiHtml5 />
const css = <SiCss3 />
const loadbalancer = <SiAwselasticloadbalancing />

export const PROJECTS = [
    {
        id: 1,
        title: "Coders' Lodge",
        datetime: "5-Sep-2024",
        link: "https://coders-lodge.onrender.com/",
        thumbnail: "Images/coderslodge.PNG",
        headline: "A repository that holds list of my coding pals. It uses react in the frontend and flask framework in the backend to handle all CRUD operations.",
        loom: "https://www.loom.com/share/fa09f21c504e4f129abff357c7ec45d1?sid=7e58272c-b7f3-4dcb-acec-ad65542f48a1",
        github: "https://github.com/Usool-Data-Science/Coders_Lodge",
        stack: [python, react, linux, flask, javaScript],
        features: ["✨API Integration ✨Responsive Frontend ✨Database Persistence"]
    },
    {
        id: 2,
        title: "EFCC Information Management System",
        datetime: "16-March-2024",
        link: "",
        thumbnail: "Images/efcc.png",
        headline: "An information management system for Economic and Financial Crime Commission, a Nigerian Federal Government parastatal that keep financial and cyber crime records for prosecution.",
        loom: "https://www.loom.com/share/96e804c8816f4d309c023f0b98f288ec?sid=e140bfac-936b-4c16-910d-e291decdb9eb",
        github: "",
        stack: [docker, python, react, linux, flask, javaScript, puppet, digitalOcean],
        features: ["✨API Integration ✨Responsive Frontend ✨Database Persistence/Migration ✨User Authentication ✨User Authorization ✨Admin Dashboard ✨Custom CLI"]
    },
    {
        id: 3,
        title: "AirBnB Minified",
        datetime: "03-Mar-2024",
        link: "https://dev.to/usooldatascience/mastering-closures-and-decorators-in-python-from-basics-to-advanced-16o",
        thumbnail: "Images/airbnb.png",
        headline: "A scalable AirBnB application built for client to lease a comfortable home for a fixed period of time.",
        loom: "",
        github: "",
        stack: [html, css, javaScript, python, linux, flask, puppet, loadbalancer, digitalOcean],
        features: ["✨Auto-scaling ✨API Integration ✨Responsive Frontend ✨Database Persistence/Migration ✨User Authentication ✨User Authorization ✨Admin Dashboard ✨Custom CLI"]
    },
]