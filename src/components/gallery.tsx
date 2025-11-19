import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import all gallery images
import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpeg";
import gallery5 from "../assets/gallery5.jpeg";
import gallery6 from "../assets/gallery6.jpeg";
import gallery7 from "../assets/gallery7.jpeg";
import gallery8 from "../assets/gallery8.jpeg";
import gallery9 from "../assets/gallery9.jpeg";
import gallery10 from "../assets/gallery10.jpeg";
import React from "react";

const GREEN = "#34c759";
const SKY_BLUE = "#24b8e7";

// 10 gallery images with proper imports
const galleryImages = [
  {
    id: 1,
    src: gallery1,
    alt: "Report harassment online - Support available",
    category: "Awareness"
  },
  {
    id: 2,
    src: gallery2,
    alt: "Gallery Image 2",
    category: "Facility"
  },
  {
    id: 3,
    src: gallery3,
    alt: "Gallery Image 3",
    category: "Treatment"
  },
  {
    id: 4,
    src: gallery4,
    alt: "Gallery Image 4",
    category: "Equipment"
  },
  {
    id: 5,
    src: gallery5,
    alt: "Freddie & Unchirurg",
    category: "Collaboration"
  },
  {
    id: 6,
    src: gallery6,
    alt: "Gallery Image 6",
    category: "Rehabilitation"
  },
  {
    id: 7,
    src: gallery7,
    alt: "India Society Coventry University",
    category: "Education"
  },
  {
    id: 8,
    src: gallery8,
    alt: "Gallery Image 8",
    category: "Sports"
  },
  {
    id: 9,
    src: gallery9,
    alt: "Visual - Two seasons a Butterfly's Beauty",
    category: "Inspiration"
  },
  {
    id: 10,
    src: gallery10,
    alt: "BA International Business Top-Up Degree",
    category: "Qualification"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  React.useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, currentIndex]);

  return (
    <section id="gallery" className="py-12 md:py-20 bg-muted/30">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-xs md:text-sm font-semibold mb-3 uppercase tracking-wider"
            style={{ color: GREEN }}
          >
            📸 Gallery
          </p>
          <h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: GREEN }}
          >
            Explore Our Practice & Certifications
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our facility photos, treatment sessions, and professional certifications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
              onClick={() => openLightbox(image, index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-semibold text-sm mb-1">
                  {image.alt}
                </p>
                <span 
                  className="text-xs font-medium px-2 py-1 rounded-full bg-black/50"
                  style={{ color: SKY_BLUE }}
                >
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <X className="h-6 w-6 md:h-8 md:w-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 text-white hover:text-accent transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 text-white hover:text-accent transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
            </button>

            <div 
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <p className="text-white font-semibold text-lg mb-1">
                  {selectedImage.alt}
                </p>
                <span 
                  className="text-accent font-medium text-sm px-2 py-1 rounded-full bg-black/50"
                  style={{ color: SKY_BLUE }}
                >
                  {selectedImage.category}
                </span>
              </div>
            </div>

            <div className="absolute bottom-4 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;