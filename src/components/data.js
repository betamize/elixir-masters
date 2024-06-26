import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from '@heroicons/react/24/solid';

import benefitOneImg from '../../public/img/benefit-one.png';
import benefitTwoImg from '../../public/img/benefit-two.png';
import {
  ClockIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const benefitOne = {
  title: `Highlight's of Elixir`,
  desc: 'Elixir is a modern programming language built on the Erlang VM (BEAM), known for its exceptional performance, scalability, and fault tolerance.',
  image: benefitOneImg,
  bullets: [
    {
      title: 'High Performance and Scalability',
      desc: 'Elixir handles numerous simultaneous connections efficiently.',
      icon: <RocketLaunchIcon />,
    },
    {
      title: 'Fault Tolerance and Reliability',
      desc: 'Built on the Erlang VM, Elixir systems recover automatically from failures.',
      icon: <ShieldCheckIcon />,
    },
    {
      title: 'Maintainability and Productivity',
      desc: 'Elixir’s clean syntax and functional programming paradigm enhance code readability and ease of maintenance.',
      icon: <WrenchScrewdriverIcon />,
    },
    {
      title: 'Real-Time Capabilities',
      desc: 'Phoenix LiveView allows for real-time updates and dynamic user interfaces without complex JavaScript.',
      icon: <ClockIcon />,
    },
    {
      title: 'Cost Efficiency',
      desc: 'Elixir’s lightweight processes allow for high concurrency with minimal resource usage, reducing infrastructure costs.',
      icon: <CurrencyDollarIcon />,
    },
  ],
};

const benefitTwo = {
  title: 'Use Cases of Elixir',
  desc: 'Versatile Applications Across Various Domains',
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Web Applications',
      desc: 'Build scalable and maintainable web applications with Phoenix.',
      icon: <ComputerDesktopIcon />,
    },
    {
      title: 'Real-Time Systems',
      desc: 'Create real-time features such as live updates, chat applications, and online games.',
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: 'Microservices',
      desc: 'Develop distributed systems and microservices that require high availability and fault tolerance.',
      icon: <ServerStackIcon />,
    },
    {
      title: 'Embedded Systems',
      desc: 'Leverage Elixir’s capabilities for developing IoT and embedded systems.',
      icon: <CpuChipIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
