"use client"

import { Menu as ChakraMenu, Portal } from "@chakra-ui/react"
import * as React from "react"

interface MenuContentProps extends ChakraMenu.ContentProps {
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
}

export const MenuContent = React.forwardRef<HTMLDivElement, MenuContentProps>(
  function MenuContent(props, ref) {
    const { portalled = true, portalRef, ...rest } = props
    return (
      <Portal disabled={!portalled} container={portalRef}>
        <ChakraMenu.Positioner>
          <ChakraMenu.Content ref={ref} {...rest} />
        </ChakraMenu.Positioner>
      </Portal>
    )
  },
)

export const MenuArrow = React.forwardRef<HTMLDivElement, ChakraMenu.ArrowProps>(
  function MenuArrow(props, ref) {
    return (
      <ChakraMenu.Arrow ref={ref} {...props}>
        <ChakraMenu.ArrowTip />
      </ChakraMenu.Arrow>
    )
  },
)

export const MenuCheckboxItem = React.forwardRef<
  HTMLDivElement,
  ChakraMenu.CheckboxItemProps
>(function MenuCheckboxItem(props, ref) {
  return (
    <ChakraMenu.CheckboxItem ref={ref} {...props}>
      <ChakraMenu.ItemIndicator hidden={false}>
      </ChakraMenu.ItemIndicator>
      {props.children}
    </ChakraMenu.CheckboxItem>
  )
})

export const MenuRadioItem = React.forwardRef<
  HTMLDivElement,
  ChakraMenu.RadioItemProps
>(function MenuRadioItem(props, ref) {
  const { children, ...rest } = props
  return (
    <ChakraMenu.RadioItem ref={ref} {...rest}>
      <ChakraMenu.ItemIndicator hidden={false}>
      </ChakraMenu.ItemIndicator>
      {children}
    </ChakraMenu.RadioItem>
  )
})

export const MenuItemGroup = React.forwardRef<
  HTMLDivElement,
  ChakraMenu.ItemGroupProps
>(function MenuItemGroup(props, ref) {
  const { title, children, ...rest } = props
  return (
    <ChakraMenu.ItemGroup ref={ref} {...rest}>
      {title && (
        <ChakraMenu.ItemGroupLabel userSelect="none">
          {title}
        </ChakraMenu.ItemGroupLabel>
      )}
      {children}
    </ChakraMenu.ItemGroup>
  )
})

export interface MenuTriggerItemProps extends ChakraMenu.TriggerItemProps {
  startIcon?: React.ReactNode
}

export const MenuTriggerItem = React.forwardRef<
  HTMLDivElement,
  MenuTriggerItemProps
>(function MenuTriggerItem(props, ref) {
  const { startIcon, children, ...rest } = props
  return (
    <ChakraMenu.TriggerItem ref={ref} {...rest}>
      {startIcon}
      {children}
    </ChakraMenu.TriggerItem>
  )
})

export const MenuRoot = ChakraMenu.Root
export const MenuTrigger = ChakraMenu.Trigger
export const MenuItem = ChakraMenu.Item
export const MenuItemText = ChakraMenu.ItemText
export const MenuContextTrigger = ChakraMenu.ContextTrigger
