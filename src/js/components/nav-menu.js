export class NavMenu {
   constructor() {
       this.nav = $('.nav');
       this.nav_opener = $('.nav-opener');
       this.addclass();
   }

   addclass() {
       this.nav_opener.on('click', () => {
           this.nav.toggleClass('nav-active');
           $('body').toggleClass('scroll-none');
       })
   }
}