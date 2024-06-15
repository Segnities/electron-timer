import style from '../assets/timer.module.css';

function Timer(): JSX.Element {
   return <div className={style['timer-container']}>
      <div className={style["circle"]}>
         <div className={style["wave"]}></div>
      </div>
   </div>
}

export default Timer;