import React from 'react'

const ColorPicker = ({color, handleChangeColor, handleSubmitSaveColor}) => {
  return (
   <form>
    <input type="color" 
    className='form-control' 
    style={{
      width: "100%",
      height: "250px",
    }}
    title='Seleccione un color ...'
    value={color}
    onChange={handleChangeColor}
       data-bs-toggle="tooltip" data-bs-placement="right"
       data-bs-title="Para seleccionar un color puedes usar el tintero que aparece a la hora de apretar el recuadro de color."
    />
    <div className='text-center'>
      <h2 className='mt-3 fw-bolder' style={{
        color: color
      }}>
        <div style={{
          width: "20px",
          height: "20px",
          background: color,
          display: "inline-block",
          margin: "0 1rem",
          borderRadius: "100px",
        }}>

        </div>
        {color}
      <button type='submit' 
              className='btn btn-success mr-2' 
              style={{display: "inline-block", margin: "0 1rem"}} 
              onClick={(event) => handleSubmitSaveColor(event)} >Guardar color</button>
      </h2>

    </div>
   </form>
  )
}

export default ColorPicker