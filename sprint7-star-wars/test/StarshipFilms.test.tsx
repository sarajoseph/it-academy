/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { StarshipFilms } from '../src/components/StarshipFilms'
import { FilmsType } from '../src/global/types'
import axios from 'axios'

// REQUIRED: Import React to StarshipFilms and SectionTitle components is required for testing
const mockedFilms: FilmsType = [
  {
    id: '1',
    title: 'A New Hope',
    episode_id: 4,
    image: 'https://starwars-visualguide.com/assets/img/films/1.jpg',
  },
  {
    id: '2',
    title: 'The Empire Strikes Back',
    episode_id: 5,
    image: 'https://starwars-visualguide.com/assets/img/films/2.jpg',
  },
]

// Mockear fetchFilms para devolver datos simulados
vi.mock('../src/services/films', () => ({
  fetchFilms: vi.fn(() => Promise.resolve(mockedFilms))
}))

// Mock de useFilms hook
vi.mock('../src/hooks/useFilms', () => ({
  useFilms: vi.fn(() => mockedFilms),
}))

const filmsLinks = ['https://swapi.dev/api/films/1', 'https://swapi.dev/api/films/2']

describe('StarshipFilms', () => {
  beforeEach(() => {
    cleanup()
  })
/*
  it('does not render anything when no films are available', () => {
    // Mockear el resultado como null
    vi.spyOn(axios, 'get').mockImplementation(() => {
      return Promise.resolve(null)
    })

    // Renderizar el componente
    render(<StarshipFilms filmsLinks={filmsLinks} />)

    // Verificar que el título no está
    expect(screen.queryByText('Films')).toBeFalsy()
    // Verificar que los títulos de las películas no están presentes
    mockedFilms.map((film) => expect(screen.getByText(film.title)).toBeFalsy())
  })

  it('does not render anything when films array is empty', () => {
    // Mockear el resultado como un array vacío
    vi.spyOn(axios, 'get').mockImplementation(() => {
      return Promise.resolve([])
    })

    // Renderizar el componente
    render(<StarshipFilms filmsLinks={filmsLinks} />)

    // Verificar que el título no está
    expect(screen.queryByText('Films')).toBeFalsy()
    // Verificar que los títulos de las películas no están presentes
    mockedFilms.map((film) => expect(screen.getByText(film.title)).toBeFalsy())
  }) */

  it('renders films correctly when films data is available', () => {
    vi.spyOn(axios, 'get').mockImplementation(() => {
      return Promise.resolve(mockedFilms)
    })

    render(<StarshipFilms filmsLinks={filmsLinks} />)

    // Verificar que el título de la sección esté presente
    expect(screen.getByText('Films')).to.exist
    // Verificar que los títulos de las películas estén presentes
    mockedFilms.map((film) => expect(screen.getByText(film.title)).to.exist)
  })
})
