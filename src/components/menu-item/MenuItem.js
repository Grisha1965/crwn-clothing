import React from "react"
import { Link } from "react-router-dom"
import "./MenuItem.scss"

const MenuItem = ({ title, imageUrl, size, history, linkUrl }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <Link to={`${linkUrl}`}>
          <h1 className="title">{title.toUpperCase()}</h1>
        </Link>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem
