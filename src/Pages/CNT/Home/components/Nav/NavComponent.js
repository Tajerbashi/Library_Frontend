import React from 'react'
import './style.css'
export default function NavComponent() {
  const isAdmin = false;
  return (
      <nav id='navbar' className='container-fluid d-flex flex-row justify-content-between '>
        <div className='d-flex flex-row'>
          {/* <div id='menu' className='mx-5'>منو</div> */}
          <div className='list-container-tk'>
            <ul className='list-tk'>
              <li className='list-item-tk'><a href='/TK/app-Home'>خانه</a></li>
              <li className='list-item-tk'><a href='/TK/app-dashboard'>داشبورد</a></li>
              <li className='list-item-tk'><a href='/TK/app-products'>محصولات</a></li>
              <li className='list-item-tk'><a href='/TK/app-library'>کتابخانه</a></li>
              <li className='list-item-tk'><a href='/TK/app-authors'>نویسنده گان</a></li>
              <li className='list-item-tk'><a href='/TK/app-chat'>گفتگو</a></li>
            </ul>
          </div>
        </div>
        <div className='list-container-tk'>
          <ul className='list-tk'>
            <li className='list-item-tk'><a href='/TK/app-user-card'><i className='fa fa-trash'></i><span>سبد خرید</span></a></li>
            <li className='list-item-tk'><a href='/TK/app-user'><i className='fa fa-user'></i><span>کاربر</span></a></li>
            {
              isAdmin && isAdmin ? (<li className='list-item-tk'><a href='/TK/app-admin-panel'><i className='fa fa-users'></i><span>ادمین</span></a></li>) : ""
            }
          </ul>
        </div>
      </nav>
  )
}
