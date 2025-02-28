interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'Asignaciones',
    url: '/asignaciones',
    icon: 'icon-drop'
  },
  {
    name: 'Bases',
    children: [
      {
        name: 'Carreras',
        url: '/bases/carreras',
        icon: 'icon-drop'
      },
      {
        name: 'Jornadas',
        url: '/bases/jornadas',
        icon: 'icon-drop'
      },
      {
        name: 'Dias',
        url: '/bases/dias-jornada',
        icon: 'icon-drop'
      },
      {
        name: 'Pensum',
        url: '/bases/pensum',
        icon: 'icon-drop'
      },
      {
        name: 'Cursos',
        url: '/cursos',
        icon: 'icon-drop'
      },
      {
        name: 'Pensum Curso',
        url: '/bases/pensum_curso',
        icon: 'icon-drop'
      },
      {
        name: 'Catedraticos',
        url: '/bases/catedraticos',
        icon: 'icon-drop'
      }
    ]
  },

  {
    name: 'Reportes',
    children: [
      {
        name: 'Planificaciones',
        url: '/reportes/planificacion',
        icon: 'icon-drop'
      },
      {
        name: 'Catedraticos',
        url: '/reportes/catedraticos',
        icon: 'icon-pencil'
      },
      {
        name: 'Cursos',
        url: '/reportes/cursos',
        icon: 'icon-pencil'
      }
    ]
  },
];
