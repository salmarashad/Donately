import React from 'react';
import Select from 'react-select';

function Dropdown(){
    const colourOptions = [
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' },
        { value: 'green', label: 'Green' },
        { value: 'purple', label: 'Purple' }
    ]

    const colourStyles = {
        control: (styles, state) => ({
            ...styles,
            width: 200,
            margin: 0,
            marginLeft: 0,
            fontSize: 12,
            backgroundColor: 'white',
            border: state.isFocused ? "1px solid #90a0a0" : 0,
            boxShadow: state.isFocused ? "0 0 0 1px #90a0a0" : 0,
            '&:hover': {
                border: state.isFocused ? "1px solid #90a0a0" : 0
             }
        }),
        option: (styles, state) => ({
            ...styles,
            fontSize: 12,
            width: 200,
            backgroundColor: state.isFocused ? "#d9dede" : "white",
            ':active': {
                backgroundColor: "#b0bcbc"
            }
        }),
        multiValue: (styles) => {
            return {
              ...styles,
            //   backgroundColor: 
            };
          },
        multiValueLabel: (styles) => ({
            ...styles,
            // color: 
          }),
        multiValueRemove: (styles) => ({
            ...styles,
            ':hover': {
              backgroundColor: "#b0b0b0",
            //   color: '#888888',
            },
        }),
      }

    return (
        <Select
            isMulti
            name="colors"
            options={colourOptions}
            className="basic-multi-select w-[200px]"
            classNamePrefix="select"
            styles={colourStyles}
        />
    )
}

export default Dropdown;