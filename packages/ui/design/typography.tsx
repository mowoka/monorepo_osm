import { ComponentProps, forwardRef } from 'react'
import { Text as NativeText } from 'react-native'
import { styled, StyledProps } from 'nativewind'
import { cn } from '@repo/ui/libs/utils'
import React from 'react'

export const BasedText = styled(NativeText)

export type TextVariant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'text'
    | 'smallText'
    | 'sstWeb'
    | 'sstMobile'
export type TextWeight = 'bold' | 'semibold' | 'medium' | 'regular'

const textStyle: Record<TextVariant, Partial<Record<TextWeight, string>>> = {
    h1: {
        bold: 'text-3xl',
        semibold: 'text-3xl',
        medium: 'text-3xl',
        regular: 'text-3xl',
    },
    h2: {
        bold: 'text-2xl',
        semibold: 'text-2xl',
        medium: 'text-2xl',
        regular: 'text-2xl',
    },
    h3: {
        bold: 'text-xl',
        semibold: 'text-xl',
        medium: 'text-xl',
        regular: 'text-xl',
    },
    h4: {
        bold: 'text-lg',
        semibold: 'text-lg',
        medium: 'text-lg',
        regular: 'text-lg leading-[24px]',
    },
    text: {
        bold: 'text-md',
        semibold: 'text-md',
        medium: 'text-md',
        regular: 'text-md',
    },
    smallText: {
        bold: 'text-base',
        semibold: 'text-base',
        medium: 'text-base',
        regular: 'text-base',
    },
    sstWeb: {
        bold: 'text-sm',
        semibold: 'text-sm',
        medium: 'text-sm',
        regular: 'text-sm',
    },
    sstMobile: {
        bold: 'text-sm',
        semibold: 'text-sm',
        medium: 'text-sm',
        regular: 'text-sm',
    },
}

interface ITextProps extends ComponentProps<typeof BasedText> {
    className?: string
    variant?: TextVariant
    weight?: TextWeight
    children: React.ReactNode
}

export const Text = forwardRef<NativeText, StyledProps<ITextProps>>(
    function Text(
        { className, children, variant = 'text', weight = 'regular', ...props },
        ref
    ) {
        const variantStyle = textStyle[variant]?.[weight] || ''
        return (
            <BasedText
                className={cn(variantStyle, className)}
                ref={ref}
                {...props}
            >
                {children}
            </BasedText>
        )
    }
)
