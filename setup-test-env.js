import '@testing-library/jest-dom/extend-expect'
import { setGlobalConfig } from '@storybook/testing-react'
import * as globalStorybookConfig from './.storybook/preview'
import { setupJestScreenshot } from 'jest-screenshot'

setGlobalConfig(globalStorybookConfig)
setupJestScreenshot()
jest.setTimeout(120000)
