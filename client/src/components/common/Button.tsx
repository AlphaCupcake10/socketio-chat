import { ReactNode } from 'react'

function Button(props: { className?: string, children?: ReactNode }) {
  return (
    <button className={`${props.className} p-3 bg-primary rounded-lg hover:scale-105 duration-100 active:scale-95`}>
        {props.children}
    </button>
  )
}

export default Button