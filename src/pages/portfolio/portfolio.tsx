import DefaultLayout from "../../layout/DefaultLayout";
import shapeR from "./../../images/shape-right.png"
import shapeL from "./../../images/shape-left.png"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";

import img1 from './../../images/slide-1.jpg'
import img2 from './../../images/slide-2.jpg'
import img3 from './../../images/slide-3.jpg'
import img4 from './../../images/slide-4.jpg'
import img5 from './../../images/slide-5.jpg'
import img6 from './../../images/slide-6.jpg'
import img7 from './../../images/sllide-7.jpg'
import img8 from './../../images/slide-8.jpg'

const Portfolio = () => {
    return (
        <DefaultLayout>
            <img src={shapeR} className="port-shape-right" />
            <section className="gallery">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={"auto"}
                    freeMode={true}
                    autoplay={{ delay: 700 }}
                    loop={true}
                    speed={1500}
                    centeredSlides={true}
                    className="mySwiper"
                    modules={[FreeMode, Autoplay]}
                >
                    <SwiperSlide>
                        <a href="https://www.behance.net/gallery/209692497/plant-store?tracking_source=project_owner_other_projects" target="_blank"><img src={img8} alt="" /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.behance.net/gallery/209390531/MENU?tracking_source=project_owner_other_projects" target="_blank"><img src={img7} alt="" /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.behance.net/gallery/209387947/CAR-OFFERS" target="_blank"><img src={img1} alt="" /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.behance.net/gallery/209380005/social-media-posts?tracking_source=project_owner_other_projects" target="_blank"><img src={img2} alt="" /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.behance.net/gallery/209382545/NEW-COLLECTION" target="_blank"><img src={img3} alt="" /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.behance.net/gallery/209386707/PERFUME" target="_blank"><img src={img4} alt="" /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.behance.net/gallery/209380005/social-media-posts" target="_blank"><img src={img5} alt="" /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.behance.net/gallery/209387181/SOCAL-MEDIA-POST" target="_blank"><img src={img6} alt="" /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.behance.net/gallery/209692497/plant-store?tracking_source=project_owner_other_projects" target="_blank"><img src={img8} alt="" /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.behance.net/gallery/209390531/MENU?tracking_source=project_owner_other_projects" target="_blank"><img src={img7} alt="" /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.behance.net/gallery/209387947/CAR-OFFERS" target="_blank"><img src={img1} alt="" /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.behance.net/gallery/209380005/social-media-posts?tracking_source=project_owner_other_projects" target="_blank"><img src={img2} alt="" /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.behance.net/gallery/209382545/NEW-COLLECTION" target="_blank"><img src={img3} alt="" /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.behance.net/gallery/209386707/PERFUME" target="_blank"><img src={img4} alt="" /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.behance.net/gallery/209380005/social-media-posts" target="_blank"><img src={img5} alt="" /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.behance.net/gallery/209387181/SOCAL-MEDIA-POST" target="_blank"><img src={img6} alt="" /></a>
                    </SwiperSlide>
                </Swiper>

            </section>
            <div className="port-social">
                <a href="https://www.instagram.com/judyf.a205"  target="_blank">

                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CBBBB3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M16.5 7.5l0 .01" />
                    </svg>          </a>
                <a href="https://www.behance.net/judyfathy"  target="_blank">

                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-behance" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CBBBB3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
                        <path d="M3 12l4.5 0" />
                        <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
                        <path d="M16 6l3 0" />
                    </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61565640213409&mibextid=qi2Omg&rdid=3RLkhsBhXonokhDM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FpexTWBh1peV9fJyj%2F%3Fmibextid%3Dqi2Omg" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CBBBB3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
                </a>
                <a href="https://wa.me/+201121907224" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CBBBB3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/judy-fathy-9b070532a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CBBBB3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                        <path d="M8 11l0 5" />
                        <path d="M8 8l0 .01" />
                        <path d="M12 16l0 -5" />
                        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </svg>
                </a>
            </div>
            <img src={shapeL} className="port-shape-left" />
        </DefaultLayout>
    )
}

export default Portfolio;