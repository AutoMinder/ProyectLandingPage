import classes from './AdminView.module.scss'


import { useUserConext } from '../../contexts/UserContext';
import UsersForm from '../../components/AdminForms/UsersForm/UsersForm';


import { Routes, Route, Navigate, useNavigate } from "react-router-dom";


const AdminView = () => {
    const navigate = useNavigate();
    const {login, register, user} = useUserConext();


    return(
        <div className={classes['container']}>
            <div className={classes['card']}>
                <Routes>
                    <Route path="new" element={<UsersForm/>}/>
                    
                    <Route path="*" element={<Navigate to="/NotFoundView_v2"/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default AdminView;