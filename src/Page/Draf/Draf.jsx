import React, { useState } from "react";
import ThemeSwitch from "../../Components/common/ThemeSwitch/ThemeSwitch";
const memes = [
  {
    id: 1,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzyLc8LMQIrviNz6u2EP3TtPRZZt3OlhrhHA&s",
  },
  {
    id: 2,
    url: "https://static01.nyt.com/images/2021/04/30/multimedia/30xp-meme/29xp-meme-mediumSquareAt3X-v5.jpg",
  },
  {
    id: 3,
    url: "https://media.tenor.com/wXAHx6DnGx4AAAAM/meme-mood.gif",
  },
];

const MemeButton = () => {
  const [meme, setMeme] = useState(null);

  const handleButtonClick = () => {
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    setMeme(randomMeme.url);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ThemeSwitch />
      <button
        onClick={handleButtonClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        กดเพื่อรับ Meme
      </button>
      {meme && <img src={meme} alt="Meme" className="mt-4 w-1/2" />}
    </div>
  );
};

export default MemeButton;
