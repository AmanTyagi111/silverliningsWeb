
var workDetails = new Object();
workDetails['jyoti'] = {title:'Jyoti', imageSrc : '../assets/logo.PNG'};
workDetails['fusion'] = {title:'Fusion', imageSrc : '../assets/share.jpg'};
workDetails['diversity'] = {title:'Diversity', imageSrc : '../assets/logo.PNG'};
workDetails['shiksha'] = {title:'Shiksha', imageSrc : '../assets/share.jpg'};

function onTabClick(event) {
            console.log("adsdsadSA"+event.id);
            var idTag = event.id.substr(0,event.id.indexOf("Tab")) ;
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                  if(tabcontent[i].id == idTag + 'Content')
                        tabcontent[i].classList.add('selected');
                  else
                        tabcontent[i].classList.remove('selected');
            }

            tablinks = document.getElementsByClassName("tablink");
            for (i = 0; i < tablinks.length; i++) {
                  if(tablinks[i].id == idTag + 'Tab')
                        tablinks[i].classList.add('selected');
                  else
                        tablinks[i].classList.remove('selected');
             }

             var tabImgs = document.getElementsByClassName("tabImage");
             for (i = 0; i < tabImgs.length; i++) {
                  if(tabImgs[i].id == idTag + 'Img')
                        tabImgs[i].classList.add('selected');
                  else
                        tabImgs[i].classList.remove('selected');
             }

            }

