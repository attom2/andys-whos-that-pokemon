import React from 'react'
import Pokedex from './Pokedex'
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'
import "@testing-library/jest-dom";
import { getSinglePokemon } from '../../ApiCalls'

jest.mock('../../ApiCalls')

const pokemonList = [
  {
    "name": "ivysaur",
    "url": "https://pokeapi.co/api/v2/pokemon/2/"
  },
  {
    "name": "venusaur",
    "url": "https://pokeapi.co/api/v2/pokemon/3/"
  },
  {
    "name": "charmander",
    "url": "https://pokeapi.co/api/v2/pokemon/4/"
  },
  {
    "name": "charmeleon",
    "url": "https://pokeapi.co/api/v2/pokemon/5/"
  },
  {
    "name": "squirtle",
    "url": "https://pokeapi.co/api/v2/pokemon/7/"
  },
  {
    "name": "wartortle",
    "url": "https://pokeapi.co/api/v2/pokemon/8/"
  }
]

describe("Pokedex component", () => {
  it('should have a select menu', () => {
    const { getByRole, getAllByRole } = render(
      <MemoryRouter>
        <Pokedex allPokemon={pokemonList}/>
      </MemoryRouter>)

    const selectMenu = getByRole('combobox', {name:'Pokemon List'})
    const pokemonListOptions = getAllByRole('option')

    expect(selectMenu).toBeInTheDocument();
    expect(pokemonListOptions.length).toEqual(6)
  })



})
