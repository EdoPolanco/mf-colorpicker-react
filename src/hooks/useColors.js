import {useEffect, useState} from 'react'
import { getColorsList, getLastColor } from '../helpers/getColors'

export const useColors = () => {
    const [color, setColor] = useState( getLastColor())

    const [colorList, setColorList] = useState(getColorsList())
  
    const handleChangeColor = (e) => {
      setColor(e.target.value);
    }
  
    const handleSubmitSaveColor = (e) => {
        e.preventDefault();

        const orderColorList = [color, ...colorList];
        setColorList(orderColorList);
    }

    const handleDeleteColor = (colorToDelete) => {
      const updatedColorList = colorList.filter(item => item !== colorToDelete);
      setColorList(updatedColorList);
    };
    
    useEffect(() => {
      localStorage.setItem("colors", JSON.stringify(colorList))
    }, [colorList])
    
    return {color, colorList, handleChangeColor, handleSubmitSaveColor, handleDeleteColor}
}