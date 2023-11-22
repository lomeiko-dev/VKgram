import { TouchableOpacityProps } from "react-native"
import { TouchableOpacity } from "react-native"
import { enumButtonStyle, getDefaultStyles, getStyles } from "./TextButton.styles"

interface ITextButtonProps extends TouchableOpacityProps {
    children: React.ReactNode,
    buttonStyle: enumButtonStyle,
    bgColor?: string
    isCircle?: boolean,
    width: number,
    height: number,
    color?: string,
    marginLeft?: number,
    marginRight?: number,
    marginTop?: number,
    marginBottom?: number,
}

export const TextButton: React.FC<ITextButtonProps> = (props) => {
    const {
        children,
        buttonStyle,
        bgColor,
        isCircle,
        width,
        height,
        color,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom,
        ...otherProps
    } = props
    
    const defaultStyles = getDefaultStyles(marginTop, marginBottom, marginLeft, marginRight)
    const styles = getStyles(width, height, color, bgColor, isCircle)

    return (
        <TouchableOpacity 
            {...otherProps} 
            style={{...defaultStyles.button, ...styles[buttonStyle]}}>
                {children}
        </TouchableOpacity>
    )
}