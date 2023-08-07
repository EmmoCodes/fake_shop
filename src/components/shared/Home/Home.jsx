import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section>
        <h1>Welcome to the shop!</h1>
        <Link to={'/shop'}>to Shop</Link>
      </section>
      <section>
        <label htmlFor="first_name"></label>
        <input type="text" name="first_name" id="first_name" placeholder="first name" />
        <label htmlFor="last_name"></label>
        <input type="text" name="last_name" id="last_name" placeholder="last name" />
        <label htmlFor="eail"></label>
        <input type="email" name="email" id="email" placeholder="email" />
      </section>
    </>
  )
}

export default Home
