import Logo from '../components/assets/img/logo.png'

const Title = () => {
  return (
    <h1 className='logo text-5xl md:text-8xl text-white text-center font-bold font-meditation flex justify-center'>
      <img src={Logo} alt="" className="mr-2 w-[50px] md:w-[100px]"/>
      Meditation Break
    </h1>
  )
}

export default Title
