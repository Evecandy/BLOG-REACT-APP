function Footer() {
  const currentDate = new Date();
  const DateString = currentDate.toDateString();

  return (
    <div>
      <p>Made by Eve Candy</p>
      <p>{DateString}</p>
    </div>
  );
}

export default Footer;
