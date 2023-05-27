import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import { Example } from './Example'

test('renders example data', () => {
  const data = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' }
  ]

  const { getByText } = render(
    <Provider store={store}>
      <Example />
    </Provider>
  )

  data.forEach((item) => {
    const element = getByText(item.name)
    expect(element).toBeInTheDocument()
  })
})
