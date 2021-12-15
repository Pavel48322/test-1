document.addEventListener('DOMContentLoaded', () => {

    console.log('fsdfdsf');

    const openList = () => {
        const catalogHeaderTwoActive = document.querySelectorAll('.catalog_header_two_active');
        const catalogHeaderActive = document.querySelectorAll('.catalog_header_active');

        catalogHeaderTwoActive.forEach(item => {
            item.addEventListener('click', (e) => {
                e.target.classList.toggle('catalog_header_two_active_before');
                if(e.target.classList.contains('catalog_header_two_active_before')){
                    e.target.style.borderBottom = 'none';
                    e.target.parentNode.parentNode.style.boxShadow = '0px 0px 6px rgba(0, 0, 0, 0.15)';
                    e.target.nextSibling.nextSibling.classList.add('catalog_header_active_show');
                    e.target.nextSibling.nextSibling.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.15)';

                } else {
                    e.target.style.borderBottom = '1px solid #D0D0D0';
                    e.target.nextSibling.nextSibling.classList.remove('catalog_header_active_show');
                    e.target.parentNode.parentNode.style.boxShadow = '0px 0px 0px ';
                    e.target.nextSibling.nextSibling.style.boxShadow = '0px 0px 0px';
                }
            });
        });
        catalogHeaderActive.forEach(item => {
            item.addEventListener('click', (e) => {
                let text = e.target.textContent;
                e.target.parentNode.parentNode.previousSibling.previousSibling.textContent = text;
                e.target.parentNode.parentNode.previousSibling.previousSibling.classList.remove('catalog_header_two_active_before');
                e.target.parentNode.parentNode.previousSibling.previousSibling.style.borderBottom = '1px solid #D0D0D0';
                e.target.parentNode.parentNode.classList.remove('catalog_header_active_show');
                e.target.parentNode.parentNode.parentNode.parentNode.style.boxShadow = '0px 0px 0px ';
                e.target.style.boxShadow = '0px 0px 0px';
            });
        });
        
        
    }

    if (document.documentElement.clientWidth >= 1061) {
        openList();
    } 

    const openListMob = () => {
        const catalogHeaderTwoActive = document.querySelectorAll('.catalog_header_two_active');
        const catalogHeaderActive = document.querySelectorAll('.catalog_header_active');
        const catalogHeaderTwoShadow = document.querySelectorAll('.catalog_header_two_shadow');
        const closeFilter = document.querySelector('.close_filter');
        const filter = document.querySelector('.filter');
        const catalogInfoPhoneImg = document.querySelector('.catalog_info_phone_img');
        const filterBtn = document.querySelector('.filter_btn');

        const filterClose = (oneSelector) => {
            oneSelector.addEventListener('click', (e) => {
                filter.classList.remove('filter_active');
                document.body.style.overflow = 'initial';// чтобы оснoвное окно нельзя было прокрутить
            });
        }

        filterClose(closeFilter);
        filterClose(filterBtn);

        catalogInfoPhoneImg.addEventListener('click', (e) => {
            filter.classList.add('filter_active');
            document.body.style.overflow = 'hidden';// чтобы оснoвное окно нельзя было прокрутить
        });
        
        filter.addEventListener('click', (e) => {
            if(e.target.classList.contains('filter')) {
                e.target.classList.remove('filter_active');
                document.body.style.overflow = 'initial';// чтобы оснoвное окно нельзя было прокрутить
            }
        });
        

        


        catalogHeaderTwoActive.forEach(item => {
            item.addEventListener('click', (e) => {                
                if(e.target.nextSibling.nextSibling.classList.contains('catalog_header_active_show')) {
                    e.target.nextSibling.nextSibling.classList.remove('catalog_header_active_show');
                    catalogHeaderTwoActive.forEach(elem => {
                        elem.style.borderBottom = '1px solid #D0D0D0';
                        elem.style.paddingBottom = '13px';
                    });
                    catalogHeaderActive.forEach(elem => {
                        elem.style.boxShadow = '0px 0px 0px';
                    });
                    catalogHeaderTwoShadow.forEach(elem => {
                        elem.style.boxShadow = '0px 0px 0px';
                    });
                } else {
                    catalogHeaderActive.forEach(elem => {
                        elem.classList.remove('catalog_header_active_show');
                    });
                    
                    e.target.nextSibling.nextSibling.classList.add('catalog_header_active_show');
                    e.target.style.borderBottom = 'none';
                    e.target.style.paddingBottom = '14px';
                    e.target.nextSibling.nextSibling.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.15)';
                    e.target.parentNode.parentNode.style.boxShadow = '0px 0px 6px rgba(0, 0, 0, 0.15)';
                }
            });
        });

        catalogHeaderActive.forEach(item => {
            item.addEventListener('click', (e) => {
                let text = e.target.textContent;
                e.target.parentNode.parentNode.previousSibling.previousSibling.textContent = text;
                e.target.parentNode.parentNode.previousSibling.previousSibling.classList.remove('catalog_header_two_active_before');
                e.target.parentNode.parentNode.classList.remove('catalog_header_active_show');
                e.target.parentNode.parentNode.parentNode.parentNode.style.boxShadow = '0px 0px 0px ';
                e.target.style.boxShadow = '0px 0px 0px';
                catalogHeaderTwoActive.forEach(elem => {
                        elem.style.borderBottom = '1px solid #D0D0D0';
                        elem.style.paddingBottom = '13px';

                    });
            });
        });
    }

    if (document.documentElement.clientWidth <= 1060) {
        openListMob();
    } 



    const menu = () => {
        const headerMenu = document.querySelector('.header_menu'),
              menuBlock = document.querySelector('.menu');

            

        headerMenu.addEventListener('click', (e) => {
            menuBlock.classList.toggle('menu_active');
                if (menuBlock.classList.contains('menu_active')) {
                    console.log(document.documentElement.clientWidth);
                    if (document.documentElement.clientWidth >= 769) {
                        menuBlock.style.top = '71px';
                    } else if (document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth >= 501) {
                        menuBlock.style.top = '64px';
                    } else {
                        menuBlock.style.top = '71px';
                    }
                    document.addEventListener('click', (e) => {
                        if (!e.target.classList.contains('menu') && !e.target.classList.contains('header_menu_burger')) {
                            menuBlock.classList.remove('menu_active');
                            menuBlock.style.top = '-100%';

                        }
                    });
                } else {
                    menuBlock.style.top = '-100%';
                }
            
        });

        

        
    }

    menu();

    const search = () => {
        const headerSearchImg = document.querySelector('.header_search_img'),
              search = document.querySelector('.search'),
              searchInput = document.querySelector('.search input');
              searchContainer = document.querySelector('.search>container');

        headerSearchImg.addEventListener('click', (e) => {
            search.classList.toggle('search_active');
            if( search.classList.contains('search_active') ) {
                search.style.height = '44px';
                searchInput.style.height = '42px';
                searchContainer.style.height = '44px';
            } else {
                search.style.height = '0px';
                searchInput.style.height = '0px';
                searchContainer.style.height = '0px';
            }

        })
    }

    if (document.documentElement.clientWidth <= 500) {
        search();
    } 

    

});