import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { useState } from 'react';
import ModalFormat from '@components/organisms/modal/modalFormat';
import ImageFormat from '@components/atoms/image/imageFormat';
import CardFormat from '@components/organisms/card/cardFormat';

// Icons

import { FaListAlt } from 'react-icons/fa';
import { BsFillBoxSeamFill } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { AiFillPieChart } from 'react-icons/ai';
import { BsFillFileTextFill } from 'react-icons/bs';
import { IoSettingsSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { IoIosExit } from 'react-icons/io';


export const SidebarMth = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Manejadores para el hover del sidebar
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

  // Manejador para abrir/cerrar modales
  const handleModalToggle = (modalName: string) => {
    setActiveModal(activeModal === modalName ? null : modalName);
  };

  return (
    <div className="fixed left-0 top-0 z-40 h-full">
      <div
        className="flex flex-col"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Sidebar
          collapsed={collapsed}
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundColor: '#483FFF',
              color: '#483FFF',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
            },
          }}
        >
          <Link to="/dashboard">
            <div>
              <ImageFormat
                classIm="mx-auto"
                src={`../../../../public/assets/images/logo mathilde.png`}
                alt="Logo Mathilde ads"
                width={74}
                height={74}
              />
            </div>
          </Link>
          <Menu>
            <MenuItem
              icon={<FaListAlt className="text-2xl" />}
              onClick={() => handleModalToggle('campanas')}
              className="mx-2 my-1 rounded-lg bg-white hover:bg-opacity-90"
              rootStyles={{
                button: {
                  width: collapsed
                    ? 'calc(100% - 0.5rem)'
                    : 'calc(100% - 1rem)',
                  margin: collapsed ? '0 0.25rem' : '0 0.5rem',
                  color: '#483FFF',
                  '&:hover': {
                    color: '#483FFF',
                  },
                },
              }}
            >
              {' '}
              Campañas{' '}
            </MenuItem>
            <Link to="https://dsp.mathilde-ads.com/login">
              <MenuItem
                icon={<BsFillBoxSeamFill className="text-xl" />}
                className="mx-2 my-1 rounded-lg bg-white hover:bg-opacity-90"
                rootStyles={{
                  button: {
                    width: collapsed
                      ? 'calc(100% - 0.5rem)'
                      : 'calc(100% - 1rem)',
                    margin: collapsed ? '0 0.25rem' : '0 0.5rem',
                    color: '#483FFF',
                    '&:hover': {
                      color: '#483FFF',
                    },
                  },
                }}
              >
                {' '}
                Medios{' '}
              </MenuItem>
            </Link>
            <MenuItem
              icon={<FaUsers className="text-xl" />}
              onClick={() => handleModalToggle('audiencias')}
              className="mx-2 my-1 rounded-lg bg-white hover:bg-opacity-90"
              rootStyles={{
                button: {
                  width: collapsed
                    ? 'calc(100% - 0.5rem)'
                    : 'calc(100% - 1rem)',
                  margin: collapsed ? '0 0.25rem' : '0 0.5rem',
                  color: '#483FFF',
                  '&:hover': {
                    color: '#483FFF',
                  },
                },
              }}
            >
              {' '}
              Audiencias{' '}
            </MenuItem>
            <MenuItem
              icon={<AiFillPieChart className="text-xl" />}
              onClick={() => handleModalToggle('reportes')}
              className="mx-2 my-1 rounded-lg bg-white hover:bg-opacity-90"
              rootStyles={{
                button: {
                  width: collapsed
                    ? 'calc(100% - 0.5rem)'
                    : 'calc(100% - 1rem)',
                  margin: collapsed ? '0 0.25rem' : '0 0.5rem',
                  color: '#483FFF',
                  '&:hover': {
                    color: '#483FFF',
                  },
                },
              }}
            >
              {' '}
              Reportes{' '}
            </MenuItem>
            <MenuItem
              icon={<BsFillFileTextFill className="text-xl" />}
              onClick={() => handleModalToggle('facturacion')}
              className="mx-2 my-1 rounded-lg bg-white hover:bg-opacity-90"
              rootStyles={{
                button: {
                  width: collapsed
                    ? 'calc(100% - 0.5rem)'
                    : 'calc(100% - 1rem)',
                  margin: collapsed ? '0 0.25rem' : '0 0.5rem',
                  color: '#483FFF',
                  '&:hover': {
                    color: '#483FFF',
                  },
                },
              }}
            >
              {' '}
              Facturación{' '}
            </MenuItem>
            <Link to="/settings">
              <MenuItem
                icon={<IoSettingsSharp className="text-xl" />}
                className="mx-2 my-1 rounded-lg bg-white hover:bg-opacity-90"
                rootStyles={{
                  button: {
                    width: collapsed
                      ? 'calc(100% - 0.5rem)'
                      : 'calc(100% - 1rem)',
                    margin: collapsed ? '0 0.25rem' : '0 0.5rem',
                    color: '#483FFF',
                    '&:hover': {
                      color: '#483FFF',
                    },
                  },
                }}
              >
                {' '}
                Configuración{' '}
              </MenuItem>
            </Link>
          </Menu>

          <div className="mt-auto self-end p-4">
            <div className="flex justify-center rounded-lg bg-white p-2">
              <button
                className="cursor-pointer text-3xl"
                style={{ color: '#483FFF' }}
              >
                <IoIosExit />
              </button>
            </div>
          </div>
        </Sidebar>

        {/* Modales */}
        <ModalFormat
          width="40%"
          isOpen={activeModal === 'campanas'}
          onClose={() => setActiveModal(null)}
        >
          <div className="flex flex-col p-10">
            <h2 className="mb-3 text-center font-bold">
              Selecciona el tipo de campaña que quieres crear
            </h2>
            <div className="flex">
              <div className="w-3/6 p-2">
                <CardFormat
                  image={{ type: 'image', name: 'medios-propios' }}
                  title="Medios Propios"
                  description="Crea y administra campañas a los usuarios que ingresan a tus canales."
                />
              </div>
              <div className="w-3/6 p-2">
                <Link to="/thirdPartyCampaign">
                  <CardFormat
                    image={{ type: 'image', name: 'medios-pagos' }}
                    title="Medios Pagos"
                    description="Activa campañas de Marketing Digital usando inventario de Redes Sociales y Google."
                  />
                </Link>
              </div>
            </div>
          </div>
        </ModalFormat>

        <ModalFormat
          isOpen={activeModal === 'audiencias'}
          onClose={() => setActiveModal(null)}
        >
          <h2>Audiencias</h2>
          {/* Contenido del modal de audiencias */}
        </ModalFormat>

        <ModalFormat
          isOpen={activeModal === 'reportes'}
          onClose={() => setActiveModal(null)}
        >
          <h2>Reportes</h2>
          {/* Contenido del modal de reportes */}
        </ModalFormat>

        <ModalFormat
          isOpen={activeModal === 'facturacion'}
          onClose={() => setActiveModal(null)}
        >
          <h2>Facturación</h2>
          {/* Contenido del modal de facturación */}
        </ModalFormat>

        <ModalFormat
          isOpen={activeModal === 'configuracion'}
          onClose={() => setActiveModal(null)}
        >
          <h2>Configuración</h2>
          {/* Contenido del modal de configuración */}
        </ModalFormat>
      </div>
    </div>
  );
};

export default SidebarMth;
