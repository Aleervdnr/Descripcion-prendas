export default function Input({name,data,setData,styles}) {
  return (
    <div className={`flex flex-col ${styles}`}>
            <label htmlFor={name} className="capitalize">{name}</label>
            <input 
                className='w-full h-full text-black ' type="text" 
                id={name}
                value={data}
                onChange={(e)=>setData(e.target.value)}
                maxLength={50}/>
    </div>
  )
}
