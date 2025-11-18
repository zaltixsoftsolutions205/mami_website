import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GREEN = "#34c759";
const SKY_BLUE = "#24b8e7";

// 10 gallery images in JPEG format
const galleryImages = [
  {
    id: 1,
    src: "/src/assets/gallery1.jpeg",
    alt: "Modern physiotherapy treatment room",
    category: "Facility"
  },
  {
    id: 2,
    src: "/src/assets/gallery2.jpeg",
    alt: "Advanced rehabilitation equipment",
    category: "Equipment"
  },
  {
    id: 3,
    src: "/src/assets/gallery3.jpeg",
    alt: "One-on-one patient consultation",
    category: "Consultation"
  },
  {
    id: 4,
    src: "/src/assets/gallery4.jpeg",
    alt: "Sports injury rehabilitation session",
    category: "Sports"
  },
  {
    id: 5,
    src: "/src/assets/gallery5.jpeg",
    alt: "Neurological physiotherapy treatment",
    category: "Neurology"
  },
  {
    id: 6,
    src: "/src/assets/gallery6.jpeg",
    alt: "Pediatric physiotherapy care",
    category: "Pediatrics"
  },
  {
    id: 7,
    src: "/src/assets/gallery7.jpeg",
    alt: "Manual therapy techniques",
    category: "Treatment"
  },
  {
    id: 8,
    src: "/src/assets/gallery8.jpeg",
    alt: "Post-surgical rehabilitation",
    category: "Rehabilitation"
  },
  {
    id: 9,
    src: "/src/assets/gallery9.jpeg",
    alt: "Therapeutic exercise guidance",
    category: "Exercise"
  },
  {
    id: 10,
    src: "/src/assets/gallery10.jpeg",
    alt: "Pain management therapy session",
    category: "Pain Management"
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

  return (
    <section id="gallery" className="py-12 md:py-20 bg-muted/30">
      <div className="container px-4">
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
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(image, index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-semibold text-sm">
                  {image.alt}
                </p>
                <span 
                  className="text-xs text-accent font-medium"
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
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
            >
              <X className="h-8 w-8 md:h-10 md:w-10" />
            </button>

            <button
              onClick={goToPrevious}
              className="absolute left-4 text-white hover:text-accent transition-colors z-10"
            >
              <ChevronLeft className="h-8 w-8 md:h-10 md:w-10" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 text-white hover:text-accent transition-colors z-10"
            >
              <ChevronRight className="h-8 w-8 md:h-10 md:w-10" />
            </button>

            <div className="relative max-w-4xl max-h-full">
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
                  className="text-accent font-medium text-sm"
                  style={{ color: SKY_BLUE }}
                >
                  {selectedImage.category}
                </span>
              </div>
            </div>

            <div className="absolute bottom-4 text-white text-sm">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;