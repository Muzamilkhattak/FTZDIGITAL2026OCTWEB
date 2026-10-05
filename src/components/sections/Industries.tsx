import { useEffect } from 'react';

export function Industries() {
  // Client logos with explicit dimensions for performance
  const clients = [

    { name: "taytocafe", logo: "/clients logo/tayto.webp", width: 192, height: 96 },
    { name: "Samsaramedspa", logo: "/clients logo/samsaramedspa.svg", width: 192, height: 96 },
    { name: "Chaaye Khana Amazon", logo: "/clients logo/ckamazonlogo.webp", width: 192, height: 96 },
    { name: "Chaaye Khana DHA", logo: "/clients logo/ckdha1.webp", width: 192, height: 96 },
    { name: "Client 2", logo: "/clients logo/client2.webp", width: 192, height: 96 },
    { name: "Client 3", logo: "/clients logo/client3.png", width: 192, height: 96 },
    { name: "Client 4", logo: "/clients logo/client4.webp", width: 192, height: 96 },
    { name: "Client 5", logo: "/clients logo/client5.webp", width: 192, height: 96 },
    { name: "Client 6", logo: "/clients logo/client6.webp", width: 192, height: 96 },
    { name: "Client 7", logo: "/clients logo/client7.webp", width: 192, height: 96 },
    { name: "Client 8", logo: "/clients logo/client8.webp", width: 192, height: 96 },
    { name: "Client 9", logo: "/clients logo/client9.webp", width: 192, height: 96 },
    { name: "Client 10", logo: "/clients logo/client10.webp", width: 192, height: 96 },
    { name: "Client 11", logo: "/clients logo/client11.webp", width: 192, height: 96 },
    { name: "Client 12", logo: "/clients logo/client12.webp", width: 192, height: 96 },
    { name: "Client 13", logo: "/clients logo/client13.webp", width: 192, height: 96 },
    { name: "Client 14", logo: "/clients logo/client14.webp", width: 192, height: 96 },
    { name: "Client 15", logo: "/clients logo/client15.webp", width: 192, height: 96 },
    { name: "Client 16", logo: "/clients logo/client16.webp", width: 192, height: 96 },
    { name: "Client 24", logo: "/clients logo/client24.jfif", width: 192, height: 96 },
    { name: "Client 26", logo: "/clients logo/client26.webp", width: 192, height: 96 },
    { name: "MashaalNews", logo: "/clients logo/mashaaldigital.webp", width: 192, height: 96 },
    { name: "Oslo Elite", logo: "/clients logo/Oslo Elite logo.jpg", width: 192, height: 96 },
  ];

  const chunkedClients = [];
  for (let i = 0; i < clients.length; i += 2) {
    chunkedClients.push(clients.slice(i, i + 2));
  }

  return (
    <section
      id="clients"
      className="py-20 bg-[#050505] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block bg-blue-500/10 text-blue-400 font-semibold px-4 py-2 rounded-lg text-sm mb-4">
            Our Clients
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Trusted By <span className="text-blue-500">Leading Brands</span>
          </h2>
          <p className="text-lg text-neutral-400">
            We're proud to partner with innovative companies across diverse industries.
          </p>
        </div>
      </div>

      {/* Smooth Infinite Scrolling Logo Track */}
      <div className="relative w-full">
        {/* Gradient overlays for smooth fade effect */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #050505, transparent)'
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, #050505, transparent)'
          }}
        />

        {/* Ultra-smooth fast CSS animation slider */}
        <div className="overflow-hidden py-4">
          <style>{`
            @keyframes scroll-fast {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            
            .logo-scroll-track {
              animation: scroll-fast 30s linear infinite;
              display: flex;
              width: fit-content;
            }

            .logo-scroll-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="logo-scroll-track gap-2 md:gap-4 pl-2 md:pl-4">
            {/* First set of logos */}
            {chunkedClients.map((pair, index) => (
              <div key={`set1-${index}`} className="flex flex-col gap-2 md:gap-4 flex-shrink-0">
                {pair.map((client, idx) => (
                  <div
                    key={idx}
                    className="bg-white hover:bg-neutral-50 transition-all duration-300 rounded-xl flex items-center justify-center p-4 w-48 sm:w-56 md:w-64 h-28 sm:h-32 md:h-40"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      width={client.width}
                      height={client.height}
                      className="w-full h-full object-contain transition-transform hover:scale-110 duration-300"
                      loading={index < 3 ? "eager" : "lazy"}
                      fetchPriority={index < 3 ? "high" : "auto"}
                      decoding="async"
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {chunkedClients.map((pair, index) => (
              <div key={`set2-${index}`} className="flex flex-col gap-2 md:gap-4 flex-shrink-0">
                {pair.map((client, idx) => (
                  <div
                    key={idx}
                    className="bg-white hover:bg-neutral-50 transition-all duration-300 rounded-xl flex items-center justify-center p-4 w-48 sm:w-56 md:w-64 h-28 sm:h-32 md:h-40"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      width={client.width}
                      height={client.height}
                      className="w-full h-full object-contain transition-transform hover:scale-110 duration-300"
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
