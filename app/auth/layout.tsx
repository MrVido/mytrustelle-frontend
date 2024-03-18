import React from 'react'

const AuthLayout = ({
    children
 }: { 
    children:
    React.ReactNode 
}) => {
  return (
    <div className="h-full fle items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-300 to-blue-700">{children}</div>
  )
}
export default AuthLayout;