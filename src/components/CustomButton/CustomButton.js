import React from 'react'

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button className={`CustomButton ${isGoogleSignIn ? 'CustomButton--google-signin': ''} ${inverted ? 'CustomButton--inverted': ''}`} {...otherProps}>
    {children}
    </button>
)

export default CustomButton