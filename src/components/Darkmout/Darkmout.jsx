
import cx from 'classnames'


import "./Darkmout.scss";

const Darkmout = ({ rejim1, rejim2, rounded = false }) => {

    const sliderCX = cx('slider', {
        'rounded' : rounded
    })


  return (
    <div className="dark">
      <p className='dark-title'>Tungi rejim</p>
      <label className="switch">
          <input type="checkbox" name="" id="" />
          <span className={sliderCX}/>
      </label>
    </div>
  );
};

export default Darkmout;
