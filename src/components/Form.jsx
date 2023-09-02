import Billing from "./Billing"
import FormInput from "./FormInput"
import useFormContext from "../hooks/useFormContext"


const Form = () => {

    const {
        page,
        setPage,
        data,
        setData,
        canSubmit,
        title,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide
    } = useFormContext()
   
   
 
    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }
console.log(`button ${prevHide}`)
  
    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => setPage(prev => prev + 1)
     console.log(title)
    const content = (
        <form className="form flex-col" onSubmit={handleSubmit}>
            <header>
            <h2>{title[page]}</h2> 

            <div className="button-container">

<button type="button" className={`button ${prevHide}`} onClick={handlePrev} disabled={disablePrev}>Prev</button>

<button type="button" className={`button ${nextHide}`} onClick={handleNext} disabled={disableNext}>Next</button>

<button type="submit" className={`button ${submitHide}`} disabled={!canSubmit}>Submit</button>
</div>
            </header>



        <FormInput />

        </form>
    )

    return content
}
export default Form