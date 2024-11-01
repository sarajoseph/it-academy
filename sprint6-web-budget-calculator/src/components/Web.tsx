/* eslint-disable react/react-in-jsx-scope */
import { QuantityInput } from './QuantityInput'

export const Web = () => {
  return (
    <>
      <div className="flex flex-col md:items-end mt-14 gap-y-4">
        <QuantityInput qnty_npt_id="pages" label="Nombre de pàgines" />
        <QuantityInput qnty_npt_id="languages" label="Nombre de llenguatges" />
      </div>
    </>
  )
}