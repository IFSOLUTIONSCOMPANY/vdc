import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { IoMdTime } from "react-icons/io";
import { ModalData, ServiceData } from "../../constant/index";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const ActiveSlider = () => {
    return (
        <div className="flex items-center justify-center flex-col lg:px-24 py-64 bg-gradient-to-br from-blue-900 to-indigo-400">
            <h1 className="text-xl md:text-3xl lg:text-4xl text-white font-semibold my-8">Nos Évènements</h1>
            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="w-full px-10"
            >
                {ServiceData.map((item, index) => (
                    <SwiperSlide key={item.title}>
                        <div className="flex flex-col hover:shadow-gray-900 shadow-lg text-white rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing mx-10 mt-10 mb-14" data-aos="zoom-in" data-aos-duration="3000">
                            <img src={item.backgroundImage} alt="event background" className="w-full" />
                            <div className="bg-blue-950 space-y-3 pt-2">
                                <h1 className="text-center md:text-md max-lg:text-xl font-sans">{item.title}</h1>
                                <p className="text-center text-sm">{item.content}</p>
                                <div onClick={() => document.getElementById(`my_modal_${index}`).showModal()} className="text-center">
                                    <button className="btn btn-neutral text-white btn-sm mb-5 btn-outline">+ d'infos</button>
                                </div>
                            </div>
                        </div>
                        <dialog id={`my_modal_${index}`} className="modal" key={item.title}>
                            <div className="modal-box bg-blue-950 text-white">
                                <h3 className="font-bold text-md md:text-lg text-center">{ModalData[index].place}</h3>
                                <p className="py-4 md:text-lg text-center">{ModalData[index].time}</p>
                                <p className="py-4 md:text-lg text-center">{ModalData[index].content}</p>
                                <p className="py-4 md:text-lg text-center">{ModalData[index].content_bis}</p>
                                <p className="py-4 md:text-lg text-center">{ModalData[index].content_ter}</p>
                                <p className="py-4 md:text-lg text-center">{ModalData[index].content_quarter}</p>
                                <p className="py-4 md:text-lg text-center">{ModalData[index].question}</p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

export default ActiveSlider;
