import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@pesto-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Tesing the element Box</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
