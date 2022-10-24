import myPictures from '../herophoto.png'

export default function Hero () {
    return (
        <>
          <div className='hero'>
             <img className='heropictures' src={myPictures} />
             <div className='herotext'>
             <h1 className='heroheader'>Online Experiences</h1>
             <p className='heroparagraph'>Join unique interactive activities led by<br/> one-of-a-kind hosts—all without leaving<br/> home.</p>
             </div>
          </div>
        </>
    )
}