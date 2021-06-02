export default {
  nuxtServerInit(vuexContext, context) {
    vuexContext.commit('setInitData', {
      tel: '+0123 456 789',
      telTime: 'Mon-Fri 8:00am - 8:00pm',
      email: 'something@gmail.com',
      emailTime: 'Mon-Fri 8:00am - 8:00pm',
      address: '1234 North Luke Lane, South Bend,IN 360001',
      socials: [
        { id: 1, type: 'twitter', url: '/' },
        { id: 2, type: 'facebook', url: '/' },
        { id: 3, type: 'google', url: '/' },
        { id: 4, type: 'github', url: '/' },
      ],
      footerPosts: [
        {
          title: 'Ipsum is simply dummy text simply dummy.',
          date: 'Nov 10, 2016',
          imgSrc: 'imgs/blog/01.jpg',
          link: '/',
        },
        {
          title: 'Simply dummy text of the printing ipsum is simply.',
          date: 'Nov 10, 2016',
          imgSrc: 'imgs/blog/02.jpg',
          link: '/',
        },
        {
          title: 'Simply dummy text of the printing ipsum is simply.',
          date: 'Nov 10, 2016',
          imgSrc: 'imgs/blog/03.jpg',
          link: '/',
        },
      ],
    })
    vuexContext.commit('setCounterItems', {
      counterItems: [
        {
          id: 1,
          icon: 'folder',
          finalVal: 1540,
          duration: 4000,
          label: 'project',
        },
        {
          id: 2,
          icon: 'copy',
          finalVal: 2530,
          duration: 4000,
          label: 'awards',
        },
        {
          id: 3,
          icon: 'user',
          finalVal: 8120,
          duration: 4000,
          label: 'clients',
        },
        { id: 4, icon: 'star', finalVal: 1620, duration: 4000, label: 'rates' },
      ],
    })
  },
}
