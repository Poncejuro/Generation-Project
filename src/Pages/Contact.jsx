import '../styles/Contact.css';

export const Contact = () => {

    return (
        <>
            <div className='container'>
                <div className='div-principal row align-items-center justify-content-center ' style={{ height: "100vh" }}>
                    <div className='col-6'>
                        <form>
                            <div className="mb-3 col-md-12">
                                <label for="exampleInputName" className="form-label">Name</label>
                                <input placeholder='Juanito Pérez' type="text" className="form-control" id="inputName" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3 col-md-12">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input placeholder='example@gmail.com' type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3 col-md-12">
                                <label for="exampleInputMessage" className="form-label">Message</label>
                                <input placeholder='Escribe aquí tu mensaje' type="text" className="form-control py-4" id="inputMessage" />
                            </div>
                            <div className="mb-3 col-md-12">
                                <label for="exampleInputTel" className="form-label">Telephone </label>
                                <input placeholder='5512345678' type="tel" className="form-control" id="inputTel" aria-describedby="emailHelp" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}