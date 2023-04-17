import { render } from '@testing-library/react'
import { ReactElement } from 'react'

import Page from '../app/page'

describe('Index', () => {
  it('should render successfully', async () => {
    const { baseElement } = render((await Page()) as unknown as ReactElement)
    expect(baseElement).toBeTruthy()
  })
})
