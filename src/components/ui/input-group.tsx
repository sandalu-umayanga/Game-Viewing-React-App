import type { InputProps } from "@chakra-ui/react"
import { Group, Input as ChakraInput } from "@chakra-ui/react"
import * as React from "react"

export interface InputGroupProps extends React.ComponentProps<typeof Group> {
  startElement?: React.ReactNode
  endElement?: React.ReactNode
  children?: React.ReactNode
  startElementProps?: React.ComponentProps<typeof ChakraInput.Addon>
  endElementProps?: React.ComponentProps<typeof ChakraInput.Addon>
}

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  function InputGroup(props, ref) {
    const {
      startElement,
      startElementProps,
      endElement,
      endElementProps,
      children,
      ...rest
    } = props

    return (
      <Group ref={ref} {...rest}>
        {startElement && (
          <ChakraInput.Addon pointerEvents="none" {...startElementProps}>
            {startElement}
          </ChakraInput.Addon>
        )}
        {children}
        {endElement && (
          <ChakraInput.Addon pointerEvents="none" {...endElementProps}>
            {endElement}
          </ChakraInput.Addon>
        )}
      </Group>
    )
  },
)
