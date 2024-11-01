/* eslint-disable react/react-in-jsx-scope */
export const InfoDialog = () => {
  return (
    <dialog id="infoDialog" className="modal">
      <div className="modal-box px-10 py-16 text-center">
        <h3 className="font-bold text-2xl pb-7"></h3>
        <p></p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}