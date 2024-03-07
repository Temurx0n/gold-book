import logo from './assets/images/image 1.svg';
import './App.css';
import vector from './assets/images/Vector 1.png';
import book from './assets/images/Untitled-1 1.png'
import mijoz1 from './assets/images/4.png';
import mijoz2 from './assets/images/Untitled-1.png';
import mijoz3 from './assets/images/23.png';
import mijoz4 from './assets/images/6 1.png';
import book2 from './assets/images/5066392 copy 1.png';
import book3 from './assets/images/Untitled-1 2.png';
import minbook from './assets/images/487.png';
import minbook1 from './assets/images/48.png';
import minbook2 from './assets/images/56.png';
import minbook3 from './assets/images/225.png';
import minbook4 from './assets/images/23 (1).png';
import bigbook from './assets/images/25.png';
import video from './assets/images/image 3.png';
import video1 from './assets/images/image 4.png';
import video2 from './assets/images/image 5.png';
import video3 from './assets/images/image 6.png';

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="" />
        <div className="a_group">
          <a href="#" className="header_a">Asosiy</a>
          <a href="#" className="header_a">Biz haqimizda</a>
          <a href="#" className="header_a">Kitoblarimiz</a>
          <a href="#" className="header_a">Aloqa</a>
          <a href="#" className="header_a">Buyurtma berish</a>
        </div>

      </header>
      <section className="box1">
        <h1 className="box1_h">
          Eshitish orqali 90 kunda
          Ingliz tilini o‘rganing yoki
          pulingizni qaytarib oling!
        </h1><br />
        <p className="box1_p">Gold Book kitoblari – maxsus 40 ta darslar yig‘indisidan
          tashkil topgan to‘plam bo‘lib, faqatgina eshitish orqali
          3 oy ichida sizning ingliz tilini o‘rganishingizga eng
          kerakli va asosiy bilimlarni o‘rganishingizni ta’minlaydi.</p>
        <div className="books">
          <img src={vector} alt="" className="vector" />
          <img src={book} alt="" className="book" />
        </div>
        <br />
        <button className="box1_btn">
          Buyurtma berish
        </button>
        <div className="mijoz">
          <img src={mijoz1} alt="" />
          <img src={mijoz2} alt="" />
          <img src={mijoz3} alt="" />
          <img src={mijoz4} alt="" /><br />
          <div className="mijoz_h"><br />
            <h2 className='mijoz_h4'>1,000 +</h2>
            <p className='mijoz_p'>mijozlar tanlovi</p>
          </div>
        </div>

      </section>


      <section className="box2">
        <h1 className="box2_h">
          Biz haqimizda
        </h1>
        <div className="box2_div">
          <div className="box2_right">
            <b><p className='right_p'>Xush kelibsiz!br
              <br /><br />
              "Gold book" kompaniyasi sizga chet tillarini mustaqil
              o‘rganish uchun qiziqarli sayohatga sho‘ng‘ish imkoniyatini
              taklif qiladi!
              <br /><br />
              "Gold book" jamoasi sizning o‘quv jarayoningizni
              qulay va qiziqarli qilish niyatida. Eshitish orqali samarali va
              sodda usulda tarkib topgan kitoblar bilan til o‘rganish
              zavqli jarayonga aylanmoqda.</p></b><br /><br /><br />
            <b><p className='right_p1'>Bizning kitoblarimiz tillarga bo‘lgan muhabbatingizni
              yanada alangalatgan holda sizning qulayligingiz haqida
              qayg‘uradi. Sizning darajangizdan qat’i nazar — boshlang‘ichdan
              ilg‘orgacha-bu yerda sizni ilhomlantiradigan noodatiy uslublar mavjud.
              Sizning til o‘rganish bilan bog‘liq maqsadlaringizga erishishda yordam
              beradigan materiallarni ayni damda "Gold book" kitoblaridan topasiz.
              <br /><br />
              Biz ta’lim kuchiga ishonamiz va har bir inson yangi tilni o‘rganishga qodir
              ekanligiga aminmiz. Shunday qilib, biz sizga eng yaxshi manbalarni
              taqdim etish uchun yetakchi mualliflar va nashriyotlarning kitoblaridan
              foydalandik. Biz bilan bor yog‘i 3 oyda samarali usullar orqali, sifatli
              bilimga ega bo‘lasiz. Siz uchun ingliz tili, turk tili, rus tillari hamda
              "EASY IELTS " kitoblarni sizga taqdim etamiz.
              <br /><br />
              "Gold book" kitoblari bilan o‘zingiz xohlagan tilni tanlang. Va til
              cho‘qqisini zabt eshishingizda sizga kitoblarimiz asqatadi.
              <br /><br />
              Bilimni qadrlaydiganlar va kitobsevarlar uchun maxsus qo‘llanma!</p></b>
          </div>
          <img src={book2} alt="" className='box2_img' /></div>
      </section>
      <section className="box3">
        <h1 className='box3_h1'>Kitoblarimiz
        </h1>
        <div className="a">
          <div className="box3_text">
            <h1 className="box3_h">
              GoldBook kitoblari
            </h1>
            <p className="box3_p">Ayni shu vaziyatda ingliz tilini
              3 oyda 0 dan o‘rganish uchun
              Gold Book kitoblarini tanlashadi.
              Chunki ushbu kitob eshitib
              o‘rganish uchun juda qulay</p>


            <button className="box1_btn abtn">
              Kuproq malumot
            </button>
          </div>
          <div className="books">
            <img src={book3} alt="" className="book3" />
          </div>
        </div>
      </section><br /><br /><br />
      <div className="box4">
        <div className="minbook">
          <img src={minbook} alt="" className="min_img" /><br /><br />
          <img src={minbook1} alt="" className="min_img" /><br /><br />
          <img src={minbook2} alt="" className="min_img" /><br /><br />
          <img src={minbook3} alt="" className="min_img" /><br /><br />
          <img src={minbook4} alt="" className="min_img" /><br /><br />
        </div>
        <img src={bigbook} alt="" className='bigbook' />
        <div className="box3_text">
          <h1 className="box4_h">
            Easy IELTS to‘plami
          </h1><br />
          <p className="box3_p">
            6 ta to‘plamdan iborat. 4 ta asosiy,
            2 ta qo‘shimcha. Bu kitoblar orqali
            oz fursatda chuqurroq va tezroq
            natijaga chiqa olasiz</p>


          <button className="box1_btn abtn">
            Kuproq malumot
          </button>
        </div>
      </div>
      <section className="video_box">
        <h1 className="video_h">
        Mijozlarning fikrlari
        </h1>
        <div className="video_group">
         <img src={video} alt=""  className="video" />
         <img src={video1} alt="" className="video" />
         <img src={video2} alt="" className="video" />
         <img src={video3} alt="" className="video" />
        </div>
        <div className="input_group">
          <input type="text" className="inputs"  />
          <input type="text" className="inputs" />
        </div>
      </section>

    </div>
  );
}

export default App;
