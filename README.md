# The Wild Oasis Hotel Management System

This simple project is my first attempt at creating a frontend website with a working backend using React and Supabase.

It is a React project bootstrapped using `npm create vite@latest`

## Disclaimer

This website has been built with the help of the Udemy course: ["The Ultimate React Course 2024: React, Redux & More"](https://www.udemy.com/course/the-ultimate-react-course/) by Jonas Schmedtmann. I extend my gratitude to the instructor for his guidance throughout the development process.

## About the Website

"The Wild Oasis" is a hotel management system designed for the staff of the hotel to streamline their operations. Here are some key features:

1. **Employee Access**: Only hotel employees can access the system to manage guest check-ins and check-outs.
2. **Cabin Management**: Employees can manage a fixed number of cabins with the ability to add more in the future.
3. **Dashboard**: A real-time dashboard displays today's check-ins and check-outs, along with sales and guest statistics through an Area Chart and a Pie Chart.
4. **Bookings and Cabins**: Dedicated pages for managing bookings and cabin details.
5. **User Authentication**: Secure login and sign-up pages for employee authentication.
6. **Dark Mode**: An interface that adapts to your system's settings for comfortable viewing.

## Previews:

![Login Page](</public/Screenshot from 2024-03-26 17-21-17.png>)
![Dashboard](</public/Screenshot from 2024-03-26 17-22-08.png>)
![Admin Page](</public/Screenshot from 2024-03-26 17-22-26.png>)

## Tech Stack

The following technologies were used in this project:

- HTML
- CSS
- JavaScript
- React
- Vite
- React Query
- React Context API
- React Server Components
- Styled Components
- [Recharts](https://recharts.org/)
- [Supabase](https://supabase.com/docs)

## Getting Started

To log into the website, use the following credentials:

- **Email**: admin@example.com
- **Password**: password
  
**Please note that the sign-up page is accessible only to users authorized by the Admin.**

### How to get access to the website

One way to get access to the website is to simply follow the steps below:
**Step 1:** Clone the repository to a local folder in your PC. 
**Step 2:** Once cloned, head to the local folder and open it in terminal. 
**Step 3:** Run the command ```npm install```. Being a Linux user, I sometimes faced problems when running the command on my PC. If you face the same problem on Linux, please use: ```sudo npm install --unsafe-perm=true --allow-root```. Wait for the important dependancies to be downloaded.
**Step 4:** After the dependancies are downloaded, in the same terminal run ```npm run dev```.

**This should give you access to the website on a Localhost, usually ```localhost:5173```.

## Another way to access the website

In case you do not want to work extra hard with the repository and just want a simple demo. Then please visit this link deployed on netlify to see a demo of the website: [soumyabrata-banik-the-wild-oasis](https://soumyabrata-banik-the-wild-oasis.netlify.app/). 

You can also visit the following vercel link to see the demo of the website: [soumyabrata-banik-the-wild-oasis](https://soumyabrata-banik-the-wild-oasis.vercel.app/). 

## Downside of this website

Unfortunately for some personal reason and also experimenting with Styled Components, I was not able to add responsivity to the site. **So, it is best to open this website on a Laptop or PC.**

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
