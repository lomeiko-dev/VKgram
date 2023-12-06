import { DimensionValue, TouchableOpacityProps, StyleProp, ViewStyle, TextStyle} from "react-native"
import { TouchableOpacity, Text } from "react-native"
import { enumButtonStyle, getDefaultStyles, getStyles } from "./TextButton.styles"
import { useTheme } from "shared/lib/hooks/useTheme"

interface ITextButtonProps extends TouchableOpacityProps {
    children?: React.ReactNode,
    postChildren?: React.ReactNode,
    text?: string,
    buttonStyle: enumButtonStyle,
    styleSheet?: ViewStyle,
    bgColor?: string
    isCircle?: boolean,
    width: DimensionValue,
    height: DimensionValue,
    color?: string,
    fontSize?: number,
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
        postChildren,
        text,
        buttonStyle,
        styleSheet,
        bgColor,
        isCircle,
        width,
        height,
        color,
        fontSize,
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

    const {theme} = useTheme();
    
    const defaultStyles = getDefaultStyles(marginTop, marginBottom, marginLeft, marginRight,
                position, top, left, right, bottom, isCircle, width, height)

    const styles = getStyles(color, bgColor, fontSize)

    const stylesButton: StyleProp<ViewStyle> = {
        backgroundColor: styles[buttonStyle].backgroundColor,
    }
    const stylesText: StyleProp<TextStyle> = {
        color: buttonStyle === enumButtonStyle.NONE ? theme.textColor : styles[buttonStyle].color,
        fontSize: styles[buttonStyle].fontSize,
        marginLeft: children !== undefined ? 15 : 0,
        marginRight: postChildren !== undefined ? 15 : 0,
        fontWeight: styles[buttonStyle].fontWeight,
    }

    return (
        <TouchableOpacity 
            {...otherProps} 
            style={{...defaultStyles.button, ...stylesButton, ...styleSheet}}>
                {children && children}
                {text && <Text style={stylesText}>{text}</Text>}
                {postChildren && postChildren}
        </TouchableOpacity>
    )
}