import {
    PhHouse,
    PhUser,
    PhStack,
    PhCertificate,
    PhEnvelope,
} from '@phosphor-icons/vue'

export const owner = {
    name: 'Danica Louisse Talusik',
    tagline: "I'm an aspiring data analyst who's always open to learning new things and improving my work along the way.",
    github: 'https://github.com/nikanjks',
    linkedin: 'https://www.linkedin.com/in/danica-louisse-talusik-9481592ab/',
}

export const navLinks = [
    { label: 'Home', to: '/', icon: PhHouse },
    { label: 'About', to: '/about', icon: PhUser },
    { label: 'Stack', to: '/stack', icon: PhStack },
    { label: 'Certifications', to: '/certifications', icon: PhCertificate },
    { label: 'Contact', to: '/contact', icon: PhEnvelope },
]

// Tech Stack
export type StackCategory = 'frontend' | 'language' | 'database' | 'devtool'

export interface StackItem {
    name: string
    logo: string
    category: StackCategory
}

// A written full class names so tailwind can find them
export const categories: Record<StackCategory, { label: string; dot: string }> = {
    frontend: { label: 'Frontend', dot: 'bg-frontend' },
    language: { label: 'Language', dot: 'bg-language' },
    database: { label: 'Database', dot: 'bg-database' },
    devtool: { label: 'Dev Tools', dot: 'bg-devtool' },
}

export const stack: StackItem[] = [
    { name: 'HTML', logo: '/logos/languages/html-5-svgrepo-com.svg', category: 'frontend'},
    { name: 'CSS', logo: '/logos/languages/css-3-svgrepo-com.svg', category: 'frontend'},
    { name: 'JavaScript', logo: '/logos/languages/icons8-javascript.svg', category: 'frontend'},
    { name: 'Java', logo: '/logos/languages/icons8-java.svg', category: 'language'},
    { name: 'Python', logo: '/logos/languages/icons8-python.svg', category: 'language'},
    { name: 'MySQL', logo: '/logos/languages/mysql-svgrepo-com.svg', category: 'database'},
    { name: 'MongoDB', logo: '/logos/languages/mongodb-svgrepo-com.svg', category: 'database'},
    { name: 'VS Code', logo: '/logos/tools/icons8-visual-studio-code-2019.svg', category: 'devtool' },
    { name: 'Git', logo: '/logos/tools/git-svgrepo-com.svg', category: 'devtool' },
    { name: 'GitHub', logo: '/logos/tools/github-142-svgrepo-com.svg', category: 'devtool' },
    { name: 'Maven', logo: '/logos/tools/maven-svgrepo-com.svg', category: 'devtool' },
    { name: 'Kotlin', logo: '/logos/tools/kotlin-svgrepo-com.svg', category: 'devtool' },
]

// Certifications
export interface Certification {
    title: string
    issuer: string
    image: string
    verifyUrl?: string
}

export const certification: Certification = {
  title: 'Microsoft Office Specialist',
  issuer: 'Microsoft',
  image: '/certifications/Microsoft-Office-Specialist-Certificate-Danica-Louisse-Talusik.png',
  verifyUrl: 'https://www.certiport.com/portal/pages/credentialverification.aspx',
}

export const completions: Certification[] = [
  {
    title: 'C Essentials 1',
    issuer: 'Cisco NetAcad',
    image: '/certifications/C-Essentials-1-Certificate-Danica-Louisse-Talusik.png',
  },
  {
    title: 'Networking Basics',
    issuer: 'Cisco NetAcad',
    image: '/certifications/Networking-Basics-Certificate-Danica-Louisse-Talusik.png',
  },
  {
    title: 'Software Engineering',
    issuer: 'SaylorAcad',
    image: '/certifications/Software-Engineering-Certificate-Danica-Louisse-Talusik.png',
    verifyUrl: 'https://learn.saylor.org/admin/tool/certificate/index.php',
  },
  {
    title: 'Introduction to Modern Database Systems',
    issuer: 'SaylorAcad',
    image: '/certifications/Introduction-to-Modern-Database-Systems-Certificate-Danica-Louisse-Talusik.png',
    verifyUrl: 'https://learn.saylor.org/admin/tool/certificate/index.php',
  },
]