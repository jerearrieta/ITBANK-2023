import Image from 'next/image';

import white_logo_title from '@/public/assets/white_logo_title.webp';
import master_logo from './img/master.png';
import visa_logo from './img/visa.png';
import amex_logo from './img/amex.png';
import chip from './img/chip.png';
import pattern from './img/pattern.png';

import styles from './Tarjeta.module.css';


export default function Card({ numero, cvv, cliente, marca, fecha_expiracion }) {
	let front_brand, back_brand;

	if (marca.codigo === "MASTER") {
		back_brand = <Image src={master_logo} className="h-full w-auto" />;

		front_brand = (
			<>
				{back_brand}
				<span className="text-lg font-medium">{marca.nombre}</span>
			</>
		);
	}
	else if (marca.codigo === "VISA") {
		back_brand = <Image src={visa_logo} className="h-3/4 w-auto" />;
		front_brand = back_brand;
	}
	else {
		back_brand = <Image src={amex_logo} className="h-full w-auto" />;

		front_brand = (
			<>
				{back_brand}
				<span className="text-lg font-medium">{marca.nombre}</span>
			</>
		);
	}

	return (
		<div className={styles.card_container}>
			<div className={styles.card_inner}>

				<div className={styles.card_front}>
					<div className={`${styles.card_row} h-1/5`}>
						<div className="h-full flex items-center gap-3">
							{front_brand}
						</div>

						<Image src={chip} className="h-3/4 w-auto" />
					</div>

					<div>
						<p className={`${styles.card_row} text-xs`}>Numero</p>
						<p className={`${styles.card_row} text-2xl`}>{numero}</p>
					</div>

					<div>
						<div className={`${styles.card_row} text-xs`}>
							<p>Propietario</p>
							<p>Valido hasta</p>
						</div>

						<div className={`${styles.card_row} text-xl`}>
							<p>{cliente}</p>
							<p>{fecha_expiracion}</p>
						</div>
					</div>
				</div>

				<div className={styles.card_back}>
					<div className="bg-[#222] mx-[-30px] h-[50px] mt-1"></div>

					<div className={`${styles.card_row} w-full h-1/5`}>
						<Image src={pattern} className="h-full w-auto" />
						<span className="h-5/6 flex flex-1 justify-center items-center bg-white text-black text-xl">{cvv}</span>
					</div>

					<div className={`${styles.card_row} h-1/5`}>
						<Image src={white_logo_title} className="h-full w-auto" />
						{back_brand}
					</div>
				</div>

			</div>
		</div>
	);
}