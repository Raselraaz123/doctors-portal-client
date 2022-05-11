
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from 'date-fns';

const AppointmentBanner = ({ date, setDate }) => {
  
  return (
    <section
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      class="hero min-h-screen "
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
       
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;