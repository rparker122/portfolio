"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "team", "personal", "my favorites"]

  const works = [
    {
      id: 1,
      title: "Digital Dreamscape",
      category: "team",
      image: "/placeholder.svg?height=400&width=600",
      year: "2024",
      link: "https://example.com/digital-dreamscape",
    },
    {
      id: 2,
      title: "Abstract Harmony",
      category: "personal",
      image: "/placeholder.svg?height=400&width=600",
      year: "2023",
      link: "https://www.google.com/search?q=goku+black&sca_esv=a9a17715c624a2d7&rlz=1C1VDKB_enUS1108US1109&ei=AsnYZ8O-AsGr5NoP3vih6Ac&ved=0ahUKEwjDx42JupKMAxXBFVkFHV58CH0Q4dUDCBI&uact=5&oq=goku+black&gs_lp=Egxnd3Mtd2l6LXNlcnAiCmdva3UgYmxhY2syCBAuGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESIw3UABY5TNwBngBkAEAmAFNoAHJBqoBAjE1uAEDyAEA-AEBmAIVoAKCB6gCCsICExAAGIAEGEMYtAIYigUY6gLYAQHCAhMQLhiABBhDGLQCGIoFGOoC2AEBwgIUEAAYgAQY4wQYtAIY6QQY6gLYAQHCAgsQLhiABBjRAxjHAcICDhAuGIAEGLEDGNEDGMcBwgIREC4YgAQYsQMY0QMYgwEYxwHCAgsQABiABBixAxiDAcICDRAAGIAEGLEDGEMYigXCAgoQABiABBhDGIoFwgIQEAAYgAQYsQMYQxiDARiKBcICExAuGIAEGLEDGNEDGEMYxwEYigXCAhAQLhiABBjRAxhDGMcBGIoFwgIFEC4YgATCAhEQLhiABBiRAhjRAxjHARiKBcICERAuGIAEGLEDGIMBGNQCGIoFwgIEEAAYA8ICFhAuGIAEGLEDGNEDGEMYgwEYxwEYigXCAg0QLhiABBixAxhDGIoFwgIKEC4YgAQYQxiKBcICDhAuGIAEGMcBGI4FGK8BwgIQEC4YgAQYQxjHARiKBRivAcICFhAuGIAEGEMYxwEYmAUYmQUYigUYrwGYAwPxBfPmsfZwDrYgugYECAEYB5IHAjIxoAfMowGyBwIxNbgH8gY&sclient=gws-wiz-serp",
    },
    {
      id: 3,
      title: "Metal Flow",
      category: "my favorites",
      image: "/placeholder.svg?height=400&width=600",
      year: "2024",
      link: "https://example.com/metal-flow",
    },
    {
      id: 4,
      title: "Neon Nights",
      category: "team",
      image: "/placeholder.svg?height=400&width=600",
      year: "2023",
      link: "https://example.com/neon-nights",
    },
    {
      id: 5,
      title: "Nature's Whisper",
      category: "persnoal",
      image: "/placeholder.svg?height=400&width=600",
      year: "2024",
      link: "https://example.com/natures-whisper",
    },
    {
      id: 6,
      title: "Bronze Echo",
      category: "my favorites",
      image: "/placeholder.svg?height=400&width=600",
      year: "2023",
      link: "https://example.com/bronze-echo",
    },
  ]

  const filteredWorks = works.filter((work) => (selectedCategory === "all" ? true : work.category === selectedCategory))

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden bg-zinc-900">
                  <CardContent className="p-0">
                    <a href={work.link} target="_blank" rel="noopener noreferrer" className="group relative block">
                      <img
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        className="w-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h3 className="text-xl font-semibold text-white">{work.title}</h3>
                        <p className="mt-2 text-sm text-gray-300">{work.year}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
