const Footer = () => {
  const today = new Date();
  return (
    <div className="Footer">
      All rights reserved © Adeshina Ibrahim {today.getFullYear()}
    </div>
  )
}

export default Footer