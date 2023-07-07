const Wrapper = ({ children }) => {
  return (
    <div>
      <div style={{
        textAlign: "center",
        fontWeight: "900",
        color: "red"
      }}>MODERN CALCULATOR</div>
      <div className="wrapper">{children}</div>
    </div>
  )
}

export default Wrapper;
