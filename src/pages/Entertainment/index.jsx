import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';

const Entertainment = () => {
    const [activeTab, setActiveTab] = useState('Entertainment');

    const tabs = ['Entertainment', 'Eye Candy', 'Dancing', 'Fight', 'Comedy', 'Sports'];

    const videos = [
        {
            id: 1,
            title: 'Destroyer Him',
            views: 53,
            thumbnail: '/images/img_image_11.png'
        },
        {
            id: 2,
            title: 'Does she have a point?',
            views: 35,
            thumbnail: '/images/img_image_12.png'
        },
        {
            id: 3,
            title: 'Was he wrong?',
            views: 51,
            thumbnail: '/images/img_image_13.png'
        },
        {
            id: 4,
            title: 'Check out Jim Jones summer jam performance',
            views: 53,
            thumbnail: '/images/img_image_14.png'
        },
        {
            id: 5,
            title: 'Powerslap',
            views: 55,
            thumbnail: '/images/img_image_15.png'
        },
        {
            id: 6,
            title: 'Pause',
            views: 53,
            thumbnail: '/images/img_image_16.png'
        },
        {
            id: 7,
            title: 'Pulisic explains his trevis scott dis',
            views: 50,
            thumbnail: '/images/img_image_17.png'
        },
        {
            id: 8,
            title: 'Bro 3rd what?',
            views: 50,
            thumbnail: '/images/img_image_18.png'
        },
        {
            id: 9,
            title: 'He won\'t do that again',
            views: 55,
            thumbnail: '/images/img_image_2.png'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Entertainment - Hip Hop Boombox</title>
                <meta name="description" content="Browse entertainment videos on Hip Hop Boombox" />
            </Helmet>

            <div className="min-h-screen bg-[#1e293b] text-white">
                <Header />

                <div className="px-6 py-6">
                    {/* Search Bar */}
                    <div className="mb-6">
                        <div className="relative max-w-md">
                            <input
                                type="text"
                                placeholder="Search Videos"
                                className="w-full bg-[#334155] text-white rounded-lg px-4 py-3 pl-12 placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                            <svg
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab
                                    ? 'bg-pink-500 text-white'
                                    : 'bg-[#334155] text-gray-300 hover:bg-[#475569]'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Content Section */}
                    <div>
                        <div className="mb-6">
                            <h2 className="text-xl font-bold text-white">
                                {activeTab}
                            </h2>
                            <p className="text-sm text-gray-400 mt-1">872 Videos</p>
                        </div>

                        {/* Video Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {videos.map((video) => (
                                <div key={video.id} className="relative group cursor-pointer">
                                    <div className="aspect-video relative overflow-hidden rounded-lg bg-gray-800">
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                                                <svg
                                                    className="w-6 h-6 text-gray-800 ml-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <h3 className="text-white font-medium text-sm leading-tight">{video.title}</h3>
                                        <p className="text-pink-400 text-xs mt-1 flex items-center">
                                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                            </svg>
                                            Views {video.views}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center items-center gap-2">
                            <button className="p-2 text-gray-400 hover:text-white">
                                <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            <div className="flex items-center gap-1">
                                <button className="w-8 h-8 rounded-full bg-cyan-400 text-gray-900 text-sm font-medium">1</button>
                                <button className="w-8 h-8 rounded-full text-gray-400 hover:text-white text-sm">2</button>
                                <button className="w-8 h-8 rounded-full text-gray-400 hover:text-white text-sm">3</button>
                                <span className="mx-2 text-gray-400">...</span>
                                <button className="w-8 h-8 rounded-full text-gray-400 hover:text-white text-sm">10</button>
                            </div>
                            <button className="p-2 text-gray-400 hover:text-white">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-black text-center py-6 mt-12">
                    <div className="flex justify-center mb-4">
                        <img src="/images/img_header_logo.png" alt="Hip Hop Boombox" className="h-8" />
                    </div>
                    <div className="flex justify-center gap-6 mb-4 text-sm text-gray-400">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">DMCA</a>
                        <a href="#" className="hover:text-white">EULA</a>
                        <a href="#" className="hover:text-white">Raffle T&C</a>
                    </div>
                    <div className="flex justify-center gap-3 mb-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                    <p className="text-xs text-gray-500">All Rights Reserved - HipHopBoombox</p>
                </footer>
            </div>
        </>
    );
};

export default Entertainment;