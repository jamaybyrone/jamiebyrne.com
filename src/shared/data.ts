import { GIT_HUB_URL, HTTPS_WWW_MAIN_DOMAIN } from '@/shared/consts/url'

export const CVData = {
  name: 'Jamie Byrne',
  email: 'jamie@jamiebyrne.com',
  address: 'England, United Kingdom',
  githubUrl: GIT_HUB_URL,
  websiteUrl: HTTPS_WWW_MAIN_DOMAIN,
  thumbnailUrl: 'https://avatars.githubusercontent.com/u/117583938?v=4',
  HDRULGithub: 'https://github.com/JamieByrneHDRUK',
  workExperience: [
    {
      company: 'Health Data Research UK (HDR UK) · FTC',
      role: 'Senior Research Engineer (Full Stack Dev)',
      startDate: 'September - 2024',
      endDate: 'Present',
      description:
        'Currently employed on a Fixed Term Contract (FTC) by HDR UK, focusing on open-source software development. My primary work is on the relaunch Gateway 2 Search application, which utilises Elasticsearch and is built with NextJS on the front end and a PHP Laravel back end running in Kubernetes.' +
        '\n' +
        'As part of my role, I have implemented various SEO enhancements and performance optimisations to improve the application’s discoverability and efficiency. Additionally, I am leading a project focused on dementia research data trials, ensuring the delivery of a robust and effective solution to support critical research initiatives.' +
        '\n' +
        'I have also contributed to other functional applications within the organisation, including those written in Go, while ensuring seamless integration and high performance across the platform.' +
        '\n' +
        'HDRUK Github account: https://github.com/JamieByrneHDRUK'
    },
    {
      company: 'Pets At Home',
      role: 'Senior Frontend Developer',
      startDate: 'Jan - 2024',
      endDate: 'July - 2024',
      description:
        'I joined Pets at Home as a Senior Front-End Developer, where I primarily handled larger development tasks across five NextJS applications. My responsibilities included creating unit tests and end-to-end tests using Playwright to ensure robust and reliable code.' +
        '\n' +
        'I also worked extensively with NextJS and NextAuth, sharing knowledge and expertise to support colleagues. Additionally, I contributed to the successful implementation of WorldPay 3DS2, enhancing the company’s payment processing capabilities.'
    },
    {
      company: 'CDL Software (10 years total, breakdown below)',
      role: 'Lead Software Engineer',
      startDate: 'Feb - 2022',
      endDate: 'Jan - 2024',
      description:
        'Promoted to Lead Software Engineer, I took on significant leadership and technical responsibilities, contributing to innovative projects and driving key initiatives across the organisation.' +
        '\n' +
        'I played a key role in migrating users into AWS Cognito by developing Lambda functions and custom triggers for the project using Terraform. By the time the project was completed, the solution was multi-tenant, fully tested with SonarQube integration, and optimised through performance testing, achieving a 30% increase in efficiency and reduced operational costs.' +
        '\n' +
        'I designed and built a SaaS application using NextJS with a multi-zone architecture powered by OpenNext. This structure divided the project into ten independent teams, reducing merge conflicts and enabling smooth collaboration. The application was entirely driven by JSON configurations stored in AWS AppConfig, enabling client implementations to be deployed with a single click.' +
        '\n' +
        'I led the creation of an in-house component library using React and Material-UI, shared across all NextJS multi-zones, ensuring consistency and efficiency. I also managed numerous API Gateways integrated with AWS services such as Step Functions, SQS, and EventBridge, supporting workflow orchestration and data processing. My work included developing custom Cognito trigger Lambdas for authentication and SMS integrations.' +
        '\n' +
        'Beyond technical contributions, I mentored junior developers, conducted interviews, and led workshops and training sessions. I regularly presented progress to clients and stakeholders to ensure alignment with project goals. I also collaborated with other departments to better understand the company’s broader impact and worked with third-party clients to ensure seamless integration with internal systems.' +
        '\n' +
        'Focusing on coding best practices and team development, I have bridged gaps between technical and business teams to deliver impactful solutions that align with company objectives and the insurance industry’s needs.'
    },
    {
      company: 'CDL Software',
      role: 'Senior Web Developer',
      startDate: 'Nov - 2017',
      endDate: 'Feb - 2022',
      description:
        'I was promoted to Senior Web Developer at CDL, where I took on greater responsibilities, including leading numerous projects and contributing to the company’s technical evolution. Over the years, I worked on a variety of innovative initiatives, including iOS and React Native development, delivering seamless cross-platform applications.' +
        '\n' +
        'As part of the company\'s transition to GitLab, I played a key role in the full migration and implemented GitLab pipelines for efficient CI/CD processes. We also began migrating into AWS, where I was heavily involved in utilising AWS Cognito for secure user authentication and authorisation, setting up multiple API Gateways with Lambda functions, and writing unit tests using Jest to ensure the reliability and maintainability of these services. Additionally, I contributed to modernising infrastructure by deploying resources as code using Terraform, enabling scalable and efficient cloud solutions.' +
        '\n' +
        'I expanded my technical expertise by working on several Spring Boot applications, delivering robust and scalable back-end solutions in Java. This allowed me to work across both front-end and back-end technologies, enhancing my versatility as a developer.' +
        '\n' +
        'Beyond technical contributions, I took on a mentoring role within the team. I provided training and guidance to junior developers, ensuring they gained a strong understanding of the company’s tools, processes, and best practices. I also played an active role in the hiring process, conducting interviews to identify and recruit talented developers who aligned with the team\'s goals and culture.' +
        '\n' +
        'This role provided me with the opportunity to lead major projects, mentor team members, and contribute to the design and implementation of cutting-edge solutions in a fast-paced and dynamic environment.'
    },

    {
      company: 'CDL Software',
      role: 'Intermediate Web Developer',
      startDate: 'Oct - 2015',
      endDate: 'Nov - 2017',
      description:
        'I was promoted to a Intermediate Web Developer at CDL, where I took on more significant responsibilities and contributed to the evolution of the company’s technology stack.' +
        '\n' +
        'One of my key achievements was pioneering a campaign to modernise the technology stack and initiating the transition from the legacy system to a new platform. The new system was built using Node.js with Express and React, incorporating internationalization features and robust testing using Chai and Mocha.' +
        '\n' +
        'I was involved in larger-scale projects, including developing comprehensive insurance portals and implementing payment gateways, ensuring secure and seamless transactions for users.' +
        '\n' +
        'During this period, the core web-based technology also progressed significantly. We transitioned from Gerrit to Git for version control, followed by a migration to GitLab. We also adopted GitLab pipelines for CI/CD, automating build, test, and deployment processes to improve efficiency and reliability. Additionally, our build tools evolved to include Grunt, followed by Gulp, as part of the Maven build pipeline. These tools were used to compile and babelify JavaScript and LESS within the JSP web-based applications, streamlining the development workflow and enhancing application performance.' +
        '\n' +
        'In addition to my development responsibilities, I began training new junior developers, introducing them to the company’s core products and legacy systems. This included providing guidance on best practices, fostering a collaborative learning environment, and ensuring a smooth onboarding process.' +
        '\n' +
        'This role allowed me to deepen my expertise in modern web development, large-scale project management, CI/CD practices, mentoring, and implementing cutting-edge technologies within a dynamic team environment.'
    },
    {
      company: 'CDL Software',
      role: 'Junior Web Developer',
      startDate: 'Sep - 2014',
      endDate: 'Oct - 2015',
      description:
        'I worked as a Junior Web Developer for CDL Software, contributing to their core web application for insurance, specifically focusing on the new business journeys.' +
        '\n' +
        'I utilised a range of technologies, including JSP, Java, ANT, Maven, Velocity, Bootstrap, JavaScript, jQuery, HTML, and LESS, to develop responsive and user-friendly interfaces. For version control, I worked with Gerrit as the SVN, while Jenkins was used for managing CI/CD pipelines, and Nexus Repository was employed for artifact management. Additionally, I implemented Selenium for automated testing, ensuring the quality and reliability of the application throughout the development lifecycle.' +
        '\n' +
        'This role allowed me to gain hands-on experience in full-stack development, automation, deployment workflows, and artifact management in a dynamic and collaborative environment.'
    }
  ],
  skills: [
    'TS, JS, Node, PHP (Laravel), Go, Java',
    'JSP, JSTL, Jquery, HTML',
    'React,, MUI, Tailwind, SCSS, LESS, CSS',
    'Express, NextJS',
    'Gulp, Grunt, Webpack, Babel',
    'Maven, SpringBoot',
    'Jest, Cypress, Sonar, React Testing Library, Playwright',
    'Gitlab, Github, CI/CD, Jenkins, Terraform',
    'Lambda, API Gateway, DynamoDB,  Cloudfront',
    'Edge, AppConfig, S3,  Cognito',
    'Step Functions, SNS, SQS, Event Bridge',
    'Docker, Kubernetes',
    'MySql, PostgreSQL, MonogoDB, DynamoDB',
    'AWS, GCP, Azure, Vercel, Railway'
  ],
  softSkills: [
    'Training, Mentoring, Interviews, Leadership',
    'Software Architecture, Optimization, Code Reviews, Pipelines',
    'Agile, Scrum, Kanban',
    'Figma, Jira, Trello, ServiceNow, SonarQube, Dynatrace'
  ]
}

export const fullWorkExp = [
  {
    company: 'Convergys Intelligent Contact',
    role: 'Script Developer',
    startDate: 'Sep - 2013',
    endDate: 'Sep - 2014',
    description:
      'In September 2013, I was relocated to the UK Head Office to join the Script Team as a Script Developer.' +
      '\n' +
      'My primary responsibilities included:' +
      '\n' +
      'Developing web scripts for various insurer dialer systems, including Amcat, IC Dial, and Vicidial Using technologies such as HTML, CSS, JavaScript, and PHP to create and optimize scripts.' +
      '\n' +
      'Managing content for some of the company’s external websites to ensure consistency and accuracy Developing third-party applications to provide tailored solutions when specific requirements could not be addressed directly through the dialler systems.' +
      '\n' +
      'This role further expanded my technical expertise, particularly in web scripting and application development, and allowed me to contribute to both internal and external-facing projects within the organization.'
  },
  {
    company: 'Convergys Intelligent Contact',
    role: 'Sharepoint Developer',
    startDate: 'June - 2012',
    endDate: 'Sep - 2013',
    description:
      'In September 2012, due to my technical background, I was requested by the General Manager to transition from my role on the phones to focus on developing the company’s internal site using Microsoft SharePoint.' +
      '\n' +
      'My responsibilities included:' +
      '\n' +
      'Content management and organization within the SharePoint platform. Developing the SharePoint front end using technologies such as jQuery, Java, HTML, CSS, and XML. Installing and configuring web parts to enhance functionality and user experience. Overseeing the overall content management for the intranet.' +
      '\n' +
      'After successfully completing the intranet for our site, I was entrusted with the responsibility of developing two additional intranets for other sites and managing the overall project. This opportunity allowed me to refine my project management, development, and collaboration skills while delivering impactful solutions for the organization.'
  },
  {
    company: 'Convergys Intelligent Contact',
    role: 'Sales Assistant',
    startDate: 'Jan - 2012',
    endDate: 'June - 2012',
    description:
      'Due to redundancy from Tailored Software, I took the first job I could get which was at a company called LBM Marketing which eventually became Convergys Intelligent Contact (also called Stream at one point).' +
      '\n' +
      'I was employed by LBM Direct Marketing (now Convergys) as a Sales Assistant on the More Than Home Insurance campaign.' +
      '\n' +
      'My primary responsibility was selling home insurance over the phone, which involved:' +
      '\n' +
      'Engaging with customers to understand their needs and recommending suitable insurance products. Effectively communicating the features and benefits of the policies to drive sales. Handling objections and providing tailored solutions to ensure customer satisfaction.' +
      '\n' +
      'This role enhanced my communication and persuasion skills, taught me the importance of active listening, and helped me thrive in a target-driven environment.'
  },
  {
    company: 'Tailored Software Ltd',
    role: 'Junior Software Tester/Developer',
    startDate: 'Jan - 2009',
    endDate: 'July - 2011',
    description:
      'I was employed by as a Junior Software Tester/Developer, where I gained invaluable hands-on experience in software development and testing.' +
      '\n' +
      'My responsibilities included:' +
      '\n' +
      'Testing PDA software and applications developed for Windows machines.' +
      '\n' +
      'Working extensively with the 4D programming language, a cross-platform language compatible with both Mac and Windows environments.' +
      '\n' +
      'Learning and applying both front-end and back-end development skills.' +
      '\n' +
      'This role provided me with a comprehensive understanding of the entire software development process, from initial planning and design to implementation, testing, and deployment. I also developed a strong foundation in object-oriented programming, database structures, and the principles of software engineering.' +
      '\n' +
      'Additionally, I independently developed an AR (Augmented Reality) application using ActionScript 3 (AS3), where I designed and produced the 3D models, demonstrating my ability to merge technical and creative skills effectively.'
  },
  {
    company: 'The Site Supply Company',
    role: 'Graphic Designer',
    startDate: 'Apr - 2008',
    endDate: 'Nov - 2008',
    description:
      'I was employed at The Site Supply Company as a Graphic Designer, where I played a key role in supporting the company’s creative, production, and occasional technical needs.' +
      '\n' +
      'My responsibilities included:' +
      '\n' +
      'Designing and preparing proofs for customer approval.\n' +
      'Creating or recreating artwork tailored to client specifications for use by the in-house printing department. Developing company promotional materials, including CD covers, posters, and other marketing assets Assisting with small IT tasks, such as troubleshooting minor technical issues and providing basic support to colleagues.' +
      '\n' +
      'This role required a strong eye for detail, effective communication with clients, and the ability to manage multiple design projects while providing occasional technical support in a fast-paced environment.'
  },
  {
    company: 'MSL Legal Expenses Ltd',
    role: 'Office Junior',
    startDate: 'Nov - 2006',
    endDate: 'March - 2008',
    description:
      'I began my career at MSL Legal Expenses as the Office Junior in the In-House Department.\n' +
      'During this time, I identified opportunities to improve efficiency and took the initiative to create macros and develop automated software that streamlined the scanning and filing processes. This innovation significantly reduced manual workloads and improved overall accuracy.' +
      '\n' +
      'My responsibilities included:' +
      '\n' +
      'Filing, scanning, copying, and faxing documents.\n' +
      'Conducting file traces and file preparation.\n' +
      'Communicating with brokers and third-party insurers to locate and trace references.\n' +
      'I was later promoted to the role of Claims Technician, where I took on more advanced responsibilities, including:' +
      '\n' +
      'Recovering back-hire funds from insurance companies. Requesting and gathering information from clients, third-party insurers, and witnesses. Drafting and sending professional correspondence via letters, faxes, and emails. Managing a high volume of phone communications to support case resolutions. This progression reflects my ability to adapt, innovate, and take ownership of tasks in a dynamic and fast-paced environment.'
  }
]
