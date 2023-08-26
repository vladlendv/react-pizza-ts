import React from "react"
import ContentLoader from "react-content-loader"

const PizzaLoader = (props) => (
  <ContentLoader
    speed={2}
    width={292}
    height={482}
    viewBox="0 0 292 482"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="144" cy="125" r="118" />
    <rect x="61" y="272" rx="0" ry="0" width="170" height="14" />
    <rect x="0" y="313" rx="0" ry="0" width="292" height="90" />
    <rect x="150" y="423" rx="19" ry="19" width="140" height="40" />
    <rect x="1" y="430" rx="0" ry="0" width="95" height="20" />
  </ContentLoader>
)

export default PizzaLoader
