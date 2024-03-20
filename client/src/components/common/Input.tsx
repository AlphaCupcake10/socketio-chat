function Input(props:{className?:string,label?:string,value?:string,onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void,placeholder?:string})
{
  return (
    <div className={`${props.className}`}>
        {
          props.label && <label className="block mb-2">{props.label}</label>
        }
        <input placeholder={props.placeholder} value={props.value} onChange={props.onChange} type="text" className={`w-full bg-background2 outline outline-1 outline-text/10 p-3 rounded-lg focus:outline-primary duration-300`} />
    </div>
  )
}

export default Input