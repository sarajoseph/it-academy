import React from 'react'
import { beforeEach, describe, expect, it} from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { StarshipElement } from '../src/components/StarshipElement'
import { StarshipBasicProps } from '../src/global/types'

// REQUIRED: Import React to StarshipElement component is required for testing
const mockStarship: StarshipBasicProps = {
  id: '1',
  name: 'X-Wing',
  model: 'T-65 X-wing starfighter',
}

describe('StarshipElement', () => {
  beforeEach(() => {
    cleanup()
  })
  it('renders the starship element correctly', () => {
    render(
      <MemoryRouter>
        <StarshipElement starship={mockStarship} />
      </MemoryRouter>
    )

    // Verificar que el nombre de la nave esté presente
    expect(screen.getByText(mockStarship.name)).not.toBeNull()

    // Verificar que el modelo de la nave esté presente
    expect(screen.getByText(mockStarship.model)).not.toBeNull()

    // Verificar que el enlace esté presente y tenga el href correcto
    expect(screen.getByRole('link').getAttribute('href')).toBe('/starships/starship/'+mockStarship.id)
  })
})