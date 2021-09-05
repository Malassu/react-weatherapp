import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import MediaCard from './MediaCard'

describe('Component Testing', () => {
  function testFunc () {}
  const state = {
    temperature: 20,
    location: 'Helsinki',
    lon: 24.9355,
    lat: 60.1695
  }
  it('Renders title correctly', () => {
    render(<MediaCard state={state} onClick={testFunc} />)
    const h5 = screen.getByText(`Current weather in ${state.location}`)
    expect(h5).toBeInTheDocument()
  })
  it('Renders temperature correctly', () => {
    render(<MediaCard state={state} onClick={testFunc} />)
    const h6 = screen.getByText(`Temperature: ${state.temperature}\xB0C`)
    expect(h6).toBeInTheDocument()
  })
})
