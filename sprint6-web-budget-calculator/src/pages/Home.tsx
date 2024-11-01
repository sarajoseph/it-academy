/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <div className="flex flex-col text-center gap-y-10 max-w-3xl mx-auto py-20">
      <h1 className="text-5xl font-bold">Welcome!</h1>
      <p>
        Aplicació amb l'objectiu d'agilitzar els càlculs per al pressupost d'un lloc web, incrementant la interacció amb l'usuari/ària en comparació amb la pràctica anterior, mitjançant l'ús de caselles de selecció, camps d'entrada (inputs) i botons.
        El nostre lloc web haurà de respondre i ajustar el preu total en funció de les opcions seleccionades per l'usuari/ària.
      </p>
      <Link to="/calculator" className="btn btn-neutral mx-auto w-fit">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
        </svg>
      </Link>
    </div>
  )
}
