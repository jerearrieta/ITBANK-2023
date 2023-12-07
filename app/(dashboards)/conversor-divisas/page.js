import Conversor from './Conversor';

import './style.css';


export const metadata = {
  title: 'Conversor de divisas',
  description: 'Conversor de monedas de Guardian Bank',
}

export default async function Page() {
  return <Conversor />;
}
