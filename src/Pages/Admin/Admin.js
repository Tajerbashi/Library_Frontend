import Wrapper from '../../Components/HOC/wrapper';
import './Admin.css';

import Aside from './Container/Aside/Aside'
import Dashboard from './Container/Dashboard/Dashboard'

const Admin = (props) => {
    return (
        <Wrapper>
            <div className='DefaultContainer AdminPanel'>
                <Aside/>
                <Dashboard/>
            </div>
        </Wrapper>
    );
}

export default Admin;