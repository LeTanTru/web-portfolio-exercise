import React, { Suspense } from 'react';

// Lazy load các components
const Hero = React.lazy(() => import('./Hero'));
const Navbar = React.lazy(() => import('./Navbar'));
const Skills = React.lazy(() => import('./Skills'));
const Tech = React.lazy(() => import('./Tech'));
const Experience = React.lazy(() => import('./Experience'));
const Project = React.lazy(() => import('./Project'));
const Contact = React.lazy(() => import('./Contact'));
const CanvasLoader = React.lazy(() => import('./Loader'));
const Footer = React.lazy(() => import('./Footer'));
const SnakeGitCommit = React.lazy(() => import('./SnakeGitCommit'));
const Earth = React.lazy(() => import('./Earth'));
const About = React.lazy(() => import('./About'));
const EarthCanvas = React.lazy(() => import('./canvas/Earth'));
const BallCanvas = React.lazy(() => import('./canvas/Ball'));
const ComputersCanvas = React.lazy(() => import('./canvas/Computers'));
const StarsCanvas = React.lazy(() => import('./canvas/Stars'));

export {
  Hero,
  Navbar,
  Skills,
  Tech,
  Experience,
  Project,
  Contact,
  CanvasLoader,
  Footer,
  SnakeGitCommit,
  Earth,
  About,
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas
};
