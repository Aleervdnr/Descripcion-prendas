export default function Input({name,data,onChange,styles}) {
  return (
    <div className={`flex flex-col ${styles}`}>
            <label htmlFor={name} className="capitalize">{name}</label>
            <input 
                className='w-full h-full text-black ' type="text" 
                name={name}
                value={data}
                onChange={onChange}
                maxLength={50}/>
    </div>
  )
}
