import {useEffect, useState} from 'react'
import { getColorsList, getLastColor } from '../helpers/getColors'

export const useColors = () => {
    const [color, setColor] = useState( getLastColor())

    const [colorList, setColorList] = useState(getColorsList())
  
    const handleChangeColor = (e) => {
      setColor(e.target.value);
    }
  
    const handleSubmitButtonColor = (e, buttonType) => {
        e.preventDefault();

        if (buttonType === 'save') {
            const orderColorList = [color, ...colorList];
            setColorList(orderColorList);
            
        } else if (buttonType === 'delete') {
            const updatedColorList = colorList.filter(item => item !== color);
            setColorList(updatedColorList);
        }
  
  
    }

    useEffect(() => {
      localStorage.setItem("colors", JSON.stringify(colorList))
    }, [colorList])
    
    return {color, colorList, handleChangeColor, handleSubmitButtonColor}
}