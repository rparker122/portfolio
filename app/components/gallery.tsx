"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const images = [
    {
      src: "/placeholder.svg?height=600&width=400",
      alt: "Art piece 1",
      title: "Ethereal Dreams",
      demoLink: "https://example.com/demo1", // Replace with actual link
    },
    {
      src: "/placeholder.svg?height=600&width=400",
      alt: "Art piece 2",
      title: "Urban Symphony",
      demoLink: "https://example.com/demo2",
    },
    {
      src: "/placeholder.svg?height=600&width=400",
      alt: "Art piece 3",
      title: "Digital Nostalgia",
      demoLink: "https://example.com/demo3",
    },
    {
      src: "/placeholder.svg?height=600&width=400",
      alt: "Art piece 4",
      title: "Abstract Reality",
      demoLink: "https://example.com/demo4",
    },
  ]

  return (
    <section className="relative py-20">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Works
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.a
              key={index}
              href={image.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white">{image.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
