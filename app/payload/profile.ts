import {
  faComment,
  faEnvelope,
  faInfinity,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sample_tux.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김지욱',
    small: '(ziweek)',
  },
  contact: [
    {
      title: 'alex.jiuk.kim@gmail.com',
      link: 'mailto:tux@linux.org',
      icon: faEnvelope,
    },
    {
      title: '010-9590-2997',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://hire-me-please-gpt.streamlit.app/',
      icon: faComment,
    },
    {
      link: 'https://github.com/ziweek',
      icon: faGithub,
    },
    {
      link: 'https://www.linkedin.com/in/ziweek',
      icon: faLinkedin,
    },
  ],
  notice: {
    title: 'AI 마법으로 혁신을 빚어내는 LLM 엔지니어 | 조지아공과대학 석사 과정',
    icon: faBell,
  },
};

export default profile;
