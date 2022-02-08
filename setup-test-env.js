import '@testing-library/jest-dom/extend-expect'
import { setGlobalConfig } from '@storybook/testing-react'
import * as globalStorybookConfig from './.storybook/preview'

setGlobalConfig(globalStorybookConfig)
