import { DimensionValue, TouchableOpacityProps} from "react-native"
import { TouchableOpacity } from "react-native"
import { enumButtonStyle, getDefaultStyles, getStyles } from "./TextButton.styles"

interface ITextButtonProps extends TouchableOpacityProps {
    children: React.ReactNode,
    buttonStyle: enumButtonStyle,
    bgColor?: string
    isCircle?: boolean,
    width: DimensionValue,
    height: DimensionValue,
    color?: string,
    marginLeft?: number,
    marginRight?: number,
    marginTop?: number,
    marginBottom?: number,
    position?: boolean,
    top?: number,
    left?: number,
    right?: number,
    bottom?: number
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
        position = false,
        top,
        left,
        right,
        bottom,
        ...otherProps
    } = props
    
    const defaultStyles = getDefaultStyles(marginTop, marginBottom, marginLeft, marginRight,
                position, top, left, right, bottom, isCircle, width, height)
    const styles = getStyles(color, bgColor)

    return (
        <TouchableOpacity 
            {...otherProps} 
            style={{...defaultStyles.button, ...styles[buttonStyle]}}>
                {children}
        </TouchableOpacity>
    )
}