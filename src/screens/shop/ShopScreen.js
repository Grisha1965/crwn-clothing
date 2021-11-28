import React, { Component } from "react"
import PreviewCollection from "../../components/preview-collection/PreviewCollection"
import SHOP_DATA from "./data"

class ShopScreen extends Component {
  constructor(props) {
    super()

    this.state = {
      collections: SHOP_DATA,
    }
  }

  render() {
    const { collections } = this.state
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionsProps }) => (
          <PreviewCollection key={id} {...otherCollectionsProps} />
        ))}
      </div>
    )
  }
}

export default ShopScreen
