// import reception_logo from '../assets/images/ekored/
import seleccion_logo from '../assets/images/ekored/seleccion_logo.png'
import compactacion_logo from '../assets/images/ekored/compatacion_logo.png'
import despacho_logo from '../assets/images/ekored/despacho_logo.png'
import recepcion_logo from '../assets/images/ekored/recepcion_logo.png'



export const dashboardData = [
  {
    title: 'Recepción',
    image: <img src={recepcion_logo} alt="recepcion_logo" />,
  },
  {
    title: 'Selección',
    image: <img src={seleccion_logo} alt="seleccion_logo" />,
  },
  {
    title: 'Compactación',
    image: <img src={compactacion_logo} alt="compactacion_logo" />,
  },
  {
    title: 'Despacho',
    image: <img src={despacho_logo} alt="despacho_logo" />,
  }
]