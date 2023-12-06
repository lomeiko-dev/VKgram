import { ImageProps } from "react-native"
import { DimensionValue } from "react-native"
import { ImageStyle } from "react-native"
import {Image as ImageNative} from "react-native"
import { enumImageStyle, getImageStyles } from "./Image.styles"

interface IImageProps extends ImageProps {
    imageStyle?: enumImageStyle,
    stylesSheet?: ImageStyle,
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
}

export const Image: React.FC<IImageProps> = (props) => {
    const {
        imageStyle = enumImageStyle.RICTANGLE,
        stylesSheet,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        ...otherProps
    } = props

    const styles = getImageStyles(otherProps.width, otherProps.height, 
        marginTop, marginBottom, marginLeft, marginRight)

    return(
        <ImageNative
            {...otherProps}
            style={{...styles.imgage, ...stylesSheet, ...styles[imageStyle]}}
        />
    )
}