import './Aside.css';
import UL from '../../../../Components/UI/UL/UL';
import LI from '../../../../Components/UI/LI/LI';

const Aside = () => {
    return (
        <div className="AsideContainer">
            <UL>
                <LI link={''}>داشبورد</LI>
                <LI link={'./Home'}>خانه</LI>
                <LI link={'./Products'}>محصولات</LI>
            </UL>
        </div>
    );
}

export default Aside;