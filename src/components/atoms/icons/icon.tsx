// Importamos solo los iconos que necesitamos
import { HiHome } from 'react-icons/hi';
import { FaReact } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';

const iconMap = {
  hiHiHome: HiHome,
  faFaReact: FaReact,
  mdMdFavorite: MdFavorite,
  aiAiFillHeart: AiFillHeart,
  // Agrega aquí más iconos según los necesites
};

export const getIcon = async (iconKey: string) => {
  return iconMap[iconKey as keyof typeof iconMap];
};
