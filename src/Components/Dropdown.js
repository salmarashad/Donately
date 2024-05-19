import React from 'react';
import Select from 'react-select';

function Dropdown({options, onChange, multi}){
    const filterStyles = {
        control: (styles, state) => ({
            ...styles,
            width: 200,
            margin: 0,
            marginLeft: 0,
            fontSize: 12,
            backgroundColor: '#f3f4f6',
            border: state.isFocused ? "1px solid #90a0a0" : 0,
            boxShadow: state.isFocused ? "0 0 0 1px #90a0a0" : 0,
            '&:hover': {
                border: state.isFocused ? "1px solid #90a0a0" : 0
             }
        }),
        option: (styles, state) => ({
            ...styles,
            fontSize: 12,
            maxWidth: 200,
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

    const defaultStyles = {
        control: (styles, state) => ({
            ...styles,
            width: "100%",
            margin: 0,
            marginLeft: 0,
            fontSize: 12,
            backgroundColor: '#f3f4f6',
            border: state.isFocused ? "1px solid #90a0a0" : 0,
            boxShadow: state.isFocused ? "0 0 0 1px #90a0a0" : 0,
            '&:hover': {
                border: state.isFocused ? "1px solid #90a0a0" : 0
             },
             marginBottom: "8px"
        }),
        option: (styles, state) => ({
            ...styles,
            fontSize: 12,
            width: "100%",
            backgroundColor: state.isFocused ? "#d9dede" : "white",
            ':active': {
                backgroundColor: "#b0bcbc"
            },
            color: "#333333"
        })
      }

    return (
        <>
          {multi === true ?
            <Select
                isMulti
                name="colors"
                options={options}
                className="basic-multi-select w-[200px]"
                classNamePrefix="select"
                styles={filterStyles}
                onChange={onChange}
                menuPlacement="auto"
            />
            :
            <Select
                name="colors"
                options={options}
                classNamePrefix="select"
                styles={defaultStyles}
                onChange={onChange}
                menuPlacement="auto"
            />
          }
        </>
    )
}

export default Dropdown;