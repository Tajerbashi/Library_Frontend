import React from 'react'

export default function HeaderComponent() {
  return (
    <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4">کتابخانه</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">داشبورد</a></li>
        <li className="nav-item"><a href="#" className="nav-link">کتابخانه</a></li>
        <li className="nav-item"><a href="#" className="nav-link">نویسندگان</a></li>
        <li className="nav-item"><a href="#" className="nav-link">مترجمان</a></li>
        <li className="nav-item"><a href="#" className="nav-link">درمورد ما</a></li>
      </ul>
    </header>
  </div>
  )
}
