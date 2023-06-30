import './HeaderComponent.css'
const HeaderComponent = (props) => {
    return (
        <div className='DefaultContainer headerContainer shadow'>
            <form>
                <div className='header-form-container'>
                    <input className='form-control search-input w-50' type='text' placeholder='جستجو کنید' />
                    <input className='btn btn-dark submit-input ' type='submit' value={"جستجو"} />
                </div>
            </form>
        </div>
    );
}

export default HeaderComponent;