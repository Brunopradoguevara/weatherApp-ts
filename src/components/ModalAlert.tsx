import { Prop } from "./types/ModalAlert.types"

const ModalAlert = ({isAlertOpen,setIsAlertOpen}:Prop) => {

    const handleAlert = ()=>{
      setIsAlertOpen('alert--close')
    }
  
    return (
      <div className={`flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-50  ${isAlertOpen === "alert--close" ? "hidden":""}`}>
          <div className='max-w-xs w-3/4 bg-white border-none rounded-2xl p-4'> 
          <div className="grid justify-center self-center"> 
          <i className='bx bx-error-alt text-8xl text-red-500 m-auto mb-4'></i>
            <span className="text-xl font-bold text-center mb-4 leading-6	">Acceso a la ubicación denegado, utiliza la barra de búsqueda manual.</span>
            <button onClick={handleAlert} className="btn--close_modal text-xl font-bold w-3/5 m-auto py-3 px-2 rounded-xl border-none text-white bg-teal-500 transition ease-in-out delay-100 hover:bg-teal-700">Aceptar</button>
          </div>
        </div>
      </div>
    )
  }
  
  export default ModalAlert