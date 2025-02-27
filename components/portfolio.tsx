"use client"

import { useState } from "react"
import { Github, Twitter, Mail, Code, User, Home, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"

const projects = [
  {
    name: "///WIP/// Predictions Website",
    description:
      'A page where you can list your predictions of the future so that later you can act all smart saying stuff like "HA! I told you this is gonna happen!"',
    link: "https://kiyo.cam/Predictions_Website/",
  },
  {
    name: "Zipp zapp!",
    description:
      "Zipp zipp zappp blepp blepp bleppp blap blap bleee blap blip blooop zip zap zooooo! blopaaa blapppa be ble? BLAP ZIPP!!!",
    link: "https://media.tenor.com/2kboM-Mfp5wAAAAM/glorp-booty-shake.gif",
  },
]

const socials = [
  { icon: <Github className="w-6 h-6" />, link: "https://github.com/imKiyo" },
  { icon: <Twitter className="w-6 h-6" />, link: "https://x.com/bigbrainKiyo" },
  { icon: <Mail className="w-6 h-6" />, link: "mailto:imkiyo@duck.com" },
]

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderContent = () => {
    if (currentPage === "about") {
      return (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">I'm a gooby goober.</p>
        </div>
      )
    }

    if (currentPage === "projects") {
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid gap-4">
            {projects.map((project, index) => (
              <div key={index} className="p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <a href={project.link} className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-muted-foreground mt-2">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }

    // Default: home page
    return (
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Kiyo</h1>
        <p className="text-xl text-muted-foreground">I build silly things~~</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className={`transition-all duration-500 ease-in-out ${currentPage === "home" ? "mt-32" : "mt-4"}`}>
          {/* Navigation */}
          <nav className="flex justify-center space-x-6 mb-12">
            <Button
              variant="ghost"
              onClick={() => setCurrentPage("home")}
              className={currentPage === "home" ? "text-primary" : "text-muted-foreground hover:text-primary"}
            >
              <Home className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => setCurrentPage("about")}
              className={currentPage === "about" ? "text-primary" : "text-muted-foreground hover:text-primary"}
            >
              <User className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => setCurrentPage("projects")}
              className={currentPage === "projects" ? "text-primary" : "text-muted-foreground hover:text-primary"}
            >
              <Code className="w-6 h-6" />
            </Button>
          </nav>

          {/* Content */}
          <div className="max-w-2xl mx-auto">
            <div className="transition-opacity duration-300">{renderContent()}</div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

