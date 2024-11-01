export type LoadingProps = {
  type?: 'loading-spinner' | 'loading-dots' | 'loading-ring' | 'loading-ball' | 'loading-bars' | 'loading-infinity'
  size?: 'loading-xs' | 'loading-sm' | 'loading-md' | 'loading-lg'
}
export type StarshipBasicProps = {
  id: string
  name: string
  model: string
}
export type StarshipDataProps = StarshipBasicProps & {
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
  pilots: string[]
  films: string[]
  created: string
  edited: string
  url: string
  image?: string
}
export type FormRegisterInputs = {
  username: string
  email: string
  password: string
}
export type PilotsType = {
  id: string,
  name: string,
  image: string,
}[]
export type FilmsType = {
  id: string,
  title: string,
  episode_id: number,
  image: string,
}[]
export type GifProps = {
  id: string,
  alt_text: string
}
export type UserProps = {
  username: string,
  email: string
}