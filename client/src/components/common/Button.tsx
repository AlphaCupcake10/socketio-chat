import { ReactNode } from 'react'

function Button(props: { className?: string, children?: ReactNode , disabled?: boolean}) {
  return (
    <button disabled={props.disabled} className={`${props.className} p-3 bg-primary rounded-lg disabled:cursor-not-allowed hover:scale-[1.01] duration-100  active:scale-[.99] disabled:scale-100 disabled:opacity-50`}>
        {props.children}
    </button>
  )
}

export default Button