import { UserForm } from "./UserForm"
import { UsersList } from "./UsersList"

export const MiFront = () => {

    return (
        <>
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="col">
                <div className="col">
                    <UserForm />
                </div>
                <div className="col">
                    <UsersList />
                </div>
            </div>
        </div>
        </>
    )
}