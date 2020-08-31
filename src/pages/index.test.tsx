import { render, screen } from '@testing-library/react'
import Home from '.'

describe('<Home />', () => {

  it('Deve renderizar o header da página', () => {
    const { container } = render(<Home />)

    expect(screen.
      getByRole('heading',
        { name: /Boilerplate com NextJS, ReactJS, Typescript e StyledComponents/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Deve renderizar os estilos corretamente', () => {
    const { container } = render(<Home />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#8e44ad',
      'color': '#fff'
    })
  })
})     