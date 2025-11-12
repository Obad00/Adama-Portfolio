'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mail, Github, Linkedin, ExternalLink, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Navigation links for smooth scrolling
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  // Experience data from CV
  const experiences = [
    {
      title: 'Collaborateur (Backend Developer)',
      company: 'DOCSEN',
      period: 'February 2025 - Present',
      description: 'Developing backend for Docsen Online project and building the website for online presence',
      highlights: ['Backend Development', 'Web Development', 'Project Implementation'],
    },
    {
      title: 'Assistant Community Manager',
      company: 'ADEPME',
      period: 'January 2025 - February 2025',
      description: 'Managing social media content and creating video content for marketing campaigns',
      highlights: ['Social Media Management', 'Video Production', 'Content Creation'],
    },
    {
      title: 'Chargé de sourcing et d&apos;entretiens de sélection',
      company: 'Simplon Sénégal',
      period: 'September 2025 - October 2025',
      description: 'Conducted 600+ interviews for Web Developer/AI cohort recruitment and evaluation',
      highlights: ['Recruitment', 'Technical Interviews', 'Team Collaboration'],
    },
    {
      title: 'Chef de projet',
      company: 'Comat Technologie',
      period: '2023 - Present',
      description: 'Planning and organizing web development projects, defining objectives and budgets',
      highlights: ['Project Management', 'Web Development', 'Team Leadership'],
    },
    {
      title: 'Participant',
      company: 'Groupe Ecobank Sénégal',
      period: '2022 - June 2022',
      description: 'Active participation in sessions and workshops, providing logistical support',
      highlights: ['Event Support', 'Logistics', 'Team Collaboration'],
    },
  ]

  // Skills organized by category
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'DOM', 'Angular', 'Vue.js', 'React'],
    },
    {
      category: 'Backend',
      skills: ['PHP', 'Laravel', 'Node.js', 'Python', 'Java', 'Spring Boot'],
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['WordPress', 'Docker', 'Figma', 'Git', 'C', 'C++'],
    },
  ]

  // Projects from experience
  const projects = [
    {
      title: 'Docsen Online Platform',
      description: 'Backend development and website creation for Docsen Online project to establish online presence',
      technologies: ['Backend', 'Web Development', 'Full Stack'],
      link: '#',
    },
    {
      title: 'Web Development Projects',
      description: 'Multiple web applications built using HTML, CSS, JavaScript, PHP, and Laravel',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel'],
      link: '#',
    },
    {
      title: 'Community Management Campaigns',
      description: 'Social media content management and video production for ADEPME marketing campaigns',
      technologies: ['Social Media', 'Video Production', 'Content Creation'],
      link: '#',
    },
  ]

  // Certifications and education
  const education = [
    {
      title: 'Certificat Professionnel de Spécialisation en Développement Web Et Web Mobile',
      institution: 'Simplon Sénégal',
      period: 'November 2023 - November 2024',
    },
    {
      title: 'Certification en développement web',
      institution: 'Gomycode',
      period: '2023',
    },
    {
      title: 'Diplôme d&apos;Études en Langue Française DELF B2',
      institution: 'Institut Français du Sénégal',
      period: '2023',
    },
    {
      title: 'Licence II Bachelor en Informatique de Gestion',
      institution: 'Institut Africain de Management',
      period: '2021 - 2023',
    },
    {
      title: 'Baccalauréat en science expérimentale',
      institution: 'Lycée Galandou Diouf',
      period: '2021',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Adama Dabo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-semibold text-lg hidden sm:inline">Adama Dabo</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Full Stack Web Developer
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Passionate about web development and constantly eager to enhance my skills. I combine solid understanding of IT concepts with significant practical experience in digital development.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href="#contact">Get in Touch</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#projects">View My Work</a>
                </Button>
              </div>
              <div className="flex gap-4 mt-8">
                <a
                  href="mailto:dabo.aadama@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  title="Email"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/adama-dabo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  title="GitHub"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="text-4xl font-bold">5+</div>
                  <div className="text-lg">Years of Experience</div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm opacity-90">
                      Building modern web applications with cutting-edge technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I&apos;m a passionate full-stack web developer based in Ouakam, Dakar, Senegal. With a strong foundation in computer science and significant practical experience in digital development, I&apos;m committed to creating high-quality web applications.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                My expertise spans across the entire development stack, from frontend technologies like HTML, CSS, and JavaScript to backend frameworks like Laravel and Node.js. I&apos;m particularly interested in building scalable, user-friendly applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Beyond coding, I&apos;m involved in community leadership as President of Voile Humanitaire, where I provide strategic direction and inspire team members to make a positive impact.
              </p>
            </div>
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-blue-600">
                <h3 className="font-semibold text-lg mb-2">Key Strengths</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Strong organization and time management skills</li>
                  <li>✓ Exceptional communication and interpersonal abilities</li>
                  <li>✓ Ability to work independently and in teams</li>
                  <li>✓ Attention to detail and multitasking capability</li>
                </ul>
              </Card>
              <Card className="p-6 border-l-4 border-l-purple-600">
                <h3 className="font-semibold text-lg mb-2">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Reading</Badge>
                  <Badge>Cinema</Badge>
                  <Badge>Football</Badge>
                  <Badge>Technology</Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, i) => (
                    <Badge key={i} variant="secondary">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-gray-900">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Education & Certifications</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-blue-600">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{edu.title}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{edu.period}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href={project.link} className="flex items-center justify-center gap-2">
                    View Project <ExternalLink size={16} />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="mailto:dabo.aadama@gmail.com">Send me an Email</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:+221771425249">Call Me</a>
            </Button>
          </div>
          <div className="flex gap-6 justify-center mt-8">
            <a
              href="mailto:dabo.aadama@gmail.com"
              className="opacity-80 hover:opacity-100 transition-opacity"
              title="Email"
            >
              <Mail size={28} />
            </a>
            <a
              href="https://linkedin.com/in/adama-dabo"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
              title="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
              title="GitHub"
            >
              <Github size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Adama Dabo. All rights reserved.</p>
          <p className="text-sm mt-2">
            Based in Ouakam, Dakar, Senegal | +221 77 142 52 49
          </p>
        </div>
      </footer>
    </div>
  )
}
