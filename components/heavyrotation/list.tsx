'use client'

import useSWR from "swr"
import { useState } from "react"

import { guntxFetching } from "@/lib/fetchHelper"
import { HeavyRotationLoading } from "./loading"
import { XMarkIcon } from "@heroicons/react/24/outline"

const getTrackId = (spotifyUri: string) => {
    const s = spotifyUri.split(":")
    return s[2]
}

export const HeavyRotationList = () => {
    const { data, error: isError, isLoading } = useSWR('toptracks', guntxFetching)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedTrack, setSelectedTrack] = useState<number | null>(null)

    const openModal = (track: number) => {
        setSelectedTrack(track)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    if (isLoading) return HeavyRotationLoading()
    else if (isError) return (<p className="font-inter text-center lg:text-left">Error loading Jakka's heavy rotation. Please try again.</p>)
    else {
        return (
            <>
                <div className="flex flex-col gap-y-2 pb-10">
                    {data.items.map((ea: any, i: number) => (
                        <button
                            className="font-inter text-left hover:underline"
                            key={i}
                            onClick={() => openModal(i)}
                        >
                            {i+1}. {ea.artist} - <span className="font-bold">{ea.name}</span>
                        </button>
                    ))}
                </div>
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="relative bg-black text-white rounded-lg overflow-hidden max-w-md w-full aspect-square">
                            <div 
                                className="absolute inset-0 bg-cover bg-center"
                                style={{backgroundImage: `url('${data.items[selectedTrack || 0]['image_link'] || "https://placehold.co/400"}')`}}
                            ></div>
                            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                            <div className="relative z-10 p-6 h-full flex flex-col">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-bold font-inter text-[#e0e0e0] dark:text-[#e0e0e0]">{data.items[selectedTrack || 0]['name']}</h2>
                                    <button
                                        onClick={closeModal}
                                        className="text-[#e0e0e0]"
                                        aria-label="Close modal"
                                    >
                                        <XMarkIcon className="w-6" />
                                    </button>
                                </div>
                                <p className="text-[#e0e0e0] dark:text-[#e0e0e0]">by {data.items[selectedTrack || 0]['artist']}</p>
                                <div className="flex-grow"></div>
                                <div className="pb-2 lg:pb-10">
                                    <iframe 
                                        className="rounded-[1rem]" 
                                        src={`https://open.spotify.com/embed/track/${getTrackId(data.items[selectedTrack || 0]['uri'])}`} 
                                        width="100%" 
                                        height="152" 
                                        allowFullScreen={false} 
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </>
        )
    }
}