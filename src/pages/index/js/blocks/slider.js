import Swiper from 'swiper'
import { Navigation, Autoplay, Keyboard } from 'swiper/modules'

export function slider() {
	const swiperProgram = new Swiper('#swiper-program', {
		modules: [Navigation, Autoplay, Keyboard],
		rewind: true,
		speed: 800,
		spaceBetween: 15,
		slidesPerView: 1,

		navigation: {
			prevEl: '.program__btn_prev',
			nextEl: '.program__btn_next',
		},

		autoplay: {
			delay: 30000000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},

		keyboard: {
			enabled: true,
		},

		breakpoints: {
			992: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
		},
	})
}
