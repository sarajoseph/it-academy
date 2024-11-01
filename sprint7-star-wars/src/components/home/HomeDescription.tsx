/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unescaped-entities */
import { GifProps } from '../../global/types'
import { useUser } from '../../hooks/useUser'

export const HomeDescription = ({gif, gifIsSuccess}: {gif: GifProps | null, gifIsSuccess: boolean}) => {
  const user = useUser()
  if (!user) {
    return (
      <>
      <h1 className="text-5xl font-bold">Welcome!</h1>
      <img src="https://media.giphy.com/media/cw57Zj5jydM2EU50Ju/giphy.gif" alt="Star Wars Gif" />
      <p>
        To view the content of the entire website you must log in or register
        {gifIsSuccess && gif &&
        <span>, but down here you can generate a new gif!</span>
        }
      </p>
      </>
    )

  } else {
    return (
      <>
      <h1 className="text-5xl font-bold">Welcome <span className="capitalize">{user.username}</span>!</h1>
      <p>So glad you're here!</p>
      <img src="https://media.giphy.com/media/AcfTF7tyikWyroP0x7/giphy.gif" alt="Star Wars Gif" />
      <p>
        Now you can see the incredible Star Wars starships with all their details
        {gifIsSuccess && gif &&
        <span>, or generate a new gif</span>
        }
      </p>
      </>
    )
  }
}