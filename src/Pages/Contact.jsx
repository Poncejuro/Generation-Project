
import '../styles/Contact.css';


export const Contact = () => {

    return (
        <>
            <div className='container'>
                <div className='div-principal row align-items-center justify-content-center ' style={{ height: "100vh" }}>
                    <div className='col-6'>
                        <form className='needs-validation'>
                            <div className="mb-3 col-md-12">
                                <label htmlFor ="validationCustom01" className="form-label">Name</label>
                                <input placeholder='Juanito Pérez' type="text" className="form-control" id="validationCustom01" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3 col-md-12">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input placeholder='example@gmail.com' type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3 col-md-12">
                                <label htmlFor="exampleInputMessage" className="form-label">Message</label>
                                <input placeholder='Escribe aquí tu mensaje' type="text" className="form-control py-4" id="inputMessage" />
                            </div>
                            <div className="mb-3 col-md-12">
                                <label htmlFor="exampleInputTel" className="form-label">Telephone </label>
                                <input placeholder='5512345678' type="tel" className="form-control" id="inputTel" aria-describedby="emailHelp" />
                            </div>

                            <button className="btn btn-primary" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}