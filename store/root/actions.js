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
      referralId: 886,
      username: 'mehrdad mola12',
      avatarImgSrc:
        '/imgs/sezar-themes/light-blue-ltr/images/default-avatar.png',
      userId: 'fxtg4',
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
    vuexContext.commit('setComments', {
      comments: [
        {
          id: 1,
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.',
          username: 'Rinks Cooper',
          userRank: 'CEO, GlobalBusiness',
          userImgSrc: 'imgs/feedback/01.jpg',
        },
        {
          id: 2,
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.',
          username: 'JD Scot',
          userRank: 'CEO, GlobalBusiness',
          userImgSrc: 'imgs/feedback/02.jpg',
        },
        {
          id: 3,
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.',
          username: 'Haris Morgan',
          userRank: 'CEO, GlobalBusiness',
          userImgSrc: 'imgs/feedback/03.jpg',
        },
      ],
    })
  },
}
