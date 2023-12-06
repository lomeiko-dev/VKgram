import {useEffect, useState} from 'react'
import { useTheme } from 'shared/lib/hooks/useTheme';
import { Text, enumTextStyles } from 'shared/ui/Text';

import json from 'shared/assets/json/description.json'

export const Info = () => {
    const { theme } = useTheme();
    const [description, setDescription] = useState<string>("");
      
    useEffect(() => {
        const printText = async (index: number) => {
            if (index < json.Description.length) {
              setDescription((prev) => prev + json.Description[index]);  
              await new Promise((resolve) => setTimeout(resolve, 20));
              printText(index + 1);
            }
          };

        printText(0);
      }, []);

    return(
        <Text
            marginLeft={10} marginRight={10} marginTop={30}
            color={theme.textColor} styleText={enumTextStyles.DESCRIPTION}>
            {description}
        </Text>
    )
}