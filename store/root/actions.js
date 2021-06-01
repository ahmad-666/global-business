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
  },
}
