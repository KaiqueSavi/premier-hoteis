import React from 'react';

export default function AnimatedBanner() {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/videos/principal.mp4" type="video/mp4" />
                {/* Fallback image if video fails to load or for mobile if needed */}
                Your browser does not support the video tag.
            </video>

            {/* Overlay for better text readability */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <h2
                    className="text-white text-5xl md:text-5xl font-sans tracking-tight animate-fade-in-up font-bold"
                    style={{ fontFamily: "Georgia, Sans-serif",
                        textShadow: '0 4px 12px rgba(0,0,0,0.3)'
                    }}
                >
                    Conheça o Melhor dos nossos Hotéis!
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mt-8 opacity-0 animate-scale-in delay-500"></div>
            </div>
        </section>
    );
}