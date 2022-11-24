import React from 'react'

const SharedButton = ({ children, classes, handler }) => {
    return (
        <button
            onClick={handler}
            className={`hover:text-gray-100 bg-gradient-to-r from-neutral via-purple-900 to-neutral text-white ${classes}`}
        >
            {children}
        </button>
    )
}

export default SharedButton
