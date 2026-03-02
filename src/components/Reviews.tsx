import React, { useState } from 'react';

const reviews = [
    {
        id: 1,
        author: 'Anonymous',
        avatarColor: 'bg-sky-400',
        initial: 'A',
        date: '8 Março 2023',
        status: 'Superb',
        rating: 5,
    },
    {
        id: 2,
        author: 'Persio',
        avatarColor: 'bg-green-500',
        initial: 'P',
        date: '6 Março 2023',
        status: 'Exceptional',
        rating: 5,
    },
    {
        id: 3,
        author: 'Paulo',
        avatarColor: 'bg-green-500',
        initial: 'P',
        date: '6 Março 2023',
        status: 'Superb',
        rating: 5,
    },
    {
        id: 4,
        author: 'Maria',
        avatarColor: 'bg-pink-400',
        initial: 'M',
        date: '5 Março 2023',
        status: 'Excellent',
        rating: 5,
    }
];

export default function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section className="bg-[#F5F5F5] py-20 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center mb-12 text-center">
                <h2 className="text-xl font-bold uppercase tracking-widest text-[#003580] mb-2 uppercase">Excelente</h2>

                {/* Main Rating Stars */}
                <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <div key={star} className="w-8 h-8 bg-[#003580] rounded-md flex items-center justify-center text-white">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        </div>
                    ))}
                </div>

                <p className="text-[#333] font-medium text-sm mb-4">
                    Com base em <span className="font-bold">321 avaliações</span>
                </p>

                {/* Booking.com Logo Style */}
                <div className="flex items-center gap-1 text-[#003580] font-bold text-2xl">
                    <span className="text-[#003580]">Booking</span>
                    <span className="text-[#00AEEF]">.com</span>
                </div>
            </div>

            {/* Desktop Carousel View */}
            <div className="relative max-w-7xl mx-auto px-10">
                {/* Navigation Arrows */}
                <button
                    onClick={prevReview}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#003580] transition-colors"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <div className="flex gap-6 transition-all duration-500 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {/* We'll show 3 cards on desktop at a time */}
                        {[0, 1, 2].map((offset) => {
                            const index = (currentIndex + offset) % reviews.length;
                            const review = reviews[index];
                            return (
                                <div
                                    key={review.id}
                                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 min-h-[280px] flex flex-col"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${review.avatarColor}`}>
                                                {review.initial}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-bold text-gray-800">{review.author}</span>
                                                <span className="text-gray-400 text-xs">{review.date}</span>
                                            </div>
                                        </div>
                                        <div className="w-6 h-6 bg-[#003580] text-white rounded flex items-center justify-center font-bold text-[10px]">
                                            B.
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center mt-auto">
                                        <div className="flex gap-1 mb-2">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <div key={s} className="w-5 h-5 bg-[#003580] rounded-[3px] flex items-center justify-center text-white">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                    </svg>
                                                </div>
                                            ))}
                                            <div className="ml-1 w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5">
                                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="text-gray-700 font-medium">{review.status}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <button
                    onClick={nextReview}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#003580] transition-colors"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
