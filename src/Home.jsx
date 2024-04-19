import { useAuth } from "./assets/auth/hooks/useAuth";
import { LoginPage } from "./assets/auth/pages/LoginPage";

export const Home = () => {

    const { login, handlerLogin, handlerLogout } = useAuth ();
    console.log ("login: ", login);

    const onSubmit = (event) => {
        event.preventDefault (); //esto es para que no se recargue la pagian cuandose pulsa el boton
     /*   if (!username || !password) {
            Swal.fire ('Error de validacion', 'Username y ppasword requeridos', 'error');
        }*/
        //aca implementamos el login
        //handlerLogin ({username, password});
        handlerLogout ();
        //reiniciar los datos del formulario
        //setLoginForm (initialLoginForm);
    }



    return (
        <>
            mi home
            {
            login.isAuth
                ? (
                    <>
                        Esta logeado
                        <form onSubmit={ onSubmit }>
                            <div className="modal-footer">
                                <button  className="btn btn-primary"
                                    type="submit">
                                    Logout
                                </button>
                            </div>
                        </form>
                    </>
                )
                : <>No esta logeado
                    <LoginPage handlerLogin={ handlerLogin }/>
                </>
            }
            {/*<UsersPage />*/}

        </>
    )
}