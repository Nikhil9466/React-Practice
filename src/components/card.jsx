import React from 'react'

export default function Card({src="https://dt-cdn.net/hub/logos/mongodb-atlas.png",technology="MongoDB Atlas" ,perks="Free tier available"}) {
  return (
    <div class="flex flex-col items-center p-7 rounded-2xl bg-amber-100 text-slate-950 shadow-lg hover:scale-105 transition-transform duration-300 m-3">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src={src} />
  </div>
  <div class="flex flex-col items-center mt-4">
    <h3 class="text-2xl font-bold mt-4">{technology}</h3>
    <h3 class="text-2xl font-bold mt-4">{perks}</h3>
  </div>
</div>
  )
}

