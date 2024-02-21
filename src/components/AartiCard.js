import React from 'react'
import"../app/globals.css"
const AartiCard = () => {
  return (
    <div class=" mx-auto mt-10">
      <div class="flip-container w-64 h-64 relative">
        <div class="flipper absolute w-full h-full transform transition-transform duration-500">
          <div class="front  bg-gradient-to-br from-gray-200 to-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center text-black text-lg font-semibold">
            <h2 class="text-2xl mb-4">Hanuman Aarti</h2>
            <img
              src="/hanumanJi.webp"
              alt="Placeholder Image"
              class="rounded-full w-40 h-40 object-cover"
            />
          </div>
          <div class="back  p-4 rounded shadow-lg flex flex-col  justify-center items-center text-black text-lg font-light">
            <p>
              आरती कीजै हनुमान लला की। दुष्ट दलन रघुनाथ कला की॥ जाके बल से
              गिरिवर कांपे। रोग दोष जाके निकट न जांपे॥ अंजनि पुत्र महा बलदाई।
              संतन के प्रभु सदा सहाई॥ दे बीरा रघुनाथ पठायी। लंका जारि असुर
              संहारी॥
            </p>
            <a>Read More...</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AartiCard
