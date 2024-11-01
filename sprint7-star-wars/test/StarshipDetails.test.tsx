import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StarshipDetails } from '../src/components/StarshipDetails'
import { StarshipDataProps } from '../src/global/types'

// REQUIRED: Import React to StarshipDetails component is required for testing
const mockStarshipData: StarshipDataProps = {
  id: '12',
  name: 'X-Wing',
  model: 'T-65 X-wing starfighter',
  cost_in_credits: '150000',
  max_atmosphering_speed: '1050',
  manufacturer: 'Incom T-65',
  length: '12.5',
  crew: '1',
  passengers: '0',
	cargo_capacity: '110',
	consumables: '1 week',
	hyperdrive_rating: '1.0',
	MGLT: '100',
	starship_class: 'Starfighter',
	pilots: [
		'https://swapi.dev/api/people/1/',
		'https://swapi.dev/api/people/9/',
		'https://swapi.dev/api/people/18/',
		'https://swapi.dev/api/people/19/'
	],
	films: [
		'https://swapi.dev/api/films/1/',
		'https://swapi.dev/api/films/2/',
		'https://swapi.dev/api/films/3/'
	],
	created: '2014-12-12T11:19:05.340000Z',
	edited: '2014-12-20T21:23:49.886000Z',
	url: 'https://swapi.dev/api/starships/12/',
  image: 'https://starwars-visualguide.com/assets/img/starships/12.jpg',
}

describe('StarshipDetails', () => {
  it('renders the starship details correctly', () => {
    render(<StarshipDetails starshipData={mockStarshipData} />)

    // Verificar que el título de la sección esté presente
    expect(screen.getByText('Starship')).not.toBeNull()

    // Verificar que los detalles de la nave estén presentes
    expect(screen.getByText(mockStarshipData.name)).not.toBeNull()
    expect(screen.getByText('Model: '+mockStarshipData.model)).not.toBeNull()
    expect(screen.getByText('Cost in credits: '+mockStarshipData.cost_in_credits)).not.toBeNull()
    expect(screen.getByText('Atmosphering speed: '+mockStarshipData.max_atmosphering_speed)).not.toBeNull()
    expect(screen.getByText('Manufacturer: '+mockStarshipData.manufacturer)).not.toBeNull()
    expect(screen.getByText('Length: '+mockStarshipData.length)).not.toBeNull()
    expect(screen.getByText('Crew: '+mockStarshipData.crew)).not.toBeNull()

    // Verificar que la imagen esté presente
    expect(screen.getByAltText('Starship').getAttribute('src')).toBe('https://starwars-visualguide.com/assets/img/starships/'+mockStarshipData.id+'.jpg')
  })
})