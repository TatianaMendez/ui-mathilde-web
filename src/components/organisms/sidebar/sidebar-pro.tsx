import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { useState } from 'react';
import { Card } from '../card/card';
import { ModalFormat } from '../modal/modalFormat';
import { ImageFormat } from '../../atoms/image/imageFormat';
import { IoIosExit } from 'react-icons/io';

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  action?: () => void;
  href?: string;
  target?: '_blank' | '_self';
}

export interface CardItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // Solo URL externa
  action?: () => void;
  href?: string;
  target?: '_blank' | '_self';
}

export interface SidebarProProps {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  menuItems: MenuItem[];
  campaignCards?: CardItem[];
  onLogout?: () => void;
  defaultCollapsed?: boolean;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

export const SidebarPro: React.FC<SidebarProProps> = ({
  logo,
  menuItems,
  campaignCards = [],
  onLogout,
  defaultCollapsed = true,
  backgroundColor = '#483FFF',
  textColor = '#483FFF',
  className = '',
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleMouseEnter = () => {
    if (!activeModal) {
      setCollapsed(false);
    }
  };

  const handleMouseLeave = () => {
    if (!activeModal) {
      setCollapsed(true);
    }
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.action) {
      item.action();
    } else if (item.href) {
      if (item.target === '_blank') {
        window.open(item.href, '_blank');
      } else {
        window.location.href = item.href;
      }
    }
  };

  const handleCardClick = (card: CardItem) => {
    if (card.action) {
      card.action();
    } else if (card.href) {
      if (card.target === '_blank') {
        window.open(card.href, '_blank');
      } else {
        window.location.href = card.href;
      }
    }
  };

  return (
    <div className={`fixed left-0 top-0 z-40 h-full ${className}`}>
      <div
        className="flex flex-col"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Sidebar
          collapsed={collapsed}
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundColor,
              color: textColor,
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
            },
          }}
        >
          <div className="mb-2 mt-5">
            <a href="/">
              <ImageFormat
                classIm="mx-3"
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </a>
          </div>
          <Menu>
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                icon={item.icon}
                onClick={() => handleItemClick(item)}
                className="mx-3 my-1 mb-2 rounded-md bg-white hover:bg-opacity-90"
                rootStyles={{
                  button: {
                    width: collapsed
                      ? 'calc(100% - 0.5rem)'
                      : 'calc(100% - 1rem)',
                    margin: collapsed ? '0 0.25rem' : '0 0.5rem',
                    color: textColor,
                    '&:hover': {
                      color: textColor,
                    },
                  },
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
          {onLogout && (
            <div className="mt-auto w-full cursor-pointer self-end p-4">
              <div
                className="flex justify-center rounded-md bg-white p-2"
                onClick={onLogout}
              >
                <button className="text-3xl" style={{ color: textColor }}>
                  <IoIosExit />
                </button>
              </div>
            </div>
          )}
        </Sidebar>

        {campaignCards.length > 0 && (
          <ModalFormat
            width="40%"
            isOpen={activeModal === 'campaigns'}
            onClose={() => setActiveModal(null)}
          >
            <div className="flex flex-col px-10 pb-5">
              <h2 className="mb-3 text-center font-bold">
                Selecciona el tipo de campaña que quieres crear
              </h2>
              <div className="flex">
                {campaignCards.map((card) => (
                  <div
                    key={card.id}
                    className="flex w-3/6 p-2"
                    onClick={() => handleCardClick(card)}
                  >
                    <Card
                      imageUrl={card.imageUrl}
                      title={card.title}
                      description={card.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </ModalFormat>
        )}
      </div>
    </div>
  );
};

export default SidebarPro;
