import React, { useState } from "react";
import ModalContent from "../../Components/ModalContent/ModalContent";
import PostAPI from "../../Utility/API/PostWithoutToken";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Shuffle,
  Repeat,
  Heart,
  Music2,
} from "lucide-react";

function Draf() {
  const [IS_Open, setIS_Open] = useState(false); // State สำหรับตรวจสอบสถานะของเครื่อง
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const songs = [
    {
      id: 1,
      title: "Midnight Rain",
      artist: "Luna Eclipse",
      duration: "3:45",
      cover:
        "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Neon Dreams",
      artist: "Stellar Wave",
      duration: "4:12",
      cover:
        "https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Urban Echo",
      artist: "Metro Pulse",
      duration: "3:58",
      cover:
        "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=300&h=300&fit=crop",
    },
  ];

  return (
    <div className="">
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Now Playing Section */}
            <div className="lg:col-span-2 bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <div className="flex flex-col items-center">
                <div className="relative group w-64 h-64 mb-8">
                  <img
                    src={songs[0].cover}
                    alt="Album Cover"
                    className="w-full h-full object-cover rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <Heart className="w-12 h-12 text-white cursor-pointer hover:text-pink-500 transition-colors" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-2">{songs[0].title}</h2>
                <p className="text-gray-300 mb-8">{songs[0].artist}</p>

                {/* Progress Bar */}
                <div className="w-full max-w-md mb-6">
                  <div className="h-1 bg-white/20 rounded-full">
                    <div
                      className="h-1 bg-violet-500 rounded-full"
                      style={{ width: `${(currentTime / 225) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span>0:{currentTime.toString().padStart(2, "0")}</span>
                    <span>{songs[0].duration}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-8">
                  <Shuffle className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                  <SkipBack className="w-6 h-6 hover:text-violet-400 cursor-pointer" />
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-14 h-14 rounded-full bg-violet-500 flex items-center justify-center hover:bg-violet-600 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6 ml-1" />
                    )}
                  </button>
                  <SkipForward className="w-6 h-6 hover:text-violet-400 cursor-pointer" />
                  <Repeat className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Playlist Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Music2 className="w-6 h-6 text-violet-400" />
                <h3 className="text-xl font-semibold">Up Next</h3>
              </div>

              <div className="space-y-4">
                {songs.map((song) => (
                  <div
                    key={song.id}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <img
                      src={song.cover}
                      alt={song.title}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{song.title}</h4>
                      <p className="text-sm text-gray-400">{song.artist}</p>
                    </div>
                    <span className="text-sm text-gray-400">
                      {song.duration}
                    </span>
                  </div>
                ))}
              </div>

              {/* Volume Control */}
              <div className="mt-8 flex items-center gap-4">
                <Volume2 className="w-5 h-5" />
                <div className="flex-1 h-1 bg-white/20 rounded-full">
                  <div
                    className="h-1 bg-violet-500 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Draf;
