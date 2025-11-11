'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface SuccessStory {
  id: number;
  // title: string;
  description: string;
  videoUrl: string;
  company: string;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    // title: 'The Oscars',
    description: 'Fobi provided the 94th and 95th Oscars with a digital ticketing and venue management solution.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    company: 'Academy Awards',
  },
  {
    id: 2,
    // title: 'Global Event Management',
    description: 'Streamlined ticketing and crowd management for major international conferences and exhibitions.',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    company: 'International Events',
  },
  {
    id: 3,
    // title: 'Enterprise Venue Solutions',
    description: 'Deployed AI-powered venue analytics and real-time capacity management for premium venues.',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    company: 'Premium Venues',
  },
];

export default function SuccessStoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const nextSlide = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const prevSlide = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setCurrentIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const currentStory = successStories[currentIndex];

  return (
    <section className="relative py-24 px-6 md:px-16 bg-black overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-400">
            Trusted by industry leaders for mission-critical events
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-16 md:px-20">
          <div className="overflow-hidden rounded-2xl bg-black border border-white/50">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {successStories.map((story, index) => (
                <div key={index} className="w-full flex-shrink-0 relative bg-gradient-to-br from-gray-900 to-black aspect-[16/9] h-96 md:h-[500px] flex items-center justify-center group">
                  {/* Video Player */}
                  <video
                    ref={index === currentIndex ? videoRef : null}
                    src={story.videoUrl}
                    className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onPlay={handlePlay}
                    onPause={handlePause}
                    onClick={togglePlayPause}
                  />

                  {/* Overlay */}
                  {/* Play Button Center */}
                  {index === currentIndex && (
                    <>
                      {/* Center Play/Pause Button */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 z-10">
                        {!isPlaying ? (
                          <button
                            onClick={togglePlayPause}
                            className="w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/30 transition-all duration-300 hover:scale-110 pointer-events-auto"
                          >
                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                          </button>
                        ) : (
                          <button
                            onClick={togglePlayPause}
                            className="w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/30 transition-all duration-300 hover:scale-110 pointer-events-auto opacity-0 group-hover:opacity-100"
                          >
                            <Pause className="w-8 h-8 text-white fill-white" />
                          </button>
                        )}
                      </div>
                    </>
                  )}

                  {/* Video Controls - Bottom */}
                  {index === currentIndex && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      {/* Progress Bar */}
                      <div className="mb-4">
                        <input
                          type="range"
                          min="0"
                          max={duration || 0}
                          value={currentTime}
                          onChange={handleProgressChange}
                          className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer hover:h-2 transition-all"
                          style={{
                            background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                              duration ? (currentTime / duration) * 100 : 0
                            }%, rgba(255,255,255,0.2) ${
                              duration ? (currentTime / duration) * 100 : 0
                            }%, rgba(255,255,255,0.2) 100%)`,
                          }}
                        />
                      </div>

                      {/* Controls Bar */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={togglePlayPause}
                            className="p-2 hover:bg-white/10 rounded transition-colors"
                          >
                            {isPlaying ? (
                              <Pause className="w-5 h-5 text-white fill-white" />
                            ) : (
                              <Play className="w-5 h-5 text-white fill-white" />
                            )}
                          </button>

                          <button
                            onClick={toggleMute}
                            className="p-2 hover:bg-white/10 rounded transition-colors"
                          >
                            {isMuted ? (
                              <VolumeX className="w-5 h-5 text-white" />
                            ) : (
                              <Volume2 className="w-5 h-5 text-white" />
                            )}
                          </button>

                          <span className="text-white text-sm">
                            {formatTime(currentTime)} / {formatTime(duration)}
                          </span>
                        </div>

                        <button
                          onClick={handleFullscreen}
                          className="p-2 hover:bg-white/10 rounded transition-colors"
                        >
                          <Maximize className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 border border-white/20 hover:border-white/40"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 border border-white/20 hover:border-white/40"
            aria-label="Next story"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.pause();
                  }
                  setCurrentIndex(index);
                  setIsPlaying(false);
                  setCurrentTime(0);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
