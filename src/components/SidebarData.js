import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Films',
    path: '/films',
    icon: <AiIcons.AiFillFolder />,
    iconClosed: <RiIcons.RiArrowRightSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Movie Name',
        path: '/films/moviename1',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Movie Name',
        path: '/films/moviename2',
        icon: <IoIcons.IoMdFilm />
      },
    ]
  },
  {
    title: 'People',
    path: '/people',
    icon: <AiIcons.AiFillFolder />,
    iconClosed: <RiIcons.RiArrowRightSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'People Name',
        path: '/people/people1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'People Name',
        path: '/people/people2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Planets',
    path: '/planets',
    icon: <AiIcons.AiFillFolder />,
    iconClosed: <RiIcons.RiArrowRightSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Planets Name',
        path: '/planets/planetsname1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Planets Name',
        path: '/planets/planetsname2',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: 'Species',
    path: '/species',
    icon: <AiIcons.AiFillFolder />,
    iconClosed: <RiIcons.RiArrowRightSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Species Name',
        path: '/species/speciesname1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Species Name',
        path: '/species/speciesname2',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: 'Starships',
    path: '/starships',
    icon: <AiIcons.AiFillFolder />,
    iconClosed: <RiIcons.RiArrowRightSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Starship Name',
        path: '/starships/starship1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Starship Name',
        path: '/starships/starship2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Vehicles',
    path: '/vehicles',
    icon: <AiIcons.AiFillFolder />,
    iconClosed: <RiIcons.RiArrowRightSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Vehicles Name',
        path: '/vehicles/vehiclesname1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Vehicles Name',
        path: '/vehicles/vehiclesname2',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  }
];
