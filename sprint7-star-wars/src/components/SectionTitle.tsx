/* eslint-disable react/react-in-jsx-scope */
export const SectionTitle = ({ children }: {children: string}) => {
  return (		
    <h2 className="uppercase text-xl font-bold mb-5 px-4 py-2 border-y border-zinc-800">
      {children}
    </h2>
  )
}