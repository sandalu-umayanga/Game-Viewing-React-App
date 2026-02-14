import { Group, InputAddon } from "@chakra-ui/react"
import * as React from "react"

export interface InputGroupProps extends React.ComponentProps<typeof Group> {
  startElement?: React.ReactNode
  endElement?: React.ReactNode
  children?: React.ReactNode
  startElementProps?: React.ComponentProps<typeof InputAddon>
  endElementProps?: React.ComponentProps<typeof InputAddon>
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
          <InputAddon pointerEvents="none" {...startElementProps}>
            {startElement}
          </InputAddon>
        )}
        {children}
        {endElement && (
          <InputAddon pointerEvents="none" {...endElementProps}>
            {endElement}
          </InputAddon>
        )}
      </Group>
    )
  },
)
