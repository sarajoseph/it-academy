/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'
export const ShareURL = ({url}: {url: string}) => {
  const fullURL: string = window.location.origin + url
  const sleep = (time: number) => {
    return new Promise(resolve=>setTimeout(resolve, time))
  }	
  const displayMessage = async (eAlert: HTMLElement) => {
    eAlert.classList.remove('hidden')
    eAlert.classList.remove('opacity-0')
    eAlert.classList.add('opacity-100')
    await sleep(2000)
    eAlert.classList.remove('opacity-100')
    eAlert.classList.add('opacity-0')
    await sleep(500)
    eAlert.classList.add('hidden')
  }	
  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullURL)
    const eShareURL: HTMLElement = document.getElementById('shareURL') as HTMLElement
    const eAlert: HTMLElement = eShareURL.querySelector('.alert') as HTMLElement
    displayMessage(eAlert)		
  }
  return (
    <dialog id="shareURL" className="modal">
      <div className="flex flex-col gap-8 modal-box px-10 py-16 items-center justify-center">
        <h3 className="font-bold text-2xl">Comparte el presupuesto</h3>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-sm w-full max-w-xs"
          readOnly
          value={fullURL}
          onClick={() => copyToClipboard()} />
        <Link to={url} target="_blank" className="btn btn-neutral text-center">Ir al enlace</Link>
        <div role="alert" className="alert alert-primary bg-primary max-w-xs hidden opacity-0 transition-opacity duration-1000">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Enlace copiado en el portapapeles</span>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}