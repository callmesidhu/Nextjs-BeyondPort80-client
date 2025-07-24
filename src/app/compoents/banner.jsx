export function BannerImages() {
  const images = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=868",
      alt: "Banner image 1"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=868", 
      alt: "Banner image 2"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/e2156e29035bdcb5eb1e1239f847d22b20d75409?width=868",
      alt: "Banner image 3"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/3f76a30de452db493e02e953a64a93d202fc5095?width=868",
      alt: "Banner image 4"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/4492e5b83f35718bc77d197870a26dcc0e00db00?width=868",
      alt: "Banner image 5"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/1095452a355abecc33fffeefaae4a5ab3d19e94e?width=868",
      alt: "Banner image 6"
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Desktop: Horizontal scrolling row */}
      <div className="hidden lg:flex gap-9 justify-end pr-0">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-[434px] h-[282px] object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Tablet: 2x3 grid */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 px-8">
        {images.map((image, index) => (
          <div key={index} className="aspect-[434/282]">
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Mobile: Single column */}
      <div className="grid md:hidden grid-cols-1 gap-4 px-4">
        {images.slice(0, 3).map((image, index) => (
          <div key={index} className="aspect-[434/282]">
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
